import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className='custom-container'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='text-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className='mx-auto'
                            />
                            <FaQuoteLeft className='text-5xl mx-auto my-6'></FaQuoteLeft>
                            <p className='w-4/5 mx-auto'>{review.details}</p>
                            <h3 className='text-2xl text-[#CD9003] mt-3'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;