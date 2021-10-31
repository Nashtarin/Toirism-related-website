import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css'


const Offerings = (props) => {
    const {name, img, Description,_id,Cost } = props.offers;
    const {status}=props
    
    
    return (
        <div className="col">
           
        <div className="card offer h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
               
                <h3 className="card-title fw-bold text-success">{name}</h3>
                <p className="card-text">{Description}</p>
                <h4 className="text-success fw-bold">Cost:BDT {Cost}</h4>
                <Link to={`/offers/${_id}`}>
                    <Button variant="success">Book Now</Button>
                </Link>
            </div>
        </div>

    </div>
    );
};

export default Offerings;