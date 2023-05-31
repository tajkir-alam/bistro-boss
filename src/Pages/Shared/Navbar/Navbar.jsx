import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import profilePic from '../../../assets/others/profile.png'

const Navbar = () => {

    const { user, logOut, loader, setLoader } = useContext(AuthContext);

    const navItems = <>
        <li>
            <Link className='uppercase' to={'/'}>Home</Link>
        </li>
        <li>
            <Link className='uppercase' to={'/contact'}>contact us</Link>
        </li>
        <li>
            <Link className='uppercase' to={'/dashboard'}>dash board</Link>
        </li>
        <li>
            <Link className='uppercase' to={'/menu'}>Our menu</Link>
        </li>
        <li>
            <Link className='uppercase' to={'/shop/salad'}>our shop</Link>
        </li>
    </>

    return (
        <div className="navbar bg-[#15151580] text-white fixed z-10 px-4 lg:px-8 py-4">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                    {
                        navItems
                    }
                </ul>
            </div>

            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    BISTRO BOSS
                    <br />
                    RESTAURANT
                </Link>
            </div>
            <div className="flex-none">
                <ul className="hidden lg:flex menu menu-horizontal">
                    {
                        navItems
                    }
                </ul>

                <div className="dropdown dropdown-end">
                    <label className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                </div>
                {user ?
                    <>
                        <Link to={'/login'} onClick={logOut} className="btn text-white tracking-wider glass mx-1">Log out</Link>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </>
                    : <Link to={'/login'} className="btn text-white tracking-wider glass ml-2">Log in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;