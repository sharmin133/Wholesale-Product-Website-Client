import React, { useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthContext';
import useAxiosSecure from './hooks/UseAxiosSecure';
import { Zoom } from 'react-awesome-reveal';

const AddProduct = () => {
  useEffect(() => {
    document.title = "Add Product | PrimeGo ";
  }, []);

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleAddProductForm = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newProduct = Object.fromEntries(formData.entries());

    newProduct.main_quantity = Number(newProduct.main_quantity);
    newProduct.min_selling_quantity = Number(newProduct.min_selling_quantity);
    newProduct.price = Number(newProduct.price);
    newProduct.rating = Number(newProduct.rating);

    axiosSecure.post('/products', newProduct)
      .then(data => {
        if (data.data.insertedId) {
          toast.success('Product added successfully!');
          form.reset();
        }
      });
  };

  return (
    <div className="bg-amber-50 dark:bg-gray-900 min-h-screen p-4">
      <Zoom triggerOnce>
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl border-t-4 border-amber-400">
          <ToastContainer position="top-center" autoClose={3000} />

          {user?.role === 'brand' ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center text-emerald-700 dark:text-emerald-400 mt-6">
                Submit a New Product
              </h2>
              <form onSubmit={handleAddProductForm} className="space-y-5">
                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Photo URL</label>
                  <input type="text" name="photo" required className="w-full border p-2 rounded dark:bg-gray-700" placeholder="Your photo URL" />
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Product Title</label>
                  <input type="text" name="product_name" required className="w-full border p-2 rounded dark:bg-gray-700" placeholder="Product Name" />
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Main Quantity</label>
                  <input type="number" name="main_quantity" min="1" required className="w-full border p-2 rounded dark:bg-gray-700" placeholder="Total Quantity" />
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Minimum Selling Quantity</label>
                  <input type="number" name="min_selling_quantity" min="1" required className="w-full border p-2 rounded dark:bg-gray-700" placeholder="Minimum selling quantity" />
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Brand Name</label>
                  <input type="text" name="brand" required className="w-full border p-2 rounded dark:bg-gray-700" placeholder="Brand Name" />
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Category</label>
                  <select name="category" required className="w-full border p-2 rounded dark:bg-gray-700">
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
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Short Description</label>
                  <textarea name="short_description" rows="3" required className="w-full border p-2 rounded dark:bg-gray-700" placeholder="Description"></textarea>
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Price (per unit)</label>
                  <input type="number" step="0.01" name="price" required className="w-full border p-2 rounded dark:bg-gray-700" placeholder="Price per product" />
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">Rating (1–5)</label>
                  <input type="number" name="rating" min="1" max="5" required className="w-full border p-2 rounded dark:bg-gray-700" placeholder="Rating" />
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">User Email</label>
                  <input name="email" type="email" className="w-full border p-2 rounded dark:bg-gray-700" defaultValue={user.email} readOnly />
                </div>

                <div>
                  <label className="block font-medium text-emerald-700 dark:text-emerald-300 mb-1">User Name</label>
                  <input name="name" type="text" className="w-full border p-2 rounded dark:bg-gray-700" defaultValue={user.name} readOnly />
                </div>

                <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-800 text-white py-2 rounded-lg font-semibold transition">
                  Add Product
                </button>
              </form>

              <div className="mt-10 border-t border-amber-400 pt-5 text-sm text-gray-600 dark:text-gray-300 italic">
                <p>
                  This section includes details that help buyers understand your product. Make sure to upload a clear image, provide accurate quantities, describe the product briefly, and categorize it correctly. Minimum selling quantity ensures wholesale compliance.
                </p>
              </div>
            </>
          ) : (
            <p className="text-center text-red-600 font-semibold">
              Only Brandized users can add products.
            </p>
          )}
        </div>
      </Zoom>
    </div>
  );
};

export default AddProduct;
