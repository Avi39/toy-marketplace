/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToysRow from './MyToysRow';
import MyToysUpdate from './MyToysUpdate';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2'

const MyToys = () => {
    useTitle('My Toys');
    const {user} =useContext(AuthContext);
   
    const [myToys,setMyToys] = useState([]); 
    const url = `https://assignment-eleven-server-avi39.vercel.app/addToy?email=${user?.email}`;
    useEffect (()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))    
    },[url])

    const handleDelete = id =>{ 
        const proceed = confirm('Are You sure You Want to Delete');
        if(proceed){
            fetch(`https://assignment-eleven-server-lyart.vercel.app/addToy/${id}`,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0)
                {
                    Swal.fire({
                        title: 'Done!',
                        text: 'Deleted successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })  
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining);
                    
                }
                
            })
        }
    }

    // const handleUpdate = id =>{
    //     fetch(`https://assignment-eleven-server-lyart.vercel.app/updated/${id}`,{
    //         method:'PATCH',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify(id),
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         if(data.modifiedCount > 0) {
    //             // update

    //         }    
    //     } 
    //     )
    // }
   
    return (
        <div className="overflow-x-auto w-full">
           
  <table className="table w-full">
    {/* head */}
    <thead>
        <div>

        </div>
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
        // handleUpdate ={ handleUpdate }
        >
        </MyToysRow>)

      }
      {/* {
        myToys.map(myTo=>
        <MyToysUpdate
        key={myTo._id}
        myToy={myTo}
        >

        </MyToysUpdate>)

      } */}
    </tbody>
    
    
  </table>
</div>
    );
};

export default MyToys;