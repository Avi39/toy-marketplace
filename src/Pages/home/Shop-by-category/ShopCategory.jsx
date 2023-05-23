/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    const [toys,setToys] = useState([]);
    useEffect(()=>{
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setToys(data));
    },[])
    return (
        <div>
            <div className='h-24 mt-32'>
                <h2 className='text-center text-5xl mb-8 font-semibold text-orange-600'>Shop By Category</h2>
            </div>

            <Tabs className="text-center mb-12">
                <TabList >
                    <Tab>Teddy Bear</Tab>
                    <Tab>Horse</Tab>
                    <Tab>dinasaur</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{toys.length}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
            </Tabs>

        </div>

    );
};

export default ShopCategory;