import React from 'react';
import soup from '../../assets/menu/soup-bg.jpg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'

const SectionImg = ({ img, title, subTitle }) => {
    return (
        <div className="hero h-[calc(100vh-500px)] lg:h-[calc(100vh-150px)] py-28 px-2 lg:px-0 mt-8" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-content text-center text-neutral-content hero-overlay bg-opacity-70 custom-container rounded mt-0">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl lg:text-6xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionImg;