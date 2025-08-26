import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from './hooks/UseAxiosSecure';

const MyProduct = () => {
  useEffect(() => {
    document.title = "My Product | PrimeGo ";
  }, []);

  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/products/email/${user.email}`)
        .then(res => setItems(res.data));
    }
  }, [user, axiosSecure]);

  const allBrands = [...new Set(items.map(item => item.brand))];

  const filteredItems = items
    .filter(item => !selectedBrand || item.brand === selectedBrand)
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.price - b.price;
      if (sortOrder === 'highToLow') return b.price - a.price;
      return 0;
    });

  const handleDeleteData = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://primego-wholesale-server.vercel.app/products/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
              const remainingData = items.filter(item => item._id !== _id);
              setItems(remainingData);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto p-4 px-8 bg-amber-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">My Listed Products</h2>

      {/* Filter + Sorting Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <label className="mr-2 font-medium text-emerald-700 dark:text-emerald-300">Filter by Brand:</label>
          <select
            className="border px-2 py-1 rounded dark:bg-gray-800"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All</option>
            {allBrands.map((brand, idx) => (
              <option key={idx} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium text-emerald-700 dark:text-emerald-300">Sort by Price:</label>
          <select
            className="border px-2 py-1 rounded dark:bg-gray-800"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="table w-full border border-gray-200 dark:border-gray-700">
        <thead>
          <tr className="bg-amber-200 dark:bg-emerald-700 text-gray-900 dark:text-white text-center">
            <th className="hidden md:table-cell text-lg">Image</th>
            <th className="text-emerald-700 dark:text-emerald-200 font-bold text-xl">Name</th>
            <th className="hidden md:table-cell text-amber-600 dark:text-amber-300 text-xl">Brand</th>
            <th className="text-emerald-600 dark:text-emerald-300 text-xl">Price</th>
            <th className="text-center text-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index} className="text-center border-b dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-emerald-600 transition">
              <td className="hidden md:table-cell px-2 py-2">
                <img
                  src={item.photo}
                  alt={item.product_name}
                  className="w-36 h-24 object-cover rounded-xl mx-auto shadow-lg"
                />
              </td>
              <td className="text-emerald-700 dark:text-emerald-200 font-semibold px-2 py-2 text-lg">{item.product_name}</td>
              <td className="hidden md:table-cell text-amber-600 dark:text-amber-300 px-2 py-2 text-md">{item.brand}</td>
              <td className="text-emerald-600 dark:text-emerald-300 px-2 py-2 text-md">${item.price}</td>
              <td className="px-2 py-2">
                <button
                  className="bg-emerald-500 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-800 text-white px-4 py-2 rounded-lg font-medium transition w-full md:w-auto"
                  onClick={() => handleDeleteData(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProduct;
