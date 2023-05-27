/* eslint-disable no-unused-vars */
import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setTab] = useState("Teddy_Bear");
    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [activeTab])
    console.log(toys);
    return (
        <div>
            <div className='h-24 mt-32'>
                <h2 className='text-center text-5xl mb-8 font-semibold text-orange-600'>Shop By Category</h2>
            </div>

            <Tabs className="text-center mb-12">
                <TabList >
                    <Tab onClick={() => setTab('Teddy Bear')}
                    >Teddy Bear</Tab>
                    <Tab onClick={() => setTab('Horse')}>Horse</Tab>
                    <Tab onClick={() => setTab('dinosaur')}>dinosaur</Tab>
                </TabList>
                <TabPanel>
                    {

                        toys.map(toy => <div key={toy._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={toy.Picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name:{toy.Name}</h2>
                                    <p className='card-title'>Price: ${toy.Price}</p>
                                    <p className='card-title'>Rating: {toy.Rating}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`detailsCategory/${toy._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )
                    }
                </TabPanel>
                <TabPanel>
                    {

                        toys.map(toy => <div key={toy._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={toy.Picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name:{toy.Name}</h2>
                                    <p className='card-title'>Price: ${toy.Price}</p>
                                    <p className='card-title'>Rating: {toy.Rating}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`detailsCategory/${toy._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )
                    }
                </TabPanel>
                <TabPanel>
                    {

                        toys.map(toy => <div key={toy._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={toy.Picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name:{toy.Name}</h2>
                                    <p className='card-title'>Price: ${toy.Price}</p>
                                    <p className='card-title'>Rating: {toy.Rating}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`detailsCategory/${toy._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )
                    }
                </TabPanel>


            </Tabs>

        </div>

    );
};

export default ShopCategory;