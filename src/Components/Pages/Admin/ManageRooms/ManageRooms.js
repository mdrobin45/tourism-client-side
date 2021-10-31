import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from "react-loader-spinner";
import ReactStars from "react-rating-stars-component";
import AllPageBanner from '../../../AllPageBanner/AllPageBanner';
import axios from 'axios';

const ManageRooms = () =>
{
    const [rooms, setRooms] = useState([]);
    const [updateUI, setUpdateUI] = useState(0);
    useEffect(() =>
    {
        fetch('https://evening-ridge-38074.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, [updateUI]);

    // Delete Room
    const deleteRoom = (id) =>
    {
        axios.delete(`https://evening-ridge-38074.herokuapp.com/rooms/${id}`)
            .then(res =>
            {
                if (res.status === 200) {
                    alert('deleted')
                    setUpdateUI(updateUI + 1);
                }
            })
    }
    return (
        <>
            <AllPageBanner pageName='Manage Rooms' />
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
                            <h2 className='font-bold pt-6 text-3xl'>{room?.roomName}</h2>
                            <div className='flex items-center justify-between pb-2 pt-6'>
                                <h3 className='font-bold text-3xl text-yellow-500'>${room?.price}/<sub className='text-gray-500 text-sm'>per night</sub></h3>
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
                                <NavLink to={`/update-room/${room?._id}`} className='active bg-gray-600 font-bold mt-6 px-10 py-3 rounded text-white' >Update</NavLink>
                                <button onClick={()=>deleteRoom(room?._id)} className='active bg-red-800 font-bold mt-6 px-10 py-3 rounded text-white'>Delete</button>
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

export default ManageRooms;