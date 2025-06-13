
import React, { use } from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const CategoryProductDetails = () => {


    const product=useLoaderData();
    const {user}=use(AuthContext)


    return (
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-xl shadow" />
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p><span className="font-semibold">Brand:</span> {product.brand}</p>
          <p><span className="font-semibold">Category:</span> {product.category}</p>
          <p><span className="font-semibold">Min Order:</span> {product.minQuantity} pcs</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">৳ {product.price}</p>
         {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Buy Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   
       <form >
         <label  className="label">User Email</label>
        <input  name='email' type="email" className="input input-bordered w-full" defaultValue={user.email} readOnly  />

        <label  className="label">User Name</label>
        <input name='name' type="text" className="input input-bordered w-full" defaultValue={user.displayName} readOnly />


        
       </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Confirm Buy</button>
      </form>
    </div>
  </div>
</dialog>
          
        </div>
      </div>
    </div>
    );
};

export default CategoryProductDetails;

