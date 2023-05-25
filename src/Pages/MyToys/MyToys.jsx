/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const {user} =useContext(AuthContext);
    const [myToys,setMyToys] = useState([]); 
    const url = `http://localhost:5000/addToy?email=${user?.email}`;
    useEffect (()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))    
    },[])

    const handleDelete = id =>{ 
        const proceed = confirm('Are You sure You Want to Delete');
        if(proceed){
            fetch(`http://localhost:5000/addToy/${id}`,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0)
                {
                    alert('Deleted Successful');   
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining);
                    
                }
                
            })
        }
    }
    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
            <input type="checkbox" className="checkbox" />
        </th>
        <th>Image</th>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Category</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>Details</th>
        <th></th>
    
       
        
        {/* <th>Image</th>
        <th>Toy Name</th>
        <th>seller Name</th>
        <th>seller email</th>
        <th>sub-Category</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>Description</th> */}
       
      </tr>
    </thead>
    <tbody>
      {
        myToys.map(myToy=> <MyToysRow 
        key={myToy._id}
        myToy={myToy}
        handleDelete={handleDelete}
        >

        </MyToysRow>)
      }
      
    </tbody>
    
    
  </table>
</div>
    );
};

export default MyToys;