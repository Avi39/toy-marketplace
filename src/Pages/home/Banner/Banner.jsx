/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import animation from '../../../assets/animation.json'
import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.png'
import banner3 from '../../../assets/banner3.png'
import banner4 from '../../../assets/banner4.png'
import banner5 from '../../../assets/banner5.png'
import banner6 from '../../../assets/banner6.png'
import banner7 from '../../../assets/banner7.png'
import banner8 from '../../../assets/pug.png'
const Banner = () => {
    return (

        <div>
            <div className='flex'>
            <div>
                <h1 className='text-7xl mt-12 '>There is a Animal <br /> Toys <span className='font-semibold text-orange-500'>Collection </span> <br /> You Can Get Any toys <span className='text-pink-500 font-semibold'>from</span> Here</h1>
            </div>
            <div className='w-2/4'>
                <Lottie animationData={animation} loop={true}></Lottie>
            </div>
            </div>
            <br /><br />
            <p className='text-4xl mt-8 font-semibold text-center text-violet-800  '>PHotos SCroll GAllery</p>
            <div className="carousel carousel-center rounded-box mt-12 ">
                <div className="carousel-item w-1/5">
                    <img src={banner1}alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={banner2} alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={banner3} alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={banner4} alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={banner5}alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={banner7} />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={banner8} alt="Pizza" />
                </div>
            </div>
        </div>
    );
};

export default Banner;