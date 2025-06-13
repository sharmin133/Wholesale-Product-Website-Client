import React, { use } from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { useState } from 'react';
import {  ToastContainer } from 'react-toastify';


const CategoryProductDetails = () => {


    const product=useLoaderData();
    const {user}=use(AuthContext);
    const[quantity,SetIsQuantity]=useState(1)

    const handleIncreaseQuantity=()=>{
      SetIsQuantity(prev=>prev+1);

    };


    const handleDecreaseQuantity = () =>{

      if(quantity>1){
       SetIsQuantity(prev=>prev-1);
      }

    }

  const handleBuy=()=>{
  
  
}

 const handleAddCheckOutForm=e=>{
           e.preventDefault();
        const form=e.target;
        const formData= new FormData(form);
        const newProduct=Object.fromEntries(formData.entries());
        console.log(newProduct)
       


    }


    return (
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-xl shadow" />
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p><span className="font-semibold">Brand:</span> {product.brand}</p>
          <p><span className="font-semibold">Category:</span> {product.category}</p>
          <p><span className="font-semibold">Min Order:</span> {product.min_selling_quantity} pcs</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">৳ {product.price}</p>
 <button className="btn btn-primary mt-4" onClick={() => document.getElementById('buy_modal').showModal()}>
            Buy
          </button>

          {/* Modal */}
          <dialog id="buy_modal" className="modal modal-middle">
               <ToastContainer position="top-center" autoClose={3000} />
            <div className="modal-box">
              <h3 className="text-lg font-bold mb-2">Purchase Product</h3>
             <form onSubmit={handleAddCheckOutForm}>
              <div className="space-y-2">
                <input className="input input-bordered w-full" value={user?.displayName} readOnly />
                <input className="input input-bordered w-full" value={user?.email} readOnly />

                <div className="flex items-center gap-2">
                  <h2>Quantity:</h2>
                  <button className="btn btn-sm" onClick={handleDecreaseQuantity}>-</button>
                  <input type="number" value={quantity} className="input input-bordered w-16 text-center" readOnly />
                  <button className="btn btn-sm" onClick={handleIncreaseQuantity}>+</button>
                </div>
              </div>

              <div className="modal-action">
                <button className="btn btn-success" onClick={handleBuy} >Buy</button>
                <form method="dialog">
                  <button type="submit"  className="btn">Close</button>
                </form>
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
