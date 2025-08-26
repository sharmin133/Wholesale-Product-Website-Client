import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from './hooks/UseAxiosSecure';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    document.title = "Cart | PrimeGo";
  }, []);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosSecure.get(`/purchases/user/${user.email}`)
        .then(res => {
          setCartItems(res.data);
          setLoading(false);
          setError('');
        })
        .catch(err => {
          console.error(err);
          setError('No purchases yet.');
          setLoading(false);
        });
    }
  }, [user, axiosSecure]);

  const handleDeleteData = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10B981", // emerald
      cancelButtonColor: "#F59E0B", // amber
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://primego-wholesale-server.vercel.app/purchases/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your cart item has been deleted.",
                icon: "success",
                confirmButtonColor: "#EF4444", // pink/red
              });
              setCartItems(prev => prev.filter(item => item._id !== _id));
            }
          })
          .catch(err => {
            console.error(err);
            Swal.fire('Error', 'Failed to delete item', 'error');
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 p-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-emerald-600 dark:text-emerald-400 mb-6">My Cart</h2>

        {loading ? (
          <p className="text-center text-gray-700 dark:text-gray-300">Loading your cart...</p>
        ) : error ? (
          <p className="text-center text-pink-500">{error}</p>
        ) : cartItems.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-300">No purchases yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map(item => (
              <div key={item._id} className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 border-t-4 border-emerald-500 hover:shadow-emerald-300 transition-shadow duration-300 relative overflow-hidden">
                
                {/* Floating amber circle */}
                <span className="absolute w-16 h-16 bg-amber-300 dark:bg-amber-600 rounded-full top-[-10px] right-[-10px] opacity-40 animate-pulse"></span>

                <img src={item.photo} alt={item.name} className="h-40 w-full object-cover rounded-lg shadow-md mb-2" />
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{item.product_name}</h3>
                <p><strong>Brand:</strong> {item.brand}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Quantity Bought:</strong> {item.quantityBought}</p>
                <p><strong>Min Order:</strong> {item.min_selling_quantity}</p>
                <p><strong>Buy Date:</strong> {new Date(item.date).toLocaleString()}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.short_description}</p>

                <button
                  className="mt-3 w-full py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold transition-colors"
                  onClick={() => handleDeleteData(item._id)}
                >
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

