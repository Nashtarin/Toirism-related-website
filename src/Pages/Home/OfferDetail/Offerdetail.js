// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import { appendErrors, useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './OfferDetail.css'



const Offerdetail = () => {
    const { offerId } = useParams();
    // console.log(offerId)
    const [offer, setOffer] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/offers/${offerId}`)
            .then(res => res.json())
            .then(data => setOffer(data))
    }, [])
    const { img, name, Duration, Cost, Description, facilities } = offer;
    const { user } = useAuth();
    //    
    const {  register, handleSubmit, reset,formState: { errors } } = useForm()
    const onSubmit = data => {console.log(data)
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('Order Processed Successfully');
                
                reset();
            }
        })};




    // axios.post('', data)
    //     .then(res => {
    //         console.log(res)
    //         if (res.data.insertedId) {
    //             alert('Added Successfully');
    //             reset();
    //         }
    //     })
    

    return (
        <div className="row row-cols-1 row-cols-md-2 g-2 mx-5 my-3">
            <div className="col">
                <div className="offerdetail card mx-auto my-4" style={{ width: '95%' }}>
                    <img style={{ height: "300px", borderRadius: "25px" }} src={img} className="card-img-top p-1" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title text-success fw-bold fs-1">{name}</h2>
                        <p className="card-text">{Description}</p>
                        <h6 className="mb-3">Duration: {Duration} </h6>
                        <h6 className="mb-3">Facilities: {facilities} </h6>
                        <h3 className="mb-3">Cost: BDT {Cost}  </h3>
                    </div>
                    <h3 className="text-success">We guarantee, you will always feel comfort with our any kind of services </h3>
                </div>

            </div>

            <div className="col addoffer my-5">
                <h1 className="text-success mt-3">Please Enter Your Details</h1>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })}  />
                <input defaultValue={user.email} {...register("email", { required: true, maxLength: 20 })}  />
                 <textarea {...register("address")} placeholder="address" /> 
                
                <input defaultValue={name} {...register("tour")} placeholder=" The tour you are interested" />
                <input type="submit" />
            </form> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                   
                    <input  defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email")} />
                    <input defaultValue={name} {...register("tour",{ required: true })} />
                    <input type="number" {...register("phone",{ required: true })} placeholder="Enter Your Phone Number" />
                    <textarea {...register("address")} placeholder="Enter Your Address" />
                    <input  {...register("NID")} placeholder="Enter Your NID Number"/>
                    <input  {...register("passport")} placeholder="Enter Your Valid Passport Number"/>
                    <input defaultValue={Cost} {...register("cost",{ required: true })}  />

                    
                    {errors.tour && <span className="text-danger">Choose Your Tour,it is required</span>}
                    {errors.cost && <span className="text-danger">Cost is required</span>}
                    {errors.phone && <span className="text-danger">Your phone number is required</span>}

                    <input className="btn btn-success" type="submit" value="Place Order" />
                </form>

            </div>
        </div>
    );
};

export default Offerdetail;