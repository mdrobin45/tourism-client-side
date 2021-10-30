import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import AllPageBanner from '../../AllPageBanner/AllPageBanner';

const AddRoom = () =>
{
    // React hook form
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>
    {
        axios.post('http://localhost:5000/rooms', data)
            .then(res =>
            {
                if (res.status===200) {
                    alert('added')
                    reset()
                }
            })
    }
    return (
        <>
            <AllPageBanner pageName='Add Room'/>
            <div className='border-2 m-auto mt-16 p-6 shadow w-1/2'>
                <h2 className='font-bold pb-6 text-3xl text-center text-gray-700'>Add Room</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='border-2 border-yellow-500 my-3 py-2 rounded w-full px-3' placeholder='Image Link' {...register("img")} />
                    <input className='border-2 border-yellow-500 my-3 py-2 rounded w-full px-3' placeholder='Price' {...register("price", { required: true })} type='number' />
                    <input className='border-2 border-yellow-500 my-3 py-2 rounded w-full px-3' placeholder='Ratings' {...register("rating", { required: true })} max='5' type='number' />
                    <textarea className='border-2 border-yellow-500 my-3 py-2 rounded w-full px-3' placeholder='Description' {...register("description", { required: true })} type='number' />
                    <input value='Add' className='bg-yellow-500 rounded cursor-pointer px-10 py-3 text-white' type="submit" />
                </form>
            </div>
        </>
        
    );
};

export default AddRoom;