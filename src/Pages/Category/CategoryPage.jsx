
import { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useParams } from 'react-router';
import ReactStars from 'react-stars';
import { AuthContext } from '../../Context/AuthContext';


const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
   const navigate = useNavigate();
   const{user}=use(AuthContext)

  useEffect(() => {
    fetch(`https://wholesale-product-server.vercel.app/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [categoryName]);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-4">{categoryName} Products</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product._id} className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={product.photo} alt='' /></figure>
            <div className="card-body">
              <h2 className="card-title">{product.product_name}</h2>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Min Quantity:</strong> {product.min_selling_quantity}</p>
              <p><strong>Price:</strong> ${product.price}</p>
      <ReactStars
  count={5}
  value={product.rating}
  edit={false}
  size={24}
  color2={'#ffd700'} 
/>
           
              
              <div className="card-actions justify-end">
               

                 <button
                  onClick={() => {
                    if (!user) {
                      navigate('/login', { state: { from: `/products/${product._id}` } });
                    } else {
                      navigate(`/products/${product._id}`);
                    }
                  }}
                  className="btn btn-sm  md:btn-lg btn-primary"
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

