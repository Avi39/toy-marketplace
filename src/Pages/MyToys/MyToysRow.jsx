/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React from 'react';

const MyToysRow = ({ myToy,handleDelete }) => {
    const {_id, Name, Picture, Price, category, Rating, Quantity, details, userName, email } = myToy;
   
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                {
                    Picture && <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={Picture} />
                        </div>
                    </div>
                </div>
                }
                
            </td>
            <td>
                {Name}
            </td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{category}</td>
            <td>{Price}</td>
            <td>{Rating}</td>
            <td>{Quantity}</td>
            <td>{details}</td>
            <th>
                <div className="btn-group btn-group-vertical">
                    <button className="btn btn-active  rounded">Update</button>
                    <button onClick={()=> handleDelete(_id)} className="btn">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default MyToysRow;