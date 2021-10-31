import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Container/Container.css';
import postIcon from '../../images/post.webp';
import compassIcon from '../../images/compass.webp';
import bicycleIcon from '../../images/bicycle.webp';
import boatIcon from '../../images/boad.webp';
import ReactStars from "react-rating-stars-component";
import AllPageBanner from '../../AllPageBanner/AllPageBanner';
import Loader from "react-loader-spinner";

const Rooms = () =>
{
    const [rooms, setRooms] = useState([]);
    useEffect(() =>
    {
        fetch('https://evening-ridge-38074.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, []);
    return (
        <>
            <AllPageBanner pageName='Our Offers' />
            <div className='container'>
                <div className='mt-16 py-6'>
                    <div>
                        <h2 className='font-bold text-center text-3xl'>THE BEST OFFERS WITH ROOMS</h2>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    {
                        rooms?.length?
                        rooms.map(room => <div
                            className='p-3 py-6 rounded shadow'
                            key={room._id}>
                            <img className='rounded' src={room?.img} alt='Thumbnail' />
                            <div className='flex items-center justify-between pb-2 pt-6'>
                                <h3 className='font-bold text-3xl text-yellow-500'>${room?.price}/<sub className='text-gray-500 text-sm'>per night</sub></h3>
                                <div className='flex justify-center'>
                                    <img className='px-2' src={postIcon} alt="Post" />
                                    <img className='px-2' src={compassIcon} alt="Post" />
                                    <img className='px-2' src={bicycleIcon} alt="Post" />
                                    <img className='px-2' src={boatIcon} alt="Post" />
                                </div>
                            </div>

                            <ReactStars
                                count={5}
                                size={24}
                                value={room.rating}
                                edit={false}
                                activeColor="#ffd700"
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                            />,

                            <p className='text-lg text-gray-600'>{room?.description}</p>
                            <div className='flex justify-between items-center'>
                                <NavLink className='font-bold hover:text-yellow-500 mt-6' to={`/rooms/${room?._id}`}>Read More</NavLink>
                                <NavLink className='text-yellow-500 mt-6 font-bold' to={`/place-order/${room?._id}`}>Book Now</NavLink>
                            </div>
                        </div>) : <div
                            className='left-full m-auto relative text-center'>
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            />
                        </div>
                    }
                </div>
            </div>
        </>

    );
};

export default Rooms;