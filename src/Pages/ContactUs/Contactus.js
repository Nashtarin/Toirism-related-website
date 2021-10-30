import { faBus, faCar, faPhone, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contactus = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-2 mb-4 mt-2">
        <div className="col">
            <div className="mx-5">
                <h1 className="text-success">Contact Us</h1>
                <h4>Our detail address is</h4>
                <p>2/3,Block-A, Tajmahalroad,Mohammadpur,Dhaka-1207</p>
                
            </div>
        </div>
        <div className="col">
            <div className="mx-5 mt-3">
                <h2 className="text-success"><FontAwesomeIcon icon={faCar} />Urgent Car Services</h2>
                <p> <FontAwesomeIcon icon={faPhone} /> 01943456743,01334235432 </p>
                <h2 className="text-success"><FontAwesomeIcon icon={faPlane} />Urgent Air Tickets</h2>
                <p> <FontAwesomeIcon icon={faPhone} /> 01345677651,01678985562 </p>


            </div>
        </div>
        <div className="col">
            <div className='mt-3'>
                <h2 className="text-success"><FontAwesomeIcon icon={faBus} />Urgent Bus Services</h2>
                <p> <FontAwesomeIcon icon={faPhone} /> 01345645652,01678983763,01943857644 </p>

            </div>
        </div>
    </div>
    );
};

export default Contactus;