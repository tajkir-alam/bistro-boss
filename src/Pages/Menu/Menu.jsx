import React from 'react';
import { Helmet } from 'react-helmet-async';
import banner3 from '../../assets/menu/banner3.jpg'
import CommonBanner from '../../components/CommonBanner';
import SectionTitle from '../../components/SectionTitle';
import CommonMenu from '../../components/CommonMenu/CommonMenu';
import SectionImg from './SectionImg';
import desert from '../../assets/menu/dessert-bg.jpeg';
import soup from '../../assets/menu/soup-bg.jpg';
import pizza from '../../assets/menu/pizza-bg.jpg';
import salad from '../../assets/menu/salad-bg.jpg';

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
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"Today's offer"}
            ></SectionTitle>
            <CommonMenu
                SectionImg={'offered'}
                title={'offered'}
            ></CommonMenu>

            <SectionImg
                img={desert}
                title={'Deserts'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></SectionImg>
            <CommonMenu
                SectionImg={'dessert'}
                title={'dessert'}
            ></CommonMenu>
            <SectionImg
                img={pizza}
                title={'pizza'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></SectionImg>
            <CommonMenu
                SectionImg={'pizza'}
                title={'pizza'}
            ></CommonMenu>
            <SectionImg
                img={soup}
                title={'soup'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></SectionImg>
            <CommonMenu
                SectionImg={'soup'}
                title={'soup'}
            ></CommonMenu>
            <SectionImg
                img={salad}
                title={'salad'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></SectionImg>
            <CommonMenu
                SectionImg={'salad'}
                title={'salad'}
            ></CommonMenu>
        </div>
    );
};

export default Menu;