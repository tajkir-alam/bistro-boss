import React, { useEffect, useState } from 'react';
import MenuCards from './MenuCards';

const FoodCards = ({category}) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const items = data.filter(item => item.category === category);
                setMenu(items);
            })
    }, [])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 custom-container'>
            {
                menu.map(item => <MenuCards item={item} key={item._id}></MenuCards>)
            }
        </div>
    );
};

export default FoodCards;