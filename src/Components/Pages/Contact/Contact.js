import { TextareaAutosize, TextField } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import '../../Container/Container.css'

const Contact = () =>
{
    const ContactButton = styled(Button)({
        background: '#7C3AED',
        width: '100%',
        padding: '15px 0',
        fontSize: '17px',
        '&:hover': {
            background: 'black'
        }
    });
    return (
        <>
            <div className='m-auto pt-10 text-center md:w-2/4'>
                <h2 className='text-5xl text-gray-600 font-bold text-center py-4'>Contact</h2>
                <hr className='m-auto w-2/6' />
                <p className='text-lg py-3'>Our residents come from all parts of the world, bringing you a global expertise coupled with the cutting edge research and knowledge of the University of Rochester Medical Center.</p> 
            </div>
            <div className='md:flex justify-between container rounded-lg shadow-lg border-2 py-20'>
                <div className='md:w-2/4'>
                    <form className='bg-white px-6 pb-20 rounded-lg'>
                        <div className='flex my-2 justify-between'>
                            <TextField style={{ width: '48%' }} className='bg-gray-100' type='text' label="First Name" id="fullWidth" />
                            <TextField style={{ width: '48%' }} className='bg-gray-100' type='text' label="Last Name" id="fullWidth" />
                        </div>

                        <div className='my-2'>
                            <TextField className='bg-gray-100' fullWidth type='number' label="Phone" id="fullWidth" />
                        </div>

                        <div className='my-2'>
                            <TextField className='bg-gray-100' fullWidth type='email' label="Email" id="fullWidth" />
                        </div>

                        <TextareaAutosize
                            className='my-2 border-gray-400 rounded bg-gray-100 border p-3'
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Message"
                            style={{ width: '100%' }}
                        />
                        <div>
                            <ContactButton size="large" variant="contained">Send</ContactButton>
                        </div>
                    </form>
                </div>
                <div className='md:p-6 md:w-2/4 p-6'>
                    <h2 className='text-4xl py-3 font-bold'>Have Any Queries?</h2>
                    <p className='text-lg pb-10'>Wish to get a free consultation or a quick checkup to identify the kind of treatment you need? Just give us a call or submit the form here.</p>
                    <hr />
                    <div className='flex pt-6'>
                        <BsTelephone className='text-3xl' />
                        <h3 className='text-2xl px-3'>+123 456 7890</h3>
                    </div>
                    <div className='flex py-6'>
                        <FiMail className='text-3xl' />
                        <h3 className='text-2xl px-3'>mail@example.com</h3>
                    </div>
                    <div className='flex'>
                        <GoLocation className='text-3xl' />
                        <h3 className='text-2xl px-3'>123 Fifth Ave, NY 12004, USA.</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;