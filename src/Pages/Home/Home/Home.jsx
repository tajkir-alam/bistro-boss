import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/SectionTitle';
import Category from '../Category/Category';
import Menu from '../../../components/Menu/Menu';

const Home = () => {
    return (
        <div>
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
            <Menu
                category={'popular'}
            ></Menu>
        </div>
    );
};

export default Home;