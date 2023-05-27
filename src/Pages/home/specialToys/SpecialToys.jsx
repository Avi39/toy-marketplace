/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const SpecialToys = () => {
    const [specialToys, setSpecialToys] = useState([]);
    useEffect(() => {
        fetch('special.json')
            .then(res => res.json())
            .then(data => setSpecialToys(data));
    }, [])
    return (
        <div>
            <h2 className='text-7xl mb-12 text-center mt-20 text-red-600 font-semibold'>Special Toys</h2>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 sm:ml-40 md:ml-8'>
            {
                specialToys.map(specialToy =>
                    <div key={specialToy.id} >
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={specialToy.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {specialToy.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Price: {specialToy.price}</p>
                                <p>{specialToy.details}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Details</div>
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

export default SpecialToys;