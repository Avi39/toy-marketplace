/* eslint-disable no-unused-vars */
import React from 'react';
import pic from '../../assets/error.avif';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <img className='w-1/2 mx-auto' src={pic} alt="" />
            <Link to='/'>
            <button className="btn btn-active btn-secondary ml-80 mb-12">Back to Home Page</button>
            </Link>
           
        </div>
    );
};

export default Error;