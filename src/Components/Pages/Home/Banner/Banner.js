import React from 'react';
import './Banner.css'
import '../../../Container/Container.css'

const Banner = () => {
    return (
        <div className='homeBanner text-white'>
            <div className='container'>
                <h1 className='font-bold md:text-6xl md:text-left text-4xl text-center'>Rooms and Accommodation</h1>
                <p className='block md:text-left md:text-lg md:w-2/4 py-6 text-center text-xl'>
                If you are looking for a home away from home, just walk in here. You can get both, an incredible and relaxing experience while you are on a holiday. Take a closer look into the rooms we offer and pick the one for you.
                </p>
            </div>
            
        </div>
    );
};

export default Banner;