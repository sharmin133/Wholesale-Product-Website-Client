import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import useAxiosSecure from '../hooks/UseAxiosSecure';
import ReactStars from 'react-stars';

const CategoryProductDetails = () => {
  useEffect(() => {
    document.title = "Category Details | PrimeGo";
  }, []);

  const axiosSecure = useAxiosSecure();
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
  const handleDecreaseQuantity = () => { if(quantity > 1) setQuantity(prev => prev -1); }

  const handleBuy = async (e) => {
    e.preventDefault();
    const minQty = parseInt(product.min_selling_quantity);
    if(quantity < minQty){
      toast.error(`Minimum order is ${minQty} items.`);
      return;
    }

    try{
      await axiosSecure.patch(`/products/buy/${product._id}`, { quantityToBuy: quantity });
      toast.success('Purchase successful!');
      const { _id, ...rest } = product;
      const purchaseData = {
        ...rest,
        productId: _id,
        email: user.email,
        name: user.displayName,
        quantityBought: quantity.toString(),
        date: new Date().toISOString()
      };
      await axios.post("https://primego-wholesale-server.vercel.app/purchases", purchaseData);
    }catch(err){
      toast.error(err.message || "Something went wrong");
    }
  };

  const handleForm = e => e.preventDefault();

  return (
    <div className="max-w-3xl mx-auto my-20 p-6
                    bg-amber-50 dark:bg-gray-900
                    rounded-2xl shadow-xl
                    text-gray-900 dark:text-gray-100">
      <ToastContainer position="top-center" autoClose={3000} />
      
      <h2 className="text-3xl font-bold p-4
                     text-emerald-600 dark:text-emerald-400">
        {product.product_name}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={product.photo}
          alt={product.name}
          className="w-96 h-96 object-cover rounded-xl shadow-lg border-t-4 border-amber-400 dark:border-emerald-500"
        />

        <div className="flex-1 space-y-3">
          <p><span className="font-semibold text-emerald-600 dark:text-emerald-400">Brand:</span> {product.brand}</p>
          <p><span className="font-semibold text-emerald-600 dark:text-emerald-400">Category:</span> {product.category}</p>
          <p><span className="font-semibold text-emerald-600 dark:text-emerald-400">Min Order:</span> {product.min_selling_quantity} pcs</p>
          <p><span className="font-semibold text-emerald-600 dark:text-emerald-400">Main Quantity:</span> {product.main_quantity} pcs</p>
          <p className="text-2xl font-semibold text-emerald-500 dark:text-emerald-700">Price: ${product.price}</p>

          <ReactStars
            count={5}
            value={product.rating}
            edit={false}
            size={24}
            color2={'#10B981'} // emerald-500
          />

          <p className="text-gray-700 dark:text-gray-300">{product.short_description}</p>

          <button
            className="btn mt-4 bg-emerald-500 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300"
            onClick={() => document.getElementById('buy_modal').showModal()}
          >
            Buy
          </button>

          {/* Modal */}
          <dialog
  id="buy_modal"
  className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
>
  <div className="bg-amber-200 dark:bg-gray-800 rounded-2xl p-6 shadow-xl w-full max-w-md">
    <h3 className="text-lg font-bold mb-4 text-emerald-600 dark:text-emerald-400">
      Purchase Product
    </h3>
    <form onSubmit={handleForm} className="space-y-4">
      <input
        name="name"
        className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        defaultValue={user?.displayName}
        readOnly
      />
      <input
        name="email"
        className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        defaultValue={user?.email}
        readOnly
      />

      <div className="flex items-center gap-3">
        <h2 className="text-emerald-600 dark:text-emerald-400 font-semibold">Quantity:</h2>
        <button
          type="button"
          className="btn btn-sm bg-emerald-500 hover:bg-emerald-700 text-white rounded"
          onClick={handleDecreaseQuantity}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          className="input input-bordered w-16 text-center bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          readOnly
        />
        <button
          type="button"
          className="btn btn-sm bg-emerald-500 hover:bg-emerald-700 text-white rounded"
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>

      <div className="flex justify-end gap-3 mt-2">
        <button
          type="submit"
          className="btn bg-emerald-500 hover:bg-emerald-700 text-white rounded-lg"
          onClick={handleBuy}
        >
          Buy
        </button>
        <button
          type="button"
          className="btn bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg"
          onClick={() => document.getElementById('buy_modal').close()}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</dialog>

        </div>
      </div>
    </div>
  );
};

export default CategoryProductDetails;
