import React from 'react';
import sideImg from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='bg-authentication-BgImg bg-center'>
            <div className='custom-container mt-0 py-24'>
                <div className='grid lg:grid-cols-2 gap-4 items-center shadow-2xl p-4 lg:p-24'>
                    <div>
                        <h1 className="text-3xl font-bold text-center tracking-wide">Sign Up</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>    
                            <label className="label">
                                <span className="label-text font-semibold pl-1">Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="Enter Your Name" className="input input-bordered mb-5 w-full" />
                            <label className="label">
                                <span className="label-text font-semibold pl-1">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered mb-5 w-full" />
                            {errors.email && <span>This field is required</span>}
                            <label className="label">
                                <span className="label-text font-semibold pl-1">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="Enter Your Password" className="input input-bordered mb-5 w-full" />
                            {errors.password && <span>This field is required</span>}

                            <input type="submit" className='btn border-none w-full bg-[#D1A054]' />
                        </form>

                        <div className="text-center mt-8 text-[#D1A054] font-semibold space-y-4">
                            <h4>Already registered? <Link to={'/login'} className='font-bold'>Go to log in</Link></h4>
                            <h5 className='text-[#444444]'>Or sign up with</h5>
                            <div className='flex gap-4 justify-center items-center'>
                                <FaFacebookF className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer'></FaFacebookF>
                                <FaGoogle className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer'></FaGoogle>
                                <FaGithub className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer'></FaGithub>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={sideImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;