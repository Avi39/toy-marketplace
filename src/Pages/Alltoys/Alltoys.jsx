/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import AlltoysRow from './AlltoysRow';

const Alltoys = () => {
  const{user} = useContext(AuthContext)
  const [allToys,setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setAllToys(data));
    },[])
  return (
    <div>
      <div className="overflow-x-auto w-full mt-2 mb-14">
      <div className='text-center'>
    <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs  mb-8 mt-4" />{" "}
    <button className="btn btn-secondary ml-4">Search</button>

    </div>
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allToys.map(toy =><AlltoysRow
           key={toy._id}
           toy={toy}>

        </AlltoysRow>
          
        )
      }
    
     
      
    </tbody>
    
    
  </table>
</div>
    </div>
  );
};

export default Alltoys;