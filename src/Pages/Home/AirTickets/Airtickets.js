import React from 'react';
import { Carousel } from 'react-bootstrap';
import air1 from '../../../Images/air1.PNG';
import air2 from '../../../Images/air2.PNG';
import air3 from '../../../Images/air3.PNG';

const Airtickets = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={air1}
                        alt="First slide"
                    />
                  
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={air2}
                        alt="Second slide"
                    />
                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={air3}
                        alt="Third slide"
                    />
                  
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Airtickets;