/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const AddToy = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data));
    }, [])
    return (
        <div className='grid grid-cols-3 mt-20'>
            {
                allToys.map(alltoy =>
                    <div key={alltoy.id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={alltoy.Picture} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {alltoy.Name}</h2>
                                <h2 className="card-title">Category: {alltoy.category}</h2>
                                <h2 className="card-title">Price: {alltoy.Price}</h2>
                                <h2 className="card-title">Rating: {alltoy.Rating}</h2>
                                <h2 className="card-title">Quantity: {alltoy.Quantity}</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                    
                )
            }
        </div>
    );
};

export default AddToy;