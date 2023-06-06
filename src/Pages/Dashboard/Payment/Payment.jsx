import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK_KEY);

const Payment = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseInt(totalPrice.toFixed(2));

    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm price={price}></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;