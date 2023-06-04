import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {

    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const updateItem = (id) => {

    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch(`http://localhost:5000/menu/${id}`, {
                //     method: 'DELETE'
                // })
                // .then(res => res.json())
                // .then(data => {
                //     console.log(data);
                //     if (data.deletedCount > 0) {
                //         refetch();
                //         Swal.fire(
                //             'Deleted!',
                //             'Your item has been deleted.',
                //             'success'
                //         )
                //     }
                // })
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <section className='-mt-8'>
                <SectionTitle
                    subHeading={'Hurry Up'}
                    heading={'MANAGE ALL ITEMS'}
                ></SectionTitle>
            </section>
            <section className='custom-container bg-white py-6 px-5 rounded'>
                <div className='uppercase text-2xl tracking-wide font-bold'>
                    <h1>Total items: {menu.length}</h1>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) =>
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
                                            <button onClick={() => updateItem(item)} className="btn btn-ghost text-2xl text-white hover:text-black duration-500 bg-[#B91C1C]"><FaRegEdit /></button>
                                        </th>
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

export default ManageItems;