import { faAddressCard, faEnvelope, faHome, faIdCard, faLandmark, faMoneyBill, faPassport, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleManageOrder = (props) => {
    const [orders,setOrders]=useState({})
    const {name,_id,email,tour,phone,address,NID,passport,cost}=props.orders
    const {handleDelete}=props.handleDelete
 
    return (
        <div className="col">
        <div className="card offer h-100">
            {/* <img src={img} className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h4 className="card-title fw-bold text-success">{name}</h4>
                <h5 className="text-success fw-bold">{tour}</h5>
                <h6><FontAwesomeIcon icon={faEnvelope} />{email}</h6>
                <h6><FontAwesomeIcon icon={faPhone} />{phone}</h6>
                <h6><FontAwesomeIcon icon={faHome} />{address}</h6>
                <h6><FontAwesomeIcon icon={faIdCard} /> NID:{NID}</h6>
                <h6><FontAwesomeIcon icon={faPassport} /> Passport:{passport}</h6>
                <h5 className="text-success fw-bold"><FontAwesomeIcon icon={faMoneyBill} /> Cost:BDT {cost}</h5>
     
              
                <Link to={`/offers/${_id}`}>
                    <Button variant="success">Delete</Button>
                </Link>
            </div>
        </div>

    </div>
    );
};

export default SingleManageOrder;