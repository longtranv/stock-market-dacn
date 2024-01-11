import React, { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

function CheckoutForm({clientSecret, onSuccess}) {

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        if(!stripe){return}
        if(!clientSecret){return}

        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent})=>{
            switch (paymentIntent.status){
                case "succeeded":
                    setMessage("Payment succeeded!");
                    console.log('toi day roi');
                    onSuccess(paymentIntent.id);
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }

        });
    }, [stripe]);

    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(!stripe||!elements){
            return;
        }
        setIsLoading(true);

        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:5173/"
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }
      
          setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: 'tabs'
    }
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element"  />
        <button disabled={isLoading || !stripe || !elements} id="submit">
            <span>
                {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
            </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm