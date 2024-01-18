import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../components/CheckoutForm'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const stripePromise = loadStripe("pk_test_51OWt0NGObWmLgyNXgJd72lspi9H20GYarrb0LIIVFvjsJ2xWAHMlp3TdUJPM2AlVxbG8kM738bTWg7lpepGawHX500K10GojSJ");

function AddFund() {

    const [clientSecret, setClientSecret] = useState("");

    const location = useLocation();
    const user = useSelector((state)=>state.user.currentUser);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async()=>{
            const {data} = await axios.post('https://market-stock.onrender.com/add-funds', {
                userId: user.user.id,
                amount: location.state
            },{
                headers: {
                    Authorization: `Bearer ${user.tokens.access.token}`
                }
            })
            .catch((error)=>{
                console.log(error)
            });
            setClientSecret(data.clientSecret);
        }
        fetchData()
    }, [])

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    const onSuccessHandle = async(paymentIntentId)=>{
        const message = await axios.post('https://market-stock.onrender.com/addfund-success',{
            userId: user.user.id,
            paymentIntentId: paymentIntentId
        });
        navigate('/success');
    }
    
    return (
    <div className='flex items-center'>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm clientSecret={clientSecret} onSuccess={(paymentIntentId)=>onSuccessHandle(paymentIntentId)} />
            </Elements>
        )}
    </div>
    );
}

export default AddFund