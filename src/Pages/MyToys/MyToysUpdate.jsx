/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysUpdate = () => {
    const myTo = useLoaderData();
    const {_id, Name, Picture, Price, Rating, Quantity, details,category } = myTo;
    const {user} =useContext(AuthContext);
    console.log(myTo);
   
    const handleUpdateToy = (event) =>{
        event.preventDefault();
        const form = event.target;
        // const Name = form.Name.value;
        // const Picture = form.Picture.value;
        const Price = form.Price.value;
        // const category = form.category.value;
        // const Rating = form.Rating.value;
        const Quantity = form.Quantity.value;
        const details = form.details.value;
    console.log(Name);
    const add ={
        Price,
        Quantity,
        details,    
    }
    console.log(add);

    fetch(`http://localhost:5000/updated/${_id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(add)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount){
            Swal.fire({
                title: 'Done!',
                text: 'Update a toy successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              })
        }

    })
}
    
    

    return (
        
            <form onSubmit={handleUpdateToy}>
                    
                    <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">id</span>
                            </label>
                            <input type="text" placeholder="email" name='id' defaultValue={myTo?._id} className="input input-bordered" />
                        </div> */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div> */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span  className="label-text">Picture URL</span>
                            </label>
                            <input type="text" defaultValue={Picture} name='Picture' placeholder="Picture URL" className="input input-bordered" />
                    
                        </div> */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <input defaultValue={category}  type="text" name='category' placeholder="sub-Category" className="input input-bordered" />
                    
                        </div> */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span  className="label-text">Toy Name</span>
                            </label>
                            <input defaultValue={Name} type="text" name='Name' placeholder="Toy Name" className="input input-bordered" />
                        </div> */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='displayName' defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" />
                    
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={Price}  name='Price' placeholder="Price" className="input input-bordered" />
                    
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='Rating' defaultValue={Rating}  placeholder="rating" className="input input-bordered" />
                    
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input defaultValue={Quantity}  type="text" name='Quantity' placeholder="Quantity" className="input input-bordered" />
                    
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input defaultValue={details}  type="text" name='details' placeholder="description" className="input input-bordered" />
                    
                        </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary btn-block" type="submit" >Update</button>
                        </div>
                        </div>
                        
                    
                </form>
            
        
        
        
    );
};

export default MyToysUpdate;