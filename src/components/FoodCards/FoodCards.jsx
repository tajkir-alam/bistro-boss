import React, { useEffect, useState } from 'react';
import MenuCards from './MenuCards';
import useMenu from '../../hooks/useMenu';

const FoodCards = () => {

    const [menu] = useMenu('popular')

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 custom-container'>
            {
                menu.map(item => <MenuCards item={item} key={item._id}></MenuCards>)
            }
        </div>
    );
};

export default FoodCards;