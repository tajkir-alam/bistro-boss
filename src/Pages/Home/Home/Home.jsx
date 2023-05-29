import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/SectionTitle';
import Category from '../Category/Category';
import FoodCards from '../../../components/FoodCards/FoodCards';
import FeatureBanner from '../FeatureBanner/FeatureBanner';
import Reviews from '../Reviews/Reviews';
import { Helmet } from 'react-helmet-async';
import CommonMenu from '../../../components/CommonMenu/CommonMenu';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Category></Category>
            <div className="bg-chef-service py-16 lg:py-24">
                <div className='lg:w-4/5 lg:mx-auto mx-4 bg-white py-12 lg:py-20 px-2 rounded-md text-center'>
                    <div className="lg:w-1/2 mx-auto space-y-3">
                        <h1 className="text-3xl">BISTRO BOSS</h1>
                        <p className='font-light text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
            <SectionTitle
                subHeading={'Check it Out'}
                heading={'from out menu'}
            ></SectionTitle>
            <CommonMenu
                button={'View full menu'}
                SectionImg={'popular'}
            ></CommonMenu>
            <div className='my-14 bg-[#151515] custom-container text-center py-12 rounded'>
                <h3 className='text-white text-3xl'>Call Us: +880 162 463 2302</h3>
            </div>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <FoodCards
                category={'offered'}
            ></FoodCards>
            <FeatureBanner></FeatureBanner>
            <SectionTitle
                subHeading={'What Our Client Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;