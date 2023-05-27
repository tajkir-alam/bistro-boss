import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/SectionTitle';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle 
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Category></Category>
        </div>
    );
};

export default Home;