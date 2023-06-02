import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import useCart from '../../../../hooks/useCart';
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const MyCart = () => {

    const [cart, refetch] = useCart();
    const totalPriceIs = cart.reduce((sum, p) => p.price + sum, 0);
    const totalPrice = totalPriceIs.toFixed(2);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                }
            })
    }

    return (
        <div>
            <section className='-mt-8'>
                <SectionTitle
                    subHeading={'My Cart'}
                    heading={'wanna add more?'}
                ></SectionTitle>
            </section>
            <section className='custom-container bg-white py-6 px-5 rounded'>
                <div className='flex flex-wrap items-center gap-2 lg:justify-around uppercase text-2xl tracking-wide font-bold'>
                    <div>
                        <h1>Total Orders: {cart.length}</h1>
                    </div>
                    <div>
                        <h1>Total Price: {totalPrice}</h1>
                    </div>
                    <div>
                        <button className="btn btn-sm border-0 bg-[#D1A054]">pay</button>
                    </div>
                </div>

                {/* Table start */}
                <div className="overflow-x-auto mt-8">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) =>
                                    <tr key={item._id}>
                                        <td className='font-semibold'>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-square w-16 h-16">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td >{item.name}</td>
                                        <td >${item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-2xl text-white hover:text-black duration-500 bg-[#B91C1C]"><FaRegTrashAlt /></button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default MyCart;