import React from 'react';
import './AllPageBanner.css'

const AllPageBanner = (props) => {
    return (
        <div className='pageBanner text-center'>
            <h2 className='text-5xl uppercase font-bold text-white'>{props.pageName}</h2>
        </div>
    );
};

export default AllPageBanner;