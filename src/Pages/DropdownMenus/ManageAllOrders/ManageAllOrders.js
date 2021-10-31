import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import SingleManageOrder from './SingleMangeOrder/SingleManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState();
 
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    alert('Deleted')
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
          <h1 className="text-success">All Orders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
            
           {console.log(orders)}
            { orders?.map(order => <SingleManageOrder
                key={order._id}
                orders={order}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}>
                </SingleManageOrder>)}

        </div>
           
      </div>
    );
};

export default ManageAllOrders;