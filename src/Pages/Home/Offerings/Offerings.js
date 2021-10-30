import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css'


const Offerings = (props) => {
    const {name, img, Description,_id,Cost } = props.offers;
    console.log(_id)
    return (
        <div className="col">
        <div className="card offer h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title fw-bold text-success">{name}</h4>
                <p className="card-text">{Description}</p>
                <h3 className="text-success fw-bold">Cost:BDT {Cost}</h3>
                <Link to={`/offerdetail/${_id}`}>
                    <Button variant="success">Book Now</Button>
                </Link>
            </div>
        </div>

    </div>
    );
};

export default Offerings;