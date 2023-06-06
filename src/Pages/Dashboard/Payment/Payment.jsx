import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK_KEY);

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;