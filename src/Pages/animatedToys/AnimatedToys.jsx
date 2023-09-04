/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import animationToy1 from '../../assets/animation_lm4r6w5t.json'
import animationToy2 from '../../assets/animation_lm4r0cyw.json'
import animationToy3 from '../../assets/animation_lm4qxlc9.json'
const AnimatedToys = () => {
    return (
        <div>
            <h2 className='text-5xl text-center font-bold text-red-600 mb-12 mt-20'>Our Special Animation Product</h2>
            <div className='grid md:grid-cols-3 ml-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Lottie className="rounded-xl"  animationData={animationToy1} loop={true} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Timp Bird</h2>
                    <p>Price: 30$</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary">Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Lottie className="rounded-xl"  animationData={animationToy2} loop={true} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title pt-14">Ride cycle</h2>
                    <p>Price: 20$</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary">Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Lottie className="rounded-xl"  animationData={animationToy3} loop={true} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title pt-12">Toy Maker</h2>
                    <p>Price: 35$</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary">Details</button>
                    </div>
                </div>
            </div>

            </div>
            
        </div>
    );
};

export default AnimatedToys;