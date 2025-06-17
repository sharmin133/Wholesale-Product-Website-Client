import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from './hooks/UseAxiosSecure';

const AllProduct = () => {
 const [products, setProducts] = useState([]);
  const [tableView, setTableView] = useState(false);
  const [filterAvailable, setFilterAvailable] = useState(false); 
  const axiosSecure=useAxiosSecure()
  
  const handleTableToggle = () => {
    setTableView(!tableView);
  };
useEffect(() => {
    axiosSecure.get('/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error("Error loading products:", err.response?.data || err.message);
      });
  }, [axiosSecure]);

  const filteredProducts = filterAvailable
    ? products.filter((product) => product.min_selling_quantity > 100)
    : products;

  return (
    <div>
      <Helmet>
        <title>All Products | PrimeGo</title>
      </Helmet>

      <div className="flex justify-between  gap-4 mb-4  ">
   <div className="inline-flex rounded-md shadow-sm" role="group">
  <button
    onClick={() => setFilterAvailable(false)}
    className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-l-lg ${
      !filterAvailable ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
    }`}
  >
    All Products
  </button>
  <button
    onClick={() => setFilterAvailable(true)}
    className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-r-lg ${
      filterAvailable ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
    }`}
  >
   Minimum selling quantity &ge; 100
  </button>
</div>

        {/* ✅ Table/Card toggle */}
        <label className="flex items-center gap-2 cursor-pointer">
          <span>Card View</span>
          <input
            type="checkbox"
            checked={tableView}
            onChange={handleTableToggle}
            className="toggle"
          />
          <span>Table View</span>
        </label>
      </div>

      {/* ✅ Table View */}
      {tableView ? (
        <div className="overflow-x-auto p-2">
          <table className="table-fixed w-full text-sm md:text-base">
            <thead>
              <tr className="bg-amber-200 text-center">
                <th className="hidden md:table-cell text-blue-800 font-bold md:text-2xl text-xl">Image</th>
                <th className="text-blue-800 font-bold md:text-2xl text-xl">Name</th>
                <th className="hidden md:table-cell text-cyan-800 md:text-2xl text-xl">Brand Name</th>
                <th className="hidden md:table-cell text-cyan-800 md:text-2xl text-xl">Min Qty</th>
                <th className="text-amber-800 md:text-2xl text-xl">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id} className="text-center">
                  <td className="hidden md:table-cell px-2 py-2">
                    <img
                      src={product.photo}
                      alt=""
                      className="w-60 h-40 object-cover rounded-xl mx-auto shadow-2xl"
                    />
                  </td>
                  <td className="text-blue-800 font-bold md:text-2xl px-2 py-2">
                    {product.product_name}
                  </td>
                  <td className="hidden md:table-cell md:text-xl text-cyan-800 px-2 py-2">
                    {product.brand}
                  </td>
                  <td className="hidden md:table-cell md:text-xl text-cyan-800 px-2 py-2">
                    {product.min_selling_quantity}
                  </td>
                  <td className="text-amber-800 md:text-xl px-2 py-2">$ {product.price}</td>
                  <td className="px-2 py-2">
                    <Link to={`/updatedProduct/${product._id}`}>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
                        Update Product
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // ✅ Card View
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredProducts.map((product) => (
            <div key={product._id} className="rounded-lg shadow-lg">
              <div className="p-4 flex items-center gap-3">
                <img
                  src={product.photo}
                  alt=""
                  className="w-40 h-40 object-cover rounded-md mb-4"
                />
                <div>
                  <h2 className="text-xl font-bold text-blue-800 mb-2">{product.product_name}</h2>
                  <p className="text-cyan-800 mb-1">Brand: {product.brand}</p>
                  <p className="text-cyan-800 mb-1">Min Qty: {product.min_selling_quantity}</p>
                  <p className="text-amber-800 mb-3">Rating: {product.rating}</p>
                </div>
              </div>
              <Link to={`/updatedProduct/${product._id}`}>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
                  Update Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProduct;
