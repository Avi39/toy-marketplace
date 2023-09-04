/* eslint-disable no-unused-vars */
import React from 'react';
import pic1 from '../../assets/tiger.jpg'
import pic2 from '../../assets/dinosaur-plush-doll-isolated-white-background_49558-196.avif'
import pic3 from '../../assets/Dinosaur-Series-Plush-Toy-Can-Be-Customized.webp'
const ShopByAge = () => {
    return (
        <div>
            <h2 className='text-5xl text-center font-bold mb-12 mt-20'>Shop By Age</h2>
            <div className='grid md:grid-cols-3 ml-20 '>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic3} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title mx-auto font-extrabold text-2xl pt-4">1 - 3 years</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic2} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title mx-auto font-extrabold text-2xl pt-32">4 - 6 years</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic1} alt="Shoes"/></figure>
                    <div className="card-body ">
                        <h2 className="card-title mx-auto font-extrabold text-2xl">7 - 11 years</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByAge;