import React from 'react';
import useMenu from '../../../hooks/useMenu';
import RecommandationCard from './RecommandationCard';

const RecommandationFood = () => {
    const [menu] = useMenu('popular')

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 custom-container'>
            {
                menu.map(item => <RecommandationCard item={item} key={item._id}></RecommandationCard>)
            }
        </div>
    );
};

export default RecommandationFood;