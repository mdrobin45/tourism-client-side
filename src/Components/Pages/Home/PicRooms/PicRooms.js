import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useState,useParams } from 'react/cjs/react.development';
import '../../../Container/Container.css'

const PicRooms = () =>
{
    const [rooms, setRooms] = useState([]);
    useEffect(() =>
    {
        fetch('http://evening-ridge-38074.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, [])

    return (
        <div className='container'>
            <div className='flex items-center justify-between mt-16 py-6'>
                <div className='w-1/2'>
                    <h2 className='font-bold text-3xl'>Pic Room And Stay With Us</h2>
                    <p className='py-3 text-lg'>
                    Pick any of our hotel rooms to experience the delightful decor, complemented with modern amenities for a comfortable stay.
                    </p>
                </div>
                <div>
                    <NavLink className='bg-gray-700 py-3 px-6 text-white' to='/rooms'>View All</NavLink>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                {
                    rooms.map(room => <div
                        className='p-3 rounded shadow'
                        key={room._id}>
                        <img src={room?.img} alt='Thumbnail' />
                        <h2 className='py-3 text-2xl'>{room?.name}</h2>
                        <p className='text-lg text-gray-600'>{room?.shortDes}</p>
                        <div>
                            <NavLink to={`/rooms/${room?._id}`}>Read More</NavLink>
                            <NavLink to={`/place-order/${room?._id}`}>Book Now</NavLink>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PicRooms;