/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Kids = () => {
    const [kids, setKids] = useState([]);
    useEffect(() => {
        fetch('kids.json')
            .then(res => res.json())
            .then(data => setKids(data));
    }, [])
    return (
        <div className='mt-20 mb-12 '>
            <h2 className='text-5xl text-center font-semibold text-blue-600 mb-12'>Kids Enjoy With Our Product</h2>
            <div className='grid grid-cols-3'>
                {
                    kids.map(kid =>
                        <div key={kid.id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={kid.image}alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Toy Name:{kid.name}</h2>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Kids;