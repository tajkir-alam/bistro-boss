import React, { useContext, useEffect, useState } from 'react';
import sideImg from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

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

    const navigate = useNavigate();

    const { emailLogin, googleLogin, loader, setLoader } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [disable, setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        emailLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                Toast.fire({
                    icon: 'success',
                    title: 'Logged in successfully'
                })
                navigate(from, { replace: true });
                reset();
            })
            .catch(error => {
                // console.log(error.message)
                setLoader(false);
            })
    };

    const googleSignup = () => {
        setLoader(true);
        googleLogin()
            .then(result => {
                const user = result.user;
                Toast.fire({
                    icon: 'success',
                    title: 'Logged in successfully'
                })
                navigate(from, { replace: true });
                setLoader(false);
            })
            .catch((error) => {
                // console.log(error.message);
                setLoader(false);
            })
    }

    const handleCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }
    }

    return (
        <div className='bg-authentication-BgImg bg-center'>
            <div className='custom-container mt-0 py-24'>
                <div className='grid lg:grid-cols-2 gap-4 items-center shadow-2xl p-4 lg:p-24'>
                    <div className='hidden lg:block'>
                        <img src={sideImg} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-center tracking-wide">Login</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
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

                            <div className='space-y-2 mb-5'>
                                <div className="p-2 rounded-md"><LoadCanvasTemplate></LoadCanvasTemplate></div>
                                <input onBlur={handleCaptcha} type="text" placeholder='Enter the captcha' className="input input-bordered w-full" />
                            </div>

                            <input type="submit" disabled={disable} className='btn border-none w-full bg-[#D1A054]' />
                        </form>

                        <div className="text-center mt-8 text-[#D1A054] font-semibold space-y-4">
                            <h4>Already registered? <Link to={'/signup'} className='font-bold'>Go to sign up</Link></h4>
                            <h5 className='text-[#444444]'>Or sign in with</h5>
                            <div className='flex gap-4 justify-center items-center'>
                                <FaFacebookF className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-[#444444] hover:text-white duration-500'></FaFacebookF>
                                <FaGoogle onClick={googleSignup} className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-[#444444] hover:text-white duration-500'></FaGoogle>
                                <FaGithub className='text-2xl text-[#444444] border-2 border-[#444444] rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-[#444444] hover:text-white duration-500'></FaGithub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;