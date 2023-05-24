/* eslint-disable no-unused-vars */
import React from 'react';
import {useLoaderData} from 'react-router-dom';

const DetailsToys = () => {
    const toys = useLoaderData();
    const {Name} = toys
    return (
        <div>
            <h2>Details About Toys:{Name}</h2>

        </div>
    );
};

export default DetailsToys;