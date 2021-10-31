import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loader from "react-loader-spinner";
import AllPageBanner from '../../../AllPageBanner/AllPageBanner';
import axios from "axios";

const UpdateRoom = () =>
{
    const [room, setRoom] = useState({roomName:'',price:'',rating:'',description:'',img:''});
    const { id } = useParams();
    useEffect(() =>
    {
        fetch(`https://evening-ridge-38074.herokuapp.com/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoom(data));
    }, [id])
    


    // Change room name
    const updateRoomName = (e) =>
    {
        const inputValue = e.target.value;
        const updatedRoom = { ...room };
        updatedRoom.roomName = inputValue;
        setRoom(updatedRoom);
    }
    // Change room price
    const updateRoomPrice = (e) =>
    {
        const inputValue = e.target.value;
        const updatedRoom = { ...room };
        updatedRoom.price = inputValue;
        setRoom(updatedRoom);
    }
    // Change room description
    const updateRoomDes = (e) =>
    {
        const inputValue = e.target.value;
        const updatedRoom = { ...room };
        updatedRoom.description = inputValue;
        setRoom(updatedRoom);
    }
    // Change room image
    const updateRoomImage = (e) =>
    {
        const inputValue = e.target.value;
        const updatedRoom = { ...room };
        updatedRoom.img = inputValue;
        setRoom(updatedRoom);
    }



    // Form submit
    const onSubmit = (e) =>
    {
        axios.put(`https://evening-ridge-38074.herokuapp.com/rooms/${id}`,room)
        .then(res =>
        {
            if (res.data.modifiedCount > 0) {
                alert('updated')
            }
        })
        e.preventDefault();
    }

    
    
    return (
        <>
            <AllPageBanner pageName='Update Room'/>
            <div className='shadow w-10/12 p-6 rounded mt-6 m-auto'>
                {
                    room?.img?<img className='m-auto mt-10 rounded w-full' src={room?.img} alt="Thumbnail" />:<div
                    className='left-96 m-auto relative text-center'>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                </div>
                }
                <h2 className='font-bold pt-6 text-3xl'>{room?.roomName}</h2>
                <h3 className='font-bold py-3 text-3xl text-yellow-500'>Price: ${room?.price}</h3>
                <p className='text-lg py-3'>{room?.description}</p>
            </div>
            <div className='border-2 m-auto mt-16 p-6 shadow w-1/2'>
                <h2 className='font-bold pb-6 text-3xl text-center text-gray-700'>Update Room Details</h2>
                <form onSubmit={onSubmit}>
                    <input value={room?.roomName} onChange={updateRoomName} className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Room Name' />
                    <input value={room?.price} onChange={updateRoomPrice} className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Price' type='number' />
                    <input className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Ratings' max='5' type='number' />
                    <input value={room?.img} onChange={updateRoomImage} className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Image Link' />
                    <textarea value={room?.description} onChange={updateRoomDes} className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Description' type='number' />
                    <input value='Add' className='bg-yellow-500 py-4 w-full rounded cursor-pointer px-10 text-white' type="submit" />
                </form>
            </div>
        </>
    );
};

export default UpdateRoom;