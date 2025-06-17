import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ReactStars from 'react-stars';

const TopItems = () => {

    const [topProducts, setTopProducts] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        // Sort by rating descending, then take top 4
        const top = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);
        setTopProducts(top);
      });
  }, []);
    return (
       <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Top Rated Products</h2>
      <div className='flex flex-1 gap-3'>

        
                <div className="relative  h-[500px] md:h-[600px]">
      <img
        src="/Allimage/9312.jpg"
        className="w-full h-full object-cover"
        alt=""
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white px-4">
        <div className="flex flex-col items-center">
            
          <h2 className="text-2xl md:text-6xl text-orange-500 font-bold mb-4">
           Mega Sale
          </h2>
          <p className="md:text-2xl font-medium  ">
         50% Off When Buying At Store
          </p>
        </div>
      </div>
    </div>
       



        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-items-center">
        {topProducts.map(product => (
          <div key={product._id} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={product.photo} alt={product.product_name} className="h-32 object-cover w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.product_name}</h2>
              <p><strong>Price:</strong> ${product.price}</p>
              <ReactStars
                count={5}
                value={product.rating}
                edit={false}
                size={24}
                color2={'#ffd700'}
              />
            
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    );
};

export default TopItems;