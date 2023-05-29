import React from 'react';

const MenuCards = ({ item }) => {
    const { image, name, recipe } = item;
    return (
        <div className="card bg-[#F3F3F3] shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
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

export default MenuCards;