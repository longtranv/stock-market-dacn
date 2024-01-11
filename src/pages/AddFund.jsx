import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../components/CheckoutForm'
import './AddFund.css'
import 'axios'
import axios from 'axios'

const stripePromise = loadStripe("pk_test_51OWt0NGObWmLgyNXgJd72lspi9H20GYarrb0LIIVFvjsJ2xWAHMlp3TdUJPM2AlVxbG8kM738bTWg7lpepGawHX500K10GojSJ");

function AddFund() {

    const [clientSecret, setClientSecret] = useState("");

    useEffect(()=>{
        const fetchData = async()=>{
            const {data} = await axios.post('http://localhost:5000/add-funds', {
                userId: '659b1d8a5f21a475d7b56625',
                amount: 10
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
        console.log('da toi day');
        const message = await axios.post('http://localhost:5000/addfund-success',{
            userId: '659b1d8a5f21a475d7b56625',
            paymentIntentId: paymentIntentId
        });
        console.log(message);
    }
    
    return (
    <div className='AddFund'>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm clientSecret={clientSecret} onSuccess={(paymentIntentId)=>onSuccessHandle(paymentIntentId)} />
            </Elements>
        )}
    </div>
    );
}

export default AddFund