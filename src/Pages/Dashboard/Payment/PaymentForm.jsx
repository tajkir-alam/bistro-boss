import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const PaymentForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(data => {
                    // console.log(data.data.clientSecret);
                    setClientSecret(data.data.clientSecret)
                })
        }
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCardError('');

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous user',
                    name: user?.displayName || 'anonymous user',
                },
            },
        });

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartsItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.foodId),
                itemNames: cart.map(item => item.name),
                status: 'pending', 
            }
            axiosSecure.post('/payment', payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your payment done successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    }
                })
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
                <p className='text-red-600 text-lg ml-2'>{cardError}</p>
                <div className='w-1/2 mx-auto text-center'>
                    <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-primary w-full'>
                        Pay
                    </button>
                </div>
            </form>

            {transactionId &&
                <p className='mt-6 font-medium tracking-wider text-lg text-red-500'>Payment done with this transaction id: <span className='text-red-700'>'{transactionId}'</span></p>
            }
        </div>
    );
};

export default PaymentForm;