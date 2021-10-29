import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
            <img className='w-full' src={room?.img} alt="Thumbnail" />
            <h2 className='text-2xl'>{room?.name}</h2>
            <h3 className='text-purple-600 text-xl'>Price: ${room?.price}</h3>
            <p className='text-lg'>{room?.longDes}</p>
            <div className='text-center'>
                <Link className='bg-purple-600 mx-3 inline-block px-16 py-3 text-lg text-white uppercase' to='/rooms'>View all room</Link>
                <Link className='bg-purple-600 mx-3 inline-block px-16 py-3 text-lg text-white uppercase' to={`/place-order/${room?._id}`}>Book Now</Link>
            </div>
        </div>
    );
};

export default SingleRoom;