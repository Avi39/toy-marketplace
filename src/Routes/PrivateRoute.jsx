/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import {Navigate} from 'react-router'
const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoute;