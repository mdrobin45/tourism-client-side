import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";

const SingleRoom = () =>
{
    const [room, setRoom] = useState({});
    const { id } = useParams();

    useEffect(() =>
    {
        fetch(`https://evening-ridge-38074.herokuapp.com/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoom(data));
    }, [id])
    
    return (
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
            <h2 className='font-bold pt-6 text-3xl'>{room?.name}</h2>
            <h3 className='font-bold py-3 text-3xl text-yellow-500'>Price: ${room?.price}</h3>
            <p className='text-lg py-3'>{room?.description}</p>
            <div className='text-center'>
                <Link className='bg-yellow-500 inline-block mx-3 px-16 py-3 rounded text-lg text-white' to={`/place-order/${room?._id}`}>Book Now</Link>
                <Link className='bg-yellow-500 inline-block mx-3 px-16 py-3 rounded text-lg text-white' to='/rooms'>View All Rooms</Link>
            </div>
        </div>
    );
};

export default SingleRoom;