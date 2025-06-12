
import React from 'react';
import { useLoaderData } from 'react-router';

const CategoryProductDetails = () => {


    const product=useLoaderData()


    return (
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-xl shadow"
        />
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p><span className="font-semibold">Brand:</span> {product.brand}</p>
          <p><span className="font-semibold">Category:</span> {product.category}</p>
          <p><span className="font-semibold">Min Order:</span> {product.minQuantity} pcs</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">৳ {product.price}</p>
          <button className="btn btn-primary mt-4">Place Order</button>
        </div>
      </div>
    </div>
    );
};

export default CategoryProductDetails;

