import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { FaRegTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-data.vercel.app/users/admin/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                `${user.name}`,
                                'is admin now.',
                                'success'
                            )
                        }
                    })
            }
        })
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
                fetch(`https://bistro-boss-server-data.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
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
                    subHeading={'How Many'}
                    heading={'MANAGE ALL USERS'}
                ></SectionTitle>
            </section>
            <section className='custom-container bg-white py-6 px-5 rounded'>
                <div className='uppercase text-2xl tracking-wide font-bold'>
                    <h1>Total users: {users.length}</h1>
                </div>

                {/* Table start */}
                <div className="overflow-x-auto mt-8">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>ROll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <td className='font-semibold'>{index + 1}</td>
                                        <td >{user.name}</td>
                                        <td >{user.email}</td>
                                        <td>
                                            {user.role === 'admin' ? 'admin' :
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-2xl text-white hover:text-black duration-500 bg-[#D1A054]"><FaUsers /></button>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user._id)} className="btn btn-ghost text-2xl text-white hover:text-black duration-500 bg-[#B91C1C]"><FaRegTrashAlt /></button>
                                        </td>
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

export default AllUsers;