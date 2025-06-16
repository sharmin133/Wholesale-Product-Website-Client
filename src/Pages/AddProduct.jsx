import axios from 'axios';
import React, {  useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthContext';

const AddProduct = () => {

 const{user}=useContext(AuthContext)
 console.log(user.name)
 console.log(user.role)

    const handleAddProductForm=e=>{
           e.preventDefault();
        const form=e.target;
        const formData= new FormData(form);
      const newProduct=Object.fromEntries(formData.entries());

        newProduct.main_quantity = Number(newProduct.main_quantity);
  newProduct.min_selling_quantity = Number(newProduct.min_selling_quantity);
        
        console.log(newProduct)
       

       axios.post('http://localhost:3000/products',newProduct)
       .then(data=>{
        if(data.data.insertedId){
              toast.success('Product added successfully!')
             form.reset()
        }
       })

    }


    return (
       <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
          <ToastContainer position="top-center" autoClose={3000} />
          {
        user?.role === 'brand' ? (
          <>
     
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Submit a New Product</h2>
      <form onSubmit={handleAddProductForm} className="space-y-5">
       
       <label className="block font-medium text-gray-700 mb-1">Photo URL</label>
          <input type="text" className="w-full border p-2 rounded" name="photo" placeholder="Your photo URL" required  />

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Product Title</label>
         <input type="text" name="product_name" required className="w-full border p-2 rounded" placeholder="Product Name" />
        </div>

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Main Quantity</label>
          <input type="number" name="main_quantity" min="1" required className="w-full border p-2 rounded"  placeholder="Total Quantity"/>
        </div>

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Minimum Selling Quantity</label>
          <input type="number" name="min_selling_quantity" min="1" required className="w-full border p-2 rounded"  placeholder="Minimum selling quantity" />
        </div>

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Brand Name</label>
          <input type="text" name="brand" required className="w-full border p-2 rounded"  placeholder="Brand Name" />
        </div>

       
        <div>
          <label className="block font-medium text-gray-700 mb-1">Category</label>
          <select name="category" required className="w-full border p-2 rounded "  placeholder="select categories">
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

       
        <div>
          <label className="block font-medium text-gray-700 mb-1">Short Description</label>
          <textarea name="short_description" rows="3" required className="w-full border p-2 rounded"  placeholder="Description"></textarea>
        </div>

   
        <div>
          <label className="block font-medium text-gray-700 mb-1">Price (per unit)</label>
          <input type="number" step="0.01" name="price" required className="w-full border p-2 rounded"  placeholder="Price per product" />
        </div>

      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Rating (1–5)</label>
          <input type="number" name="rating" min="1" max="5" required className="w-full border p-2 rounded"  placeholder="rating " />
        </div>

<label  className="label">User Email</label>
        <input  name='email' type="email" className="input input-bordered w-full" defaultValue={user.email} readOnly  />
 <label  className="label">User Name</label>
        <input name='name' type="text" className="input input-bordered w-full" defaultValue={user.name} readOnly />
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
          Add Product
        </button>
      </form>

      
      <div className="mt-10 border-t pt-5 text-sm text-gray-600 italic">
        <p>
          This section includes details that help buyers understand your product. Make sure to upload a clear image, provide accurate quantities, describe the product briefly, and categorize it correctly. Minimum selling quantity ensures wholesale compliance.
        </p>
      </div>

       </>
        ) : (
          <p className="text-center text-red-600 font-semibold">
            Only Brandized users can add products.
          </p>
        )
      }
    </div>
    );
};

export default AddProduct;