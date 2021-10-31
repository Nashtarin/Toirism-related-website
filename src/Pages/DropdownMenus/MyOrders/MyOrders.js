import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import SingleMyOrder from './SingleMyOrder/SingleMyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders)
    const {user}=useAuth()
    const myorders=orders?.filter(myorder=>myorder.email===user.email)
    console.log('This is myorders',myorders)
    return (
        <div>
            <h1 className="text-success">My Orders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
            {myorders?.map(mo=><SingleMyOrder
            key={mo._id}
            orders={mo}></SingleMyOrder>)}
            </div>
        </div>
    );
};

export default MyOrders;