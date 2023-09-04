/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import ShopCategory from '../Shop-by-category/ShopCategory';
import SpecialToys from '../specialToys/SpecialToys';
import Kids from '../kids/Kids';
import useTitle from '../../../hooks/useTitle';
import Contactus from '../../Contact/Contactus';

const Home = () => {
    useTitle('Home');
    return (
        <div>
           <Banner></Banner>
           <ShopCategory></ShopCategory>
           <SpecialToys></SpecialToys>
           <Kids></Kids>
           <Contactus></Contactus>
        </div>
    );
};

export default Home;