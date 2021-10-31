import React,{useState,useEffect} from 'react';
import useAuth from '../../../../Hooks/useAuth'
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import AllPageBanner from '../../../AllPageBanner/AllPageBanner';
import Swal from 'sweetalert2'
import Loader from "react-loader-spinner";

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


    // Cancel or delete order
    const cancelOrder=(id) =>
    {
        Swal.fire({
            title: 'Do you want to delete this order?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
          }).then((result) => {
              if (result.isConfirmed) {
                axios.delete(`https://evening-ridge-38074.herokuapp.com/my-orders/${id}`)
                .then(res=>{
                    if (res.status === 200) {
                        setUpdateOrder(updateOrder + 1);
                    }
                });
                Swal.fire('Order Deleted', '', 'success')
            }
          })
    }
    return (
        <div>
            <AllPageBanner pageName='My Order'/>
            {
                myOrder?.length?
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
                            <h2 className='font-bold pt-6 text-3xl'>{item?.name}</h2>
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
                
                ):<div
                className='left-64 m-auto relative text-center top-10 w-2/4'>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />   
              </div> 
            }
        </div>
    );
};

export default MyOrder;