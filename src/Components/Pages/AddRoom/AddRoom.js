import React from 'react';
import { useForm } from "react-hook-form";

const AddRoom = () =>
{
    // React hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{}
    return (
        <div>
            <h2 className='font-bold text-3xl'>Your order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 border-purple-500 my-3 py-2 rounded w-full px-3' placeholder='Name' {...register("name")} />
                <input className='border-2 border-purple-500 my-3 py-2 rounded w-full px-3' {...register("shortDes", { required: true })} type='email' />
                <input className='border-2 border-purple-500 my-3 py-2 rounded w-full px-3' placeholder='Price' {...register("price", { required: true })} type='number' />
                <input className='border-2 border-purple-500 my-3 py-2 rounded w-full px-3' placeholder='Ratings' {...register("rating", { required: true })} type='number' />
                <input value='Place Order' className='bg-purple-600 rounded cursor-pointer px-10 py-3 text-white' type="submit" />
            </form>
        </div>
    );
};

export default AddRoom;