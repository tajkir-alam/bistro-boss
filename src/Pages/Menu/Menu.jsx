import React from 'react';
import { Helmet } from 'react-helmet-async';
import banner3 from '../../assets/menu/banner3.jpg'
import CommonBanner from '../../components/CommonBanner';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <CommonBanner
                bgImg={banner3}
                title={'our menu'}
                subTitle={'Would you like to try a dish?'}
            ></CommonBanner>
        </div>
    );
};

export default Menu;