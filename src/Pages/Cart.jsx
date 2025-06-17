import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';

import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import useAxiosSecure from './hooks/UseAxiosSecure';



const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
const axiosSecure=useAxiosSecure()
    

 useEffect(() => {
  if (user?.email) {
    axiosSecure.get(`/purchases/user/${user.email}`)
      .then((res) => {
        setCartItems(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch purchases");
        setLoading(false);
      });
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
      console.log('Deleting item with ID:', _id);
      fetch(`http://localhost:3000/purchases/${_id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log('Delete response data:', data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your list item has been deleted.",
              icon: "success"
            });
            const remainingData = cartItems.filter(item => item._id.toString() !== _id.toString());
            setCartItems(remainingData);
          }
        }).catch(err => {
          console.error('Delete fetch error:', err);
          Swal.fire('Error', 'Failed to delete item', 'error');
        });
    }
  });
};






  return (
    <div className='bg-blue-200'>
      <div className="max-w-5xl mx-auto p-4">
      <ToastContainer position="top-center" autoClose={3000} />
      <h2 className="text-3xl font-bold mb-6">My Cart</h2>

      {loading ? (
        <p>Loading your cart...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-600">No purchases yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map((item) => (
            <div key={item._id} className="bg-white shadow-md p-4 rounded-lg">
              <img src={item.photo} alt={item.name} className="h-40 w-full object-cover rounded" />
              <h3 className="text-xl font-bold mt-2">{item.product_name}</h3>
              <p><strong>Brand:</strong> {item.brand}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Quantity Bought:</strong> {item.quantityBought}</p>
              <p><strong>Min Order:</strong> {item.min_selling_quantity}</p>
              <p><strong>Buy Date:</strong> {new Date(item.date).toLocaleString()}</p>
              <p className="mt-2">{item.short_description}</p>
 
              <button className="btn btn-error mt-3" onClick={() => handleDeleteData(item._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>

      )}
    </div>
    </div>
  );
};

export default Cart;
