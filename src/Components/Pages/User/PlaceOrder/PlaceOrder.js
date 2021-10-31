import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import '../../../Container/Container.css'
import useAuth from '../../../../Hooks/useAuth';
import axios from "axios";
import Swal from 'sweetalert2'

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
    const { register,reset, handleSubmit } = useForm();
    const onSubmit = data =>
    {
        const status={status:'Pending'}
        const { _id, ...rest } = room;
        axios.post(`https://evening-ridge-38074.herokuapp.com/my-orders`, {...data,...rest,...status})
            .then(res =>
            {
            if (res.status === 200) {
                Swal.fire({
                    position: 'center center',
                    icon: 'success',
                    title: 'Place order successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                reset();
            }
            })
    };

    return (
        <div className='container'>
            <section className='flex mt-16 justify-between'>
                <div className='p-4 w-11/12'>
                <img className='rounded' src={room?.img} alt='Thumbnail' />
                    <p className='text-lg py-3'>{room?.description}</p>
                    <h3 className='font-bold pt-6 text-2xl text-yellow-500'>Price: ${room?.price}</h3>
                </div>
                <div>
                    <h2 className='font-bold text-3xl'>Your order</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input value={user?.displayName} readOnly className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Name' {...register("name")} />
                        <input value={user?.email} readOnly className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' {...register("email", { required: true })} type='email' />
                        <input className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Address' {...register("address", { required: true })} />
                        <input className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Phone' {...register("phone", { required: true })} type='number' />
                        <input value='Place Order' className='bg-yellow-500 w-full text-xl rounded cursor-pointer px-10 py-3 text-white' type="submit" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default PlaceOrder;