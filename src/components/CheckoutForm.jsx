import React, { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import './AddFund.module.css'

function CheckoutForm({clientSecret, onSuccess}) {

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        if(!stripe){return}
        if(!clientSecret){return}
        console.log(clientSecret)
    }, [message]);

    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(!stripe||!elements){
            return;
        }
        setIsLoading(true);
        
        console.log('ttruoc cai confirm r liu oi')
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              // Make sure to change this to your payment completion page
            },
            redirect: 'if_required'
          });
          console.log('qua confirm r dmm')
          // This point will only be reached if there is an immediate error when
          // confirming the payment. Otherwise, your customer will be redirected to
          // your `return_url`. For some payment methods like iDEAL, your customer will
          // be redirected to an intermediate site first to authorize the payment, then
          // redirected to the `return_url`.
          if (error) {
            setMessage(error.message);
          } else {
            setMessage("An unexpected error occurred.");
          }
          console.log('duma toi day r thg loz');
            stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent})=>{
                console.log('vao cai retireve r thg loz')
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    onSuccess(paymentIntent.id)
                    console.log("toi day roi")
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    console.log("bi loi r dmm");
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: 'tabs'
    }
  return (
    <div className='text-base flex justify-center content-center h-screen w-screen antialiased'>
    <form className='self-center rounded-md p-10 w-[30vw] shadow' onSubmit={handleSubmit}>
      <PaymentElement className='mb-6' id="payment-element" options={paymentElementOptions} />
      <button className='bg-indigo-600 text-white rounded text-base font-semibold cursor-pointer block w-full shadow pt-3 pr-4' disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div className='text-gray-600 text-base leading-5 pt-3 text-center' id="payment-message">{message}</div>}
    </form></div>
  )
}

export default CheckoutForm