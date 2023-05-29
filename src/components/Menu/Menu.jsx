import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';

const Menu = ({ category }) => {

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
        <div>
            <div className='grid lg:grid-cols-2 gap-4 custom-container'>
                {
                    menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-12'>
                <button className="btn btn-outline border-0 border-b-2 hover:bg-transparent hover:text-black">
                    view full menu
                </button>
            </div>
        </div>
    );
};

export default Menu;