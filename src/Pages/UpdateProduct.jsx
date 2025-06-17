
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
const {_id, main_quantity, product_name,photo,min_selling_quantity,brand,category,rating}=useLoaderData();
  const handleUpdateProductForm=e=>{
           e.preventDefault();
       const form=e.target;
        const formData= new FormData(form);
      const updateProduct=Object.fromEntries(formData.entries());

        updateProduct.main_quantity = Number(updateProduct.main_quantity);
  updateProduct.min_selling_quantity = Number(updateProduct.min_selling_quantity);
  updateProduct.price = Number(updateProduct.price);
updateProduct.rating = Number(updateProduct.rating);
        
       
       



    fetch(`http://localhost:3000/products/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(updateProduct)
         })
         .then(res=>res.json())
         .then(data=>{
           if(data.modifiedCount){
            toast.success('Data Updated Successfully')
           }
         })

    }
    
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
          <ToastContainer position="top-center" autoClose={3000} />
     
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Submit updated Product</h2>
      <form onSubmit={handleUpdateProductForm} className="space-y-5">
       
       <label className="block font-medium text-gray-700 mb-1">Photo URL</label>
          <input type="text" className="w-full border p-2 rounded" name="photo" placeholder="Your photo URL" required defaultValue={photo} />

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Product Title</label>
          <input type="text" name="product_name" required className="w-full border p-2 rounded"  placeholder="Name" defaultValue={product_name} />
        </div>

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Main Quantity</label>
          <input type="number" name="main_quantity" min="1" required className="w-full border p-2 rounded" defaultValue={main_quantity}  placeholder="Total Quantity"/>
        </div>

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Minimum Selling Quantity</label>
          <input type="number" name="min_selling_quantity" min="1" required className="w-full border p-2 rounded" defaultValue={min_selling_quantity}  placeholder="Minimum selling quantity" />
        </div>

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Brand Name</label>
          <input type="text" name="brand" required className="w-full border p-2 rounded"  placeholder="Brand Name" defaultValue={brand} />
        </div>

       
        <div>
          <label className="block font-medium text-gray-700 mb-1">Category</label>
          <select name="category" required className="w-full border p-2 rounded " defaultValue={category}  placeholder="select categories">
            <option value="">-- Select Category --</option>
            <option value="Electronics & Gadgets">Electronics & Gadgets</option>
            <option value="Home & Kitchen Appliances">Home & Kitchen Appliances</option>
            <option value="Fashion & Apparel">Fashion & Apparel</option>
            <option value="Industrial Machinery & Tools">Industrial Machinery & Tools</option>
            <option value="Health & Beauty">Health & Beauty</option>
            <option value="Automotive Parts & Accessories">Automotive Parts & Accessories</option>
            <option value="Office Supplies & Stationery">Office Supplies & Stationery</option>
          </select>
        </div>

{/*        
        <div>
          <label className="block font-medium text-gray-700 mb-1">Short Description</label>
          <textarea name="short_description" rows="3" required className="w-full border p-2 rounded"  placeholder="Description"></textarea>
        </div> */}

   

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Rating (1–5)</label>
          <input type="number" name="rating" min="1" max="5" required className="w-full border p-2 rounded" defaultValue={rating}  placeholder="rating " />
        </div>

       
     <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
          Update Product
        </button>
      </form>
    </div>
    );
};

export default UpdateProduct;