import React from 'react';
import featureImg from '../../../assets/home/featured.jpg'

const FeatureBanner = () => {
    return (
        <div className='bg-featured-img bg-center bg-fixed mt-14 mb-8 relative'>
            <div className='bg-[#151515B2] py-16'>
                <div className='mx-8 lg:w-1/4 lg:mx-auto text-center space-y-4'>
                    <h2 className='text-[#D99904] text-xl italic tracking-wider'>---Check it out---</h2>
                    <h1 className='text-4xl text-white border-y-4 border-white py-4 uppercase'>FROM OUR MENU</h1>
                </div>
                <div className="custom-container grid lg:grid-cols-2 gap-8 items-center mt-12">
                    <div>
                        <img src={featureImg} alt="" />
                    </div>
                    <div>
                        <h4 className='text-white text-xl'>
                            March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </h4>
                        <button className="btn border-0 border-b-2 border-white hover:border-white text-white bg-transparent hover:bg-transparent mt-8">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureBanner;