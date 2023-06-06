import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
    }

    return (
        <div className='custom-container h-screen mt-[50%] lg:mt-[25%]'>
            <h1 className='text-5xl text-center m-0 p-0'>PAYMENT</h1>
            <form onSubmit={handleSubmit} className='mt-8 form space-y-5'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '28px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                                backgroundColor: '#ffff',
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='w-1/2 mx-auto text-center'>
                    <button type="submit" disabled={!stripe} className='btn btn-primary w-full'>
                        Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;