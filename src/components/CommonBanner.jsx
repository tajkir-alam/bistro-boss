import React from 'react';

const CommonBanner = ({ bgImg, title, subTitle }) => {

    return (
        <div className="hero h-[calc(100vh-500px)] lg:h-[calc(100vh-150px)]" style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl lg:text-6xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;