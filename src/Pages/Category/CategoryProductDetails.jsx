import React, {  useContext } from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { useState } from 'react';
import {  toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import useAxiosSecure from '../hooks/UseAxiosSecure';
import ReactStars from 'react-stars';


const CategoryProductDetails = () => {

  const axiosSecure=useAxiosSecure()
    const product=useLoaderData();
    const {user}=useContext(AuthContext);
    const[quantity,SetIsQuantity]=useState(1)

    const handleIncreaseQuantity=()=>{
      SetIsQuantity(prev=>prev+1);

    };


    const handleDecreaseQuantity = () =>{

      if(quantity>1){
       SetIsQuantity(prev=>prev-1);
      }

      

    }


const handleBuy = async(e) => {
  e.preventDefault();


  const minSellingQty = parseInt(product.min_selling_quantity);

  if (quantity < minSellingQty) {
    toast.error(`Minimum order is ${minSellingQty} items.`);
    return;
  }

 try{
   axiosSecure.patch(`/products/buy/${product._id}`, { quantityToBuy: quantity })
    .then(result => {
      console.log(result)
      toast.success('Purchase successful!');
      
    })
   const { _id, ...productData } = product;

const purchaseData = {
  ...productData, 
  productId:_id,
  email: user.email,
  name: user.displayName,
  quantityBought: quantity.toString(),
  date: new Date().toISOString(),
};

await axios.post("https://wholesale-product-server.vercel.app/purchases", purchaseData);
 } catch(error) {
      toast.error(error);
    };
};

const handleForm=e=>{
  e.preventDefault();
  const name=e.target.name.value;
  const email=e.target.email.value;
  console.log(name,email)

}


    return (
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold p-4">{product.product_name}</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        
        <img src={product.photo} alt={product.name} className="w-96 h-96 object-cover rounded-xl shadow" />
        <div className="flex-1 space-y-3">
          <p><span className="font-semibold">Brand:</span> {product.brand}</p>
          <p><span className="font-semibold">Category:</span> {product.category}</p>
          <p><span className="font-semibold">Min Order:</span> {product.min_selling_quantity} pcs</p>
          <p><span className="font-semibold">Main quantity:</span> {product.main_quantity} pcs</p>
          <p className="text-2xl font-semibold text-green-600">Price: {product.price}</p>
         <ReactStars
  count={5}
  value={product.rating}
  edit={false}
  size={24}
  color2={'#ffd700'} 
/>
                    <p className="text-gray-700">{product.short_description}</p>
      <button className="btn btn-primary mt-4" onClick={() => document.getElementById('buy_modal').showModal()}>
            Buy
          </button>

          {/* Modal */}
          <dialog id="buy_modal" className="modal modal-middle">
               <ToastContainer position="top-center" autoClose={3000} />
            <div className="modal-box">
              <h3 className="text-lg font-bold mb-2">Purchase Product</h3>
             <form onSubmit={handleForm}>
              <div className="space-y-2">
                <input name='name' className="input input-bordered w-full" defaultValue={user?.displayName} readOnly />
                <input name='email' className="input input-bordered w-full" defaultValue={user?.email} readOnly />

                <div className="flex items-center gap-2">
                  <h2>Quantity:</h2>
                  <button className="btn btn-sm" onClick={handleDecreaseQuantity}>-</button>
                  <input type="number" value={quantity} className="input input-bordered w-16 text-center" readOnly />
                  <button className="btn btn-sm" onClick={handleIncreaseQuantity}>+</button>
                </div>
              </div>

              <div className="modal-action">
                <button className="btn btn-success"onClick={handleBuy} >Buy</button>
                <button type="button" className="btn" onClick={() => document.getElementById('buy_modal').close()}>
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
