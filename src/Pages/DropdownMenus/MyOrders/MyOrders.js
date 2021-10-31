import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import SingleMyOrder from './SingleMyOrder/SingleMyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                
                setOrders(data)})
    }, [])
    console.log(orders)
    const {user,isLoading}=useAuth()
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }
   
    const myorders=orders?.filter(myorder=>myorder.email===user.email)
    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    alert('Are you sure to delete?')
                    const remaining=orders.filter(order=>order._id!==id)
                    setOrders(remaining)
                    
                }
               
            })

    }
    const handleUpdate = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => { console.log(data)
                if (data.modifiedCount>0) {
                    alert('Update Successful');
                    window.location.reload()
                    
                   
                   
                }
            })
      
    }

    return (
        <div>
            <h1 className="text-success">My Orders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
            {myorders?.map(mo=><SingleMyOrder
            key={mo._id}
            orders={mo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}></SingleMyOrder>)}
            </div>
        </div>
    );
};

export default MyOrders;