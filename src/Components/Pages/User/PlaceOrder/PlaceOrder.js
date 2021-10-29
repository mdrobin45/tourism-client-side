import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import '../../../Container/Container.css'
import useAuth from '../../../../Hooks/useAuth';
import axios from "axios";

const PlaceOrder = () =>
{
    const [room, setRoom] = useState({});
    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() =>
    {
        fetch(`https://evening-ridge-38074.herokuapp.com/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoom(data));
    }, [id])


    // React hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>
    {
        const { _id, ...rest } = room;
        axios.post(`https://evening-ridge-38074.herokuapp.com/my-orders`, {...data,...rest})
            .then(res =>
            {
            if (res.status === 200) {
                alert('Order added')
            }
            })
    };

    return (
        <div className='container'>
            <img className='w-full' src={room?.img} alt='Thumbnail' />
            <section className='flex mt-16 justify-between'>
                <div className='p-4 w-11/12'>
                    <h2 className='text-3xl'>{room?.name}</h2>
                    <p className='text-lg'>{room?.longDes}</p>
                    <h3 className='text-purple-600 text-xl'>Pay: ${room?.price}</h3>
                </div>
                <div>
                    <h2 className='font-bold text-3xl'>Your order</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input value={user?.displayName} readOnly className='border-2 border-purple-500 my-3 py-2 rounded w-full px-3' placeholder='Name' {...register("name")} />
                        <input value={user?.email} readOnly className='border-2 border-purple-500 my-3 py-2 rounded w-full px-3' {...register("email", { required: true })} type='email' />
                        <input className='border-2 border-purple-500 my-3 py-2 rounded w-full px-3' placeholder='Address' {...register("address", { required: true })} />
                        <input className='border-2 border-purple-500 my-3 py-2 rounded w-full px-3' placeholder='Phone' {...register("phone", { required: true })} type='number' />
                        <input value='Place Order' className='bg-purple-600 cursor-pointer px-10 py-3 text-white' type="submit" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default PlaceOrder;