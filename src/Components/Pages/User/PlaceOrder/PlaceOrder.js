import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const PlaceOrder = () =>
{
    const [room, setRoom] = useState({});
    const { id } = useParams();
    useEffect(() =>
    {
        fetch(`https://evening-ridge-38074.herokuapp.com/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoom(data));
    }, [id])
    console.log(room);
    // React hook form 
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <img src={room?.img} alt='Thumbnail' />
            <section className='flex justify-between'>
                <div>
                    <h2 className='text-3xl'>{room?.name}</h2>
                    <p className='text-lg'>{room?.longDes}</p>
                    <h3 className='text-purple-600'>Pay: ${room?.price}</h3>
                </div>
                <div>
                    <h2>Your order</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} />
                        <input {...register("email", { required: true })} type='email' />
                        <input {...register("address", { required: true })} />
                        <input {...register("phone", { required: true })} type='number' />
                        <input type="submit" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default PlaceOrder;