import React from 'react';

const ShopCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="card rounded-none bg-[#F3F3F3] shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
                <h5 className='absolute top-2 right-2 bg-accent-content text-white py-2 px-5 rounded font-semibold tracking-wider'>${price}</h5>
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-transparent border-[#BB8506] text-[#BB8506] border-0 border-b-2">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;