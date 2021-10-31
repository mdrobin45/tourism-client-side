import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Container/Container.css'
import { ImFacebook } from 'react-icons/im';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import logo from '../images/logo.webp'

const Footer = () => {
    return (
        <div>
            <section className='container pt-20 justify-between md:flex md:text-left py-10 text-center'>
                <div>
                    <NavLink className='text-3xl text-gray-600' to='/home'><img className='m-auto' src={logo} alt="" /></NavLink>
                </div>
                <div>
                    <h3 className='font-bold text-2xl pb-3'>Call Us</h3>
                    <p className='text-lg text-gray-500'>+1800 456 789</p>
                    <p className='text-lg text-gray-500'>+1800 456 780</p>
                </div>
                <div>
                    <h3 className='font-bold text-2xl pb-3'>Hotel</h3>
                    <Link to='/' className='text-lg text-gray-500'>About Us</Link><br />
                    <Link to='/' className='text-lg text-gray-500'>Reviews</Link><br />
                    <Link to='/' className='text-lg text-gray-500'>Get Directions</Link><br />
                    <Link to='/' className='text-lg text-gray-500'>Nearby Visits</Link><br />
                    <Link to='/' className='text-lg text-gray-500'>Contact Us</Link><br />
                </div>
                <div>
                    <h3 className='font-bold text-2xl pb-3'>Customer Help</h3>
                    <Link to='/' className='text-lg text-gray-500'>Guest Support</Link><br />
                    <Link to='/' className='text-lg text-gray-500'>Guest Feedback</Link><br />
                    <Link to='/' className='text-lg text-gray-500'>FAQs</Link><br />
                    <Link to='/' className='text-lg text-gray-500'>Offers</Link><br />
                    <Link to='/' className='text-lg text-gray-500'>Location</Link><br />
                </div>
                <div>
                    <h3 className='font-bold text-2xl pb-3'>Follow Us</h3>
                    <div className='flex justify-between'>
                        <a href="/"><ImFacebook style={{background: '#7C3AED'}} className='rounded text-white mx-2 p-1 text-3xl' /></a>
                        <a href="/"><BsTwitter style={{background: '#7C3AED'}} className='rounded text-white mx-2 p-1 text-3xl' /></a>
                        <a href="/"><BsInstagram style={{background: '#7C3AED'}} className='rounded text-white mx-2 p-1 text-3xl' /></a>
                        <a href="/"><BsLinkedin style={{background: '#7C3AED'}} className='rounded text-white mx-2 p-1 text-3xl'/></a>
                    </div>
                </div>
            </section>
            <hr />
            <section className='container justify-between md:flex md:text-left py-6 text-center'>
                <div><p className='text-lg text-gray-500'>Copyright © 2021  Travel & Tourism</p></div>
                <div><p className='text-lg text-gray-500'>Powered by  Travel & Tourism</p></div>
            </section>
        </div>
    );
};

export default Footer;