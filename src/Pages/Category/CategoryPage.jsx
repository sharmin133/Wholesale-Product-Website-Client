
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';


const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/category/${categoryName}`)
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
              <h2 className="card-title">{product.name}</h2>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Min Quantity:</strong> {product.minQuantity}</p>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <div className="card-actions justify-end">
                <Link to={`/products/${product._id}`} >
                <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

