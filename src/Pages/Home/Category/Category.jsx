import React from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div className='custom-container my-12'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" className='w-full' />
                    <h3 className='text-4xl -mt-16 mb-4 text-white text-center uppercase tracking-widest'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" className='w-full' />
                    <h3 className='text-4xl -mt-16 mb-4 text-white text-center uppercase tracking-widest'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" className='w-full' />
                    <h3 className='text-4xl -mt-16 mb-4 text-white text-center uppercase tracking-widest'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" className='w-full' />
                    <h3 className='text-4xl -mt-16 mb-4 text-white text-center uppercase tracking-widest'>cake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" className='w-full' />
                    <h3 className='text-4xl -mt-16 mb-4 text-white text-center uppercase tracking-widest'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;