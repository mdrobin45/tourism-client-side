import React from 'react';
import axios from "axios";
import useAuth from '../../../../Hooks/useAuth'
import { useEffect } from 'react/cjs/react.development';

const MyOrder = () =>
{
    const { user } = useAuth();
    // const userEmail = user?.email;
    
    useEffect(() =>
    {
        axios.get('http://localhost:5000/my-orders', )
        .then()
    },[])
    return (
        <div>
            <h2>My orders</h2>
        </div>
    );
};

export default MyOrder;