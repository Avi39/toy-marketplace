/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import { AuthContext } from '../../Providers/AuthProviders';


const AlltoysRow = ({toy}) => {
    const{user} = useContext(AuthContext)
    const {_id,Name,category,Price,Quantity,Picture} = toy;

    const alert = () =>{
        if(user === null)
        {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
        else{
            return toy;
        }
    }
   


   
    return (
      
        
          <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              {/* <div className="mask mask-squircle w-12 h-12">
                <img src={Picture} />
              </div> */}
            </div>
            <div>
              <div className="font-bold">{Name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {category}
          <br/>
        </td>
        <td>{Price}</td>
        <td>{Quantity}</td>
        <th>
            <Link to={`/detailstoys/${_id}`}>
            <button className="btn btn-ghost btn-xs">details</button>
            </Link>
         
        </th>
      </tr>
        
    );
};

export default AlltoysRow;