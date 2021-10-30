import React,{useState} from 'react';
import useAuth from '../../../../Hooks/useAuth'
import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import AllPageBanner from '../../../AllPageBanner/AllPageBanner';

const MyOrder = () =>
{
    const { user } = useAuth();
    const [orders, setOrders] = useState();
    const [updateOrder,setUpdateOrder]=useState(0);
    const myOrder = orders?.filter(order => order?.email === user.email);
    useEffect(() =>
    {
        fetch('https://evening-ridge-38074.herokuapp.com/my-orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [updateOrder])

    const cancelOrder=(id) =>
    {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            axios.delete(`https://evening-ridge-38074.herokuapp.com/my-orders/${id}`)
            .then(res=>{
                if (res.status === 200) {
                    alert('deleted')
                    setUpdateOrder(updateOrder + 1);
                }
            });
        }
    }
    return (
        <div>
            <AllPageBanner pageName='My Order'/>
            {
                myOrder?.map(item => <section
                    className='mt-20'
                    key={item._id}>
                        {
                        item?.status==='Pending'?<div className='text-center rounded-t-lg bg-yellow-500 text-white text-lg py-2 w-10/12 m-auto'><h2>Pending</h2></div>:<div className='text-center rounded-t-lg bg-green-600 text-white text-lg py-2 w-10/12 m-auto'><h2>Approved</h2></div>
                        }
                        <div className='border pr-6 flex items-center m-auto mb-6 rounded-b-lg shadow w-10/12' >
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
                        {
                            item?.status !== 'Approved'?<button onClick={()=>cancelOrder(item?._id)} className='bg-red-500 px-10 py-3 rounded text-white'>Cancel</button>:''
                        }
                    </div>
                </section> 
                
                )
            }
        </div>
    );
};

export default MyOrder;