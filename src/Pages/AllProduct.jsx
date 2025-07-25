import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import useAxiosSecure from './hooks/UseAxiosSecure';

const AllProduct = () => {
  useEffect(() => {
    document.title = "All Product | PrimeGo";
  }, []);

  const [products, setProducts] = useState([]);
  const [tableView, setTableView] = useState(false);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const axiosSecure = useAxiosSecure();

  const handleTableToggle = () => setTableView(!tableView);

  useEffect(() => {
    axiosSecure.get('/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error("Error loading products:", err.response?.data || err.message);
      });
  }, [axiosSecure]);

  const allBrands = [...new Set(products.map(p => p.brand))];

  // ✅ Filtered + Sorted products
  const filteredProducts = products
    .filter(p => !selectedBrand || p.brand === selectedBrand)
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.price - b.price;
      if (sortOrder === 'highToLow') return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Filter + Sorting + Toggle Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        {/* Brand Filter */}
        <div>
          <label className="mr-2 font-medium">Filter by Brand:</label>
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

        {/* Sort By Price */}
        <div>
          <label className="mr-2 font-medium">Sort by Price:</label>
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

        {/* Table / Card View Toggle */}
        <label className="flex items-center gap-2 cursor-pointer">
          <span>Card View</span>
          <input
            type="checkbox"
            checked={tableView}
            onChange={handleTableToggle}
            className="toggle toggle-success"
          />
          <span>Table View</span>
        </label>
      </div>

      {/* Table View */}
      {tableView ? (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-300 dark:border-gray-600 text-sm md:text-base">
            <thead>
              <tr className="bg-pink-100 dark:bg-pink-700 text-gray-900 dark:text-white text-center">
                <th className="hidden md:table-cell">Image</th>
                <th>Name</th>
                <th className="hidden md:table-cell">Brand</th>
                <th className="hidden md:table-cell">Min Qty</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product._id} className="text-center border-b dark:border-gray-700">
                  <td className="hidden md:table-cell py-2">
                    <img
                      src={product.photo}
                      alt={product.product_name}
                      className="w-28 h-20 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="font-bold text-emerald-600 dark:text-emerald-400">{product.product_name}</td>
                  <td className="hidden md:table-cell text-pink-600 dark:text-pink-300">{product.brand}</td>
                  <td className="hidden md:table-cell text-pink-600 dark:text-pink-300">{product.min_selling_quantity}</td>
                  <td className="text-emerald-700 dark:text-emerald-300">${product.price}</td>
                  <td>
                    <Link to={`/updatedProduct/${product._id}`}>
                      <button className="bg-emerald-500 hover:bg-emerald-700 text-white px-3 py-1 rounded-md text-sm">
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
        // Card View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product._id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.photo}
                alt={product.product_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-gray-900 dark:text-gray-100">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{product.product_name}</h3>
                <p className="text-pink-600 dark:text-pink-300">Brand: {product.brand}</p>
                <p className="text-pink-600 dark:text-pink-300">Min Qty: {product.min_selling_quantity}</p>
                <p className="text-emerald-700 dark:text-emerald-300">Price: ${product.price}</p>
              </div>
              <div className="px-4 pb-4">
                <Link to={`/updatedProduct/${product._id}`}>
                  <button className="w-full bg-emerald-500 hover:bg-emerald-700 text-white py-2 rounded-md transition">
                    Update Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProduct;
