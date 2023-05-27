import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='mt-14 mb-8 w-1/4 mx-auto text-center space-y-4'>
            <h2 className='text-[#D99904] text-xl italic tracking-wider'>---{subHeading}---</h2>
            <h1 className='text-4xl border-y-4 py-4 uppercase'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;