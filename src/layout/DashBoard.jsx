import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaGrinStars, FaCalendarCheck, FaAlignJustify, FaShoppingBag, FaEnvelope, FaUtensils, FaListUl, FaBook, FaUsers } from "react-icons/fa";
import useAdmin from '../hooks/userAdmin';

const DashBoard = () => {
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F6F6F6]">
                {/* Page content here */}
                <Outlet></Outlet>
                
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden absolute left-2 top-2"><FaAlignJustify></FaAlignJustify></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                    <Link to={'/'} className='uppercase font-semibold text-2xl ml-4 mb-6'>
                        <span className="font-bold">Bistro Boss</span>
                        <br />
                        restaurant
                    </Link>
                    <div className='divide-y-2 space-y-8'>
                        {isAdmin ?
                            <ul>
                                <li className='uppercase'><NavLink className='font-semibold' to={'/dashboard/admin'}><FaHome />Admin home</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'add-items'}><FaUtensils />Add items</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'manage-items'}><FaListUl />manage items</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'bookings'}><FaBook />manage bookings</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'allusers'}><FaUsers />all users</NavLink></li>
                            </ul>
                            :
                            <ul>
                                <li className='uppercase'><NavLink className='font-semibold' to={'/dashboard/user'}><FaHome />User home</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'reservation'}><FaCalendarAlt />reservation</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'payment'}><FaWallet />payment history</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'cart'}><FaShoppingCart />my cart</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'review'}><FaGrinStars />add review</NavLink></li>
                                <li className='uppercase'><NavLink className='font-semibold' to={'booking'}><FaCalendarCheck />my booking</NavLink></li>
                            </ul>
                        }
                        <ul>
                            <li className='uppercase'><NavLink className='font-semibold' to={'/'}><FaHome />hom</NavLink></li>
                            <li className='uppercase'><NavLink className='font-semibold' to={'/menu'}><FaAlignJustify />menu</NavLink></li>
                            <li className='uppercase'><NavLink className='font-semibold' to={'/shop/salad'}><FaShoppingBag />Shop</NavLink></li>
                            <li className='uppercase'><NavLink className='font-semibold' to={'/contact'}><FaEnvelope />contact</NavLink></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;