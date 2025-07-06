import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
  useEffect(() => {
    document.title = "Update Product | PrimeGo ";
  }, []);

  const {
    _id,
    main_quantity,
    product_name,
    photo,
    min_selling_quantity,
    brand,
    category,
    rating
  } = useLoaderData();

  const handleUpdateProductForm = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateProduct = Object.fromEntries(formData.entries());

    updateProduct.main_quantity = Number(updateProduct.main_quantity);
    updateProduct.min_selling_quantity = Number(updateProduct.min_selling_quantity);
    updateProduct.price = Number(updateProduct.price);
    updateProduct.rating = Number(updateProduct.rating);

    fetch(`https://primego-wholesale-server.vercel.app/products/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(updateProduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          toast.success('✅ Product Updated Successfully');
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-2xl">
      <ToastContainer position="top-center" autoClose={3000} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Update Product</h2>

      <form onSubmit={handleUpdateProductForm} className="space-y-4">

        <div>
          <label className="block font-medium text-cyan-800 mb-1">Photo URL</label>
          <input type="text" name="photo" defaultValue={photo} required placeholder="Product Image URL" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium text-cyan-800 mb-1">Product Title</label>
          <input type="text" name="product_name" defaultValue={product_name} required placeholder="Product Name" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium text-cyan-800 mb-1">Main Quantity</label>
          <input type="number" name="main_quantity" defaultValue={main_quantity} required min="1" placeholder="Total Quantity" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium text-cyan-800 mb-1">Minimum Selling Quantity</label>
          <input type="number" name="min_selling_quantity" defaultValue={min_selling_quantity} required min="1" placeholder="Min Selling Quantity" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium text-cyan-800 mb-1">Brand Name</label>
          <input type="text" name="brand" defaultValue={brand} required placeholder="Brand Name" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium text-cyan-800 mb-1">Category</label>
          <select name="category" defaultValue={category} required className="w-full border p-2 rounded">
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
          <label className="block font-medium text-cyan-800 mb-1">Rating (1–5)</label>
          <input type="number" name="rating" defaultValue={rating} required min="1" max="5" placeholder="Rating" className="w-full border p-2 rounded" />
        </div>

        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-700 text-white py-2 rounded-lg font-semibold transition">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
