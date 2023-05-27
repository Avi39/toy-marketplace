/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const CategoryDetails = () => {
    const{user} = useContext(AuthContext)
    const toys = useLoaderData();
    const { Name, Picture, Price, Rating, Quantity, details } = toys
    console.log(toys);
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-8">
            <img src={Picture} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-2xl font-bold"> Toy Name: <span className='text-red-500'>{Name}</span></h1>
                <h1 className="text-2xl font-bold pt-2"> Seller Email: <span className='text-red-500'>{user.email}</span></h1>
                <h1 className="text-2xl font-bold py-2">Price: <span className='text-red-500'>{Price}</span> </h1>
                <h1 className="text-2xl font-bold">Rating: <span className='text-red-600'>{Rating}</span> </h1>
                <h1 className="text-2xl font-bold py-2">Quantity: <span className='text-red-600'>{Quantity}</span> </h1>
                <p className="py-6"><span className='font-bold text-2xl'>Details: </span>{details}</p>
            </div>
        </div>
    </div>
    );
};

export default CategoryDetails;