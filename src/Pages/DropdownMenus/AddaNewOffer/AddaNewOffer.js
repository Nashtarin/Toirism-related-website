import React from 'react';
import { useForm } from 'react-hook-form';

const AddaNewOffer = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {console.log(data)
        fetch('http://localhost:5000/offers',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('Offer Added Successfully');
                
                reset();
            }
        })
    };
    return (
        <div className="col addoffer my-5 w-75 mx-auto">
            <h1 className="text-success mt-3">Please Add a Offer Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("name")} placeholder="Enter The Offer Name" />
                <input  {...register("Duration")} placeholder="Enter The Offer Duration" />
                <input  {...register("Cost")} placeholder="Enter The Offer Cost" />
                <textarea  {...register("Description")} placeholder="Enter The Offer Description" />
                <input  {...register("facilities")} placeholder="Enter The Offer facilities" />
                
                <input  {...register("img")} placeholder="Enter The Offer Image URL" />
                <input className="btn btn-success" type="submit" value="Add a Offer" />
            </form>


        </div>
    );
};

export default AddaNewOffer;