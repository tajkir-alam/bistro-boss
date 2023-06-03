import React, { useContext } from 'react';
import sideImg from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {

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

    const { emailSignup, googleLogin, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const delayNavigate = () => {
        navigate('/login')
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        emailSignup(data.email, data.password, data.name)
            .then(result => {
                const user = result.user;
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
                logOut();
                navigate('/login');
            })
            .catch(error => {
                // setError(error.message.split('(')[1].split(')')[0].split('/')[1])
                console.log(error.message);
            })
    };

    const googleSignup = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                if (user) {
                    setTimeout(delayNavigate, 2000);
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    logOut();
                    reset();
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

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
                                <FaFacebookF className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-[#444444] hover:text-white duration-500'></FaFacebookF>
                                <FaGoogle onClick={googleSignup} className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-[#444444] hover:text-white duration-500'></FaGoogle>
                                <FaGithub className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-[#444444] hover:text-white duration-500'></FaGithub>
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