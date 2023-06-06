import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const ShopCard = ({ item }) => {
    const { image, name, recipe, price, category, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart()

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-middle',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleCartBtn = (item) => {
        const cartItem = { foodId: _id, name, image, price, category, email: user?.email }
        if (user) {
            fetch('https://bistro-boss-server-data.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Toast.fire({
                            icon: 'success',
                            title: 'Successfully added'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: '',
                text: "Please Login to add in your cart",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card rounded-none bg-[#F3F3F3] shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
                <h5 className='absolute top-2 right-2 bg-accent-content text-white py-2 px-5 rounded font-semibold tracking-wider'>${price}</h5>
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleCartBtn(item)} className="btn bg-transparent border-[#BB8506] text-[#BB8506] border-0 border-b-2">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;