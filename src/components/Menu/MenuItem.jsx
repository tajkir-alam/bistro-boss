import React from 'react';

const MenuItem = ({ item }) => {
    console.log(item);
    const { image, name, price, recipe } = item;
    return (
        <div className='grid grid-cols-5 gap-4'>
            <div>
                <img src={image} alt="" style={{ borderRadius: '0px 200px 200px 200px' }} className='h-4/5' />
            </div>
            <div className='col-span-3'>
                <div className='flex gap-4'>
                    <h1 className='text-xl uppercase'>{name} ----------</h1>
                </div>
                <p className='text-sm'>{recipe}</p>
            </div>
            <div>
                <h3 className="text-[#BB8506]">${price}</h3>
            </div>
        </div>
    );
};

export default MenuItem;