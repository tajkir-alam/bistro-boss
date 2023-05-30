import React from 'react';
import { Helmet } from 'react-helmet-async';
import CommonBanner from '../../components/CommonBanner';
import banner2 from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <CommonBanner
                bgImg={banner2}
                title={'our shop'}
                subTitle={'Would you like to try a dish?'}
            ></CommonBanner>

            <Tabs className='mt-14'>
                <TabList className='text-center text-xl font-bold uppercase'>
                    <Tab>Salda</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drins</Tab>
                </TabList>

                <TabPanel>
                   
                </TabPanel>
                <TabPanel>
                    
                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;