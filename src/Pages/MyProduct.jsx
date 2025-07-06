import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from './hooks/UseAxiosSecure';

const MyProduct = () => {
  useEffect(() => {
    document.title = "My Product | PrimeGo ";
  }, []);

  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/products/email/${user.email}`)
        .then(res => setItems(res.data));
    }
  }, [user, axiosSecure]);

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
        fetch(`https://primego-wholesale-server.vercel.app/products/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
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
    <div className="overflow-x-auto p-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">My Listed Products</h2>
      <table className="table w-full border border-gray-200 dark:border-gray-700">
        <thead>
          <tr className="bg-pink-100 dark:bg-pink-800 text-center">
            <th className="hidden md:table-cell text-lg">Image</th>
            <th className="text-blue-800 font-bold text-xl">Name</th>
            <th className="hidden md:table-cell text-cyan-800 text-xl">Brand</th>
            <th className="text-amber-800 text-xl">Price</th>
            <th className="text-center text-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="text-center border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <td className="hidden md:table-cell px-2 py-2">
                <img
                  src={item.photo}
                  alt={item.product_name}
                  className="w-36 h-24 object-cover rounded-xl mx-auto shadow-lg"
                />
              </td>
              <td className="text-blue-800 font-semibold px-2 py-2 text-lg">{item.product_name}</td>
              <td className="hidden md:table-cell text-cyan-800 px-2 py-2 text-md">{item.brand}</td>
              <td className="text-amber-800 px-2 py-2 text-md">${item.price}</td>
              <td className="px-2 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition w-full md:w-auto"
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
