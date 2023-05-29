import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import useMenu from '../../hooks/useMenu';

const CommonMenu = ({ SectionImg, button }) => {

    const [menu] = useMenu(SectionImg)

    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-4 custom-container'>
                {
                    menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-12'>
                <button className="btn btn-outline border-0 border-b-2 hover:bg-transparent hover:text-black">
                    {button ? button : 'ORDER YOUR FAVOURITE FOOD'}
                </button>
            </div>
        </div>
    );
};

export default CommonMenu;