import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './OfferDetail.css'



const Offerdetail = () => {
    const {offerId}=useParams();
    console.log(offerId)
    const [offer,setOffer]=useState({})
   useEffect(()=>{
       fetch(`http://localhost:5000/offers/${offerId}`)
       .then(res=>res.json())
       .then(data=>setOffer(data))
   },[])
   const {img,name,Duration,Cost,Description,facilities}=offer
    return (
        <div className="row row-cols-1 row-cols-md-2 g-2 mx-5 my-3">
      <div className="col">
      <div className="offerdetail card mx-auto my-5" style={{ width: '95%' }}>
            <img style={{ height: "300px",borderRadius:"25px" }} src={img} className="card-img-top p-1" alt="..." />
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

        <div className="col">
            <h1>Login Form</h1>
        </div>
    </div>
    );
};

export default Offerdetail;