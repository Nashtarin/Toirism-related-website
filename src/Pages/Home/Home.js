import React, { useEffect, useState } from 'react';
import Airtickets from './AirTickets/Airtickets';
import Banner from './Banner/Banner';
import Offerings from './Offerings/Offerings';
import hajj1 from '../../Images/offers images/hajj.jpeg'
import hajj2 from '../../Images/offers images/hajj.jpg'

const Home = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-success'>Our Offers</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
                {offers.map(ofr => <Offerings
                    key={ofr._id}
                    offers={ofr}>

                </Offerings>)}



            </div>
            <div className="my-3">
                <h4 className="text-success">Keep Your Eyes On Our Page, Soon We Will Be Launching Hajj Packages</h4>
                <img style={{ width: "75%",borderRadius:"30px",border:"2px solid green" }} src={hajj1} alt="" />

            </div>
            <div className="my-2">
                <h3 className="text-success">Our Tickets Are Available On </h3>
                <Airtickets></Airtickets>
            </div>

        </div>
    );
};

export default Home;