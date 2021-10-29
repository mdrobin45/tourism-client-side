import React from 'react';
import Banner from './Banner/Banner';
import PicRooms from './PicRooms/PicRooms';
import ShortAbout from './ShortAbout/ShortAbout';
import SubBanner from './SubBanner/SubBanner';


const Home = () =>
{
    return (
        <div>
            <Banner />
            <ShortAbout/>
            <PicRooms />
            <SubBanner/>
        </div>
    );
};

export default Home;