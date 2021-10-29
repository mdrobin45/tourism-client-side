import React from 'react';
import '../../../Container/Container.css'
import aboutImage from '../../../images/travel-landscape-12.jpg'

const ShortAbout = () =>
{
    return (
        <div className='container md:flex md:justify-between py-20'>
            <section className='md:w-2/3 w-full'>
                <img className='rounded-3xl' src={aboutImage} alt="Home Dentist" />
            </section>
            <section className='md:w-2/4 w-full'>
                <h2 className='font-bold py-6 text-4xl text-gray-700'>DISCOVER UNLIMITED BEAUTY</h2>
                <hr />
                <p className='text-lg py-3'>Travelling Essay – To travel from one place to another for different purposes is generally called travelling. People do not travel always for the same purposes. Someone travels to gain knowledge and experience, someone travels for pleasure, someone travels for business purposes etc. It has much educative value. It is a part of education. Our education and book knowledge remain imperfect without travelling. We can learn many things from travelling. It teaches us to trade and commerce, language, sociology, customs, culture, history, geography and so on. Therefore, the educative value of travelling beggars description. Besides this, there are some special benefits of travelling. If a man stays in one place for a long time, he becomes monotonous. Travelling removes our monotony and gives pleasure. It also broadens our outlook and refreshes our mind. A good traveller can easily educate others. He can give us first-hand knowledge of men and matters of another country. I like travelling very much.</p>
            </section>
        </div>
    );
};

export default ShortAbout;