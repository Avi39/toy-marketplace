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
const Banner = () => {
    return (

        <div>
            <div className='w-2/4'>
                <Lottie animationData={animation} loop={true}></Lottie>
            </div>
            <div className="carousel carousel-center rounded-box mt-12 mb-12">
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
                <div className="carousel-item">
                    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
                </div>
            </div>
        </div>
    );
};

export default Banner;