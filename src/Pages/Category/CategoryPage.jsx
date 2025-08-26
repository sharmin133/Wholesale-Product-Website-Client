import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import ReactStars from 'react-stars';
import { AuthContext } from '../../Context/AuthContext';

const CategoryPage = () => {
  useEffect(() => {
    document.title = "Category Product | PrimeGo";
  }, []);

  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://primego-wholesale-server.vercel.app/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [categoryName]);

  return (
    <div className="p-4 px-16 bg-amber-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-emerald-600 dark:text-emerald-400">
        {categoryName} Products
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {products.map(product => (
          <div
            key={product._id}
            className="card w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg
                       border-t-4 border-amber-400 dark:border-emerald-500
                       hover:shadow-emerald-500/50 transition-shadow duration-300"
          >
            <figure className="overflow-hidden rounded-t-lg">
              <img
                src={product.photo}
                alt={product.product_name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body p-4 text-gray-900 dark:text-gray-100">
              <h2 className="card-title mb-2 text-emerald-600 dark:text-emerald-400">
                {product.product_name}
              </h2>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Min Quantity:</strong> {product.min_selling_quantity}</p>
              <p><strong>Price:</strong> ${product.price}</p>

              <div className="my-2">
                <ReactStars
                  count={5}
                  value={product.rating}
                  edit={false}
                  size={24}
                  color2={'#10B981'} // emerald-500
                />
              </div>

              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    if (!user) {
                      navigate('/login', { state: { from: `/products/${product._id}` } });
                    } else {
                      navigate(`/products/${product._id}`);
                    }
                  }}
                  className="btn btn-sm md:btn-lg
                             bg-emerald-500 hover:bg-emerald-700
                             text-white rounded-lg
                             transition-colors duration-300"
                >
                  Details More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

