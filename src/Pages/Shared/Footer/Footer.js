import { faEnvelope, faLandmark, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../Images/Capture22-removebg-preview.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "darkolivegreen" }}>
        <div className='row row-cols-1 row-cols-md-2 g-1'>
            <div className="col">
                <div>
                    <img src={logo} alt="" />
                    <p className="text-white"><FontAwesomeIcon icon={faPhone} /> 01678877987,01786656768</p>
                    <p className="text-white"><FontAwesomeIcon icon={faEnvelope} /> info@roamtheworld.com</p>
                    <p className="text-white ms-4"><FontAwesomeIcon icon={faLandmark} /> Ring Road,Mohammadpur,Dhaka</p>

                </div>
            </div>
            <div className="col">
                <div>
                    <h1 className='text-white text-center ms-3 mt-5'>Our Offers</h1>
                    <ul style={{ listStyle: "none" }}>
                        <li className="text-white text-decoration-underline">Maldives Roaming</li>
                        <li className="text-white text-decoration-underline">India Roaming</li>
                        <li className="text-white text-decoration-underline">Bangladesh Roaming</li>
                        <li className="text-white text-decoration-underline">Nepal Roaming</li>
                        <li className="text-white text-decoration-underline">USA Roaming</li>
                        <li className="text-white text-decoration-underline">UK Roaming</li>
                        <li className="text-white text-decoration-underline">UAE Roaming</li>
                    </ul>
                </div>
            </div>
            {/* <div className="col">
                <div className="me-5">
                    <h1 className="text-white">Opening Hours</h1>
                    <img style={{ height: "200px", width: "300px" }} src={pic} alt="" />

                </div>
            </div> */}

        </div>
        <span className="text-white">© 2021 All Rights Reserved by Roam The World Company</span>
    </div>
    );
};

export default Footer;