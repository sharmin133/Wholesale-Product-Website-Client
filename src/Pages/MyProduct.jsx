import React, {  useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

import useAxiosSecure from './hooks/UseAxiosSecure';


const MyProduct = () => {
 useEffect(() => {
    document.title = "My Product| PrimeGo ";
  }, []);
    const { user } = useContext(AuthContext);
    // console.log(user.accessToken)
  const [items, setItems] = useState([]);
  const axiosSecure=useAxiosSecure()



  useEffect(() => {
    if (user?.email) {
        
       axiosSecure.get(`/products/email/${user.email}`,{
      
       })
  .then(res => setItems(res.data));
    }
  }, [user,axiosSecure]);

  const handleDeleteData = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://wholesale-product-server.vercel.app/products/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your list item has been deleted.",
                icon: "success"
              });
              const remainingData = items.filter(item => item._id !== _id);
              setItems(remainingData);
            }
          });
      }
    });
  };


    return (
      <div className="overflow-x-auto p-2">
      <table className="table-fixed w-full text-sm md:text-base">
        <thead>
          <tr className="bg-amber-300 text-center">
            <th className="hidden md:table-cell"></th>
            <th className="text-blue-800 font-bold md:text-2xl text-xl">Name</th>
            <th className="hidden md:table-cell text-cyan-800 md:text-2xl text-xl">Brand</th>
            <th className="text-amber-800 md:text-2xl text-xl">Price</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="bg-base-200 text-center">
              <td className="hidden md:table-cell px-2 py-2">
                <img
                  src={item.photo}
                  alt=""
                  className="w-60 h-40 object-cover rounded-xl mx-auto shadow-2xl"
                />
              </td>
              <td className="text-blue-800 font-bold px-2 py-2 md:text-2xl">{item.product_name}</td>
              <td className="hidden md:table-cell md:text-xl text-cyan-800 px-2 py-2">{item.brand}</td>
              <td className="text-amber-800 px-2 py-2 md:text-xl">${item.price}</td>
              <td className="px-2 py-2">
                  <button
                    className="btn btn-sm  md:btn-lg bg-red-400 w-full md:w-auto"
                    onClick={() => handleDeleteData(item._id)}
                  >
                    Delete
                  </button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyProduct;