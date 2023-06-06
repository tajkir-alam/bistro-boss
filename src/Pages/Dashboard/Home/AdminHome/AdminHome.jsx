import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaTruckMoving, FaUserTie, FaUsers, FaWallet } from 'react-icons/fa';
import BarChartComponents from './BarChartComponents';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['amin-status'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-status');
            return res.data;
        }
    })

    return (
        <div className='m-10'>
            <h1 className='text-3xl text-slate-600 font-medium'>Hi, {user?.displayName}. Welcome back.</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 items-center mt-14">
                <div className='flex gap-4 items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white p-8 rounded-md'>
                    <div>
                        <FaWallet className='text-5xl'></FaWallet>
                    </div>
                    <div>
                        <p className='text-2xl'>{stats?.revenue}</p>
                        <p className='uppercase text-2xl font-light'>reveneu</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white p-8 rounded-md'>
                    <div>
                        <FaUsers className='text-5xl'></FaUsers>
                    </div>
                    <div>
                        <p className='text-2xl'>{stats?.customers}</p>
                        <p className='uppercase text-2xl font-light'>customers</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white p-8 rounded-md'>
                    <div>
                        <FaUserTie className='text-5xl'></FaUserTie>
                    </div>
                    <div>
                        <p className='text-2xl'>{stats?.products}</p>
                        <p className='uppercase text-2xl font-light'>products</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white p-8 rounded-md'>
                    <div>
                        <FaTruckMoving className='text-5xl'></FaTruckMoving>
                    </div>
                    <div>
                        <p className='text-2xl'>{stats?.orders}</p>
                        <p className='uppercase text-2xl font-light'>orders</p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-5'>
                <div>
                    <BarChartComponents revenue={stats?.revenue} customers={stats?.customers} products={stats?.products} orders={stats?.orders}></BarChartComponents>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;