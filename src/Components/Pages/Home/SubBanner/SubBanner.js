import React from 'react';
import './SubBanner.css'

const SubBanner = () => {
    return (
        <div className='subBanner mt-20 text-center'>
            <h2 className='font-bold md:text-4xl my-3 text-3xl text-white'>Plan an Unforgettable Experience in Mykonos Today!</h2>
            <p className='text-white text-xl'>We can help you fit your stay and experience within your allotted budget.</p>
            <p className='text-white mt-10 text-lg'>BOOK YOUR STAY NOW</p>
            <div>
                <h3 className='text-white font-bold text-4xl'>+1-123 456 7890</h3>
            </div>
        </div>
    );
};

export default SubBanner;