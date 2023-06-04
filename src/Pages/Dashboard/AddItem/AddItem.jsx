import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const img_hosting_token = import.meta.env.VITE_PRODUCT_IMAGE_TOKEN;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    data.image = imgURL;
                    data.price = parseFloat(data.price)

                    axiosSecure.post('/menu', data)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your item has been added',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                            }
                        })
                }
            })
    };

    return (
        <div className='bg-white -mt-14'>
            <section>
                <section className='pt-6'></section>
                <SectionTitle
                    subHeading={"What's New?"}
                    heading={'ADD AN ITEM'}
                ></SectionTitle>
            </section>

            <div className="custom-container mt-8 bg-[#F3F3F3] p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='text-xl text-[#444444] font-semibold'>Recipe Name*</label>
                        <input className='w-full mt-3 input' placeholder='Recipe Name' {...register("name", { required: true })} />
                        {errors.recipeName && <span>This field is required</span>}
                    </div>

                    <div className='grid grid-cols-2 gap-5 my-5'>
                        <div>
                            <label className='text-xl text-[#444444] font-semibold'>Category*</label>
                            <select {...register("category")} className='w-full mt-3 select' >
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                            {errors.category && <span>This field is required</span>}
                        </div>

                        <div>
                            <label className='text-xl text-[#444444] font-semibold'>Price*</label>
                            <input placeholder='Price' {...register("price", { required: true })} className='input w-full mt-3' />
                            {errors.price && <span>This field is required</span>}
                        </div>
                    </div>

                    <div>
                        <label className='text-xl text-[#444444] font-semibold'>Recipe Details*</label>
                        <textarea className='textarea w-full mt-3 resize-none' rows='5' placeholder='Recipe Details' {...register("recipe", { required: true })}></textarea>
                        {errors.recipeDetails && <span>This field is required</span>}
                    </div>

                    <input className='file-input bg-transparent my-3' type="file" {...register("image", { required: true })} />
                    {errors.foodImg && <span>This field is required</span>}

                    <br />
                    <div className='btn bg-gradient-to-r from-[#835D23] to-[#B58130] border-none rounded-sm px-6'>
                        <input type="submit" value="Add Item" className='mr-2' />
                        <FaUtensils></FaUtensils>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;