import React,{useState} from 'react';
import useAuth from '../../../../Hooks/useAuth'
import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react/cjs/react.development';

const MyOrder = () =>
{
    const { user } = useAuth();
    const [orders, setOrders] = useState();
    
    useEffect(() =>
    {
        fetch('http://localhost:5000/my-orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    
    const myOrder = orders?.filter(order => order?.email === user.email);
    return (
        <div>
            {
                myOrder?.map(item => <div
                    className='border pr-6 flex items-center m-auto my-6 rounded shadow w-10/12'
                    key={item._id}>
                    <div>
                        <img src={item?.img} alt="Thumbnail" />
                    </div>
                    <div className='pl-6'>
                        <h2 className='font-bold text-3xl text-yellow-500'>${item?.price}</h2>
                        <ReactStars
                            count={5}
                            size={24}
                            value={item.rating}
                            edit={false}
                            activeColor="#ffd700"
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                        />
                        <p className='text-lg'>{item?.description}</p>
                    </div>
                    <button className='bg-red-500 px-10 py-3 rounded text-white'>Cancel</button>
                </div>)
            }
        </div>
    );
};

export default MyOrder;