import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/SectionTitle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle 
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
        </div>
    );
};

export default Home;