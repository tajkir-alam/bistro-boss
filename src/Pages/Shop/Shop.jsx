import React from 'react';
import { Helmet } from 'react-helmet-async';
import CommonBanner from '../../components/CommonBanner';
import banner2 from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import ShopCard from './ShopCard';

const Shop = () => {

    const [salad] = useMenu('salad');
    const [pizza] = useMenu('pizza');
    const [soup] = useMenu('soup');
    const [dessert] = useMenu('dessert');
    const [drinks] = useMenu('drinks');

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
                <TabList className='text-center text-xl font-bold uppercase mb-8'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 custom-container'>
                        {
                            salad.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 custom-container'>
                        {
                            pizza.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 custom-container'>
                        {
                            soup.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 custom-container'>
                        {
                            dessert.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 custom-container'>
                        {
                            drinks.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;