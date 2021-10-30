import React from 'react';
import notfound from '../../Images/404.png'

const Notfound = () => {
    return (
        <div className="mb-5">
        <h1 className='text-danger'>Oops!Page Not Found!</h1>


        <img className="w-75" src={notfound} alt="" />
    </div>
    );
};

export default Notfound;
