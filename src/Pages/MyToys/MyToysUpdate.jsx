/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';


const MyToysUpdate = () => {
    const {user} =useContext(AuthContext);
   
    const [myToys,setMyToys] = useState([]); 
    const url = `http://localhost:5000/addToy?email=${user?.email}`;
    useEffect (()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))    
    },[url])

    return (
        <div>
            
        </div>
        // <form onSubmit={}>
                    
        //             <div className="card-body">
        //             <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input type="text" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Picture URL</span>
        //                     </label>
        //                     <input type="text" name='Picture' placeholder="Picture URL" className="input input-bordered" />
                    
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Sub-Category</span>
        //                     </label>
        //                     <input type="text" name='category' placeholder="sub-Category" className="input input-bordered" />
                    
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Toy Name</span>
        //                     </label>
        //                     <input type="text" name='Name' placeholder="Toy Name" className="input input-bordered" />
                    
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">User Name</span>
        //                     </label>
        //                     <input type="text" name='displayName' defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" />
                    
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Price</span>
        //                     </label>
        //                     <input type="text" name='Price' placeholder="Price" className="input input-bordered" />
                    
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Rating</span>
        //                     </label>
        //                     <input type="text" name='Rating' placeholder="rating" className="input input-bordered" />
                    
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Quantity</span>
        //                     </label>
        //                     <input type="text" name='Quantity' placeholder="Quantity" className="input input-bordered" />
                    
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Description</span>
        //                     </label>
        //                     <input type="text" name='details' placeholder="description" className="input input-bordered" />
                    
        //                 </div>
        //                 </div>
        //                 <div className="form-control mt-6">
        //                     <input className="btn btn-primary btn-block" type="submit" value="Submit" />
        //                 </div>
        //                 </div>
                        
                    
        //         </form>
    );
};

export default MyToysUpdate;