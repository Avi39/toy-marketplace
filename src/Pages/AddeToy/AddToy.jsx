/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import { data } from 'autoprefixer';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const handleToy = (event) =>{
        event.preventDefault();
        const form = event.target;
        const Name = form.Name.value;
        const Picture = form.Picture.value;
        const Price = form.Price.value;
        const category = form.category.value;
        const Rating = form.Rating.value;
        const Quantity = form.Quantity.value;
        const details = form.details.value;
        const userName = user?.displayName;
        const email = user?.email;
    
    const add ={
        Name,
        Picture,
        Price,
        category,
        Rating ,
        Quantity,
        details,
        userName,
        email
    }
    console.log(add);

    fetch('http://localhost:5000/addToy',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(add)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            alert('add toy done');
        }

    })
}
    return (
               
                <form onSubmit={handleToy}>
                    
                    <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" name='Picture' placeholder="Picture URL" className="input input-bordered" />
                    
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <input type="text" name='category' placeholder="sub-Category" className="input input-bordered" />
                    
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='Name' placeholder="Toy Name" className="input input-bordered" />
                    
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='displayName' defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" />
                    
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='Price' placeholder="Price" className="input input-bordered" />
                    
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='Rating' placeholder="rating" className="input input-bordered" />
                    
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='Quantity' placeholder="Quantity" className="input input-bordered" />
                    
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='details' placeholder="description" className="input input-bordered" />
                    
                        </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                        </div>
                        </div>
                        
                    
                </form>
               
                   
               
    );
};

export default AddToy;