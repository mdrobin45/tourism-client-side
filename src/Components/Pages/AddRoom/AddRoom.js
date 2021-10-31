import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import AllPageBanner from '../../AllPageBanner/AllPageBanner';
import Swal from 'sweetalert2'

const AddRoom = () =>
{
    // React hook form
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>
    {
        axios.post('https://evening-ridge-38074.herokuapp.com/rooms', data)
            .then(res =>
            {
                if (res.status===200) {
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: 'Room Added',
                        showConfirmButton: false,
                        timer: 1000
                      })
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
                    <input className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Room Name' {...register("roomName")} />
                    <input className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Price' {...register("price", { required: true })} type='number' />
                    <input className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Ratings' {...register("rating", { required: true })} max='5' type='number' />
                    <input className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Image Link' {...register("img")} />
                    <textarea className='bg-gray-100 border-2 my-3 px-3 py-4 rounded text-xl w-full' placeholder='Description' {...register("description", { required: true })} type='number' />
                    <input value='Add' className='bg-yellow-500 py-4 w-full rounded cursor-pointer px-10 text-white' type="submit" />
                </form>
            </div>
        </>
        
    );
};

export default AddRoom;