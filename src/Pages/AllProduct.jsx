

import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AllProduct = () => {
  
    const products=useLoaderData();
    const[tableView,setTableView]=useState(false);

const [showAvailableOnly, setShowAvailableOnly] = useState(false);

const handleFilterToggle = () => {
  setShowAvailableOnly(!showAvailableOnly);
};

 const filteredProducts = showAvailableOnly
    ? products.filter(product => product.minimum_selling_quantity > 100)
    : products;
 
    const handletoggle=()=>{
        setTableView(!tableView);
    }
   
    return (
        <div>
          <Helmet>
            <title>All Products | PrimeGo</title>
          </Helmet>

        <div className='flex gap-3'>

            <div>
            <button
  onClick={handleFilterToggle}
  className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
  {showAvailableOnly ? 'Show All Products' : 'Show Available Products'}
</button>
          </div>


          <div>
               <label className="flex items-center gap-2 cursor-pointer">
        <span>Card View</span>
        <input type="checkbox" checked={tableView} onChange={handletoggle} className="toggle" />
        <span>Table View</span>
      </label>
          </div>
        </div>
      {tableView?(
 <div className="overflow-x-auto p-2">
      <table className="table-fixed w-full text-sm md:text-base">
        <thead>
          <tr className="bg-amber-200 text-center">
            <th className="hidden md:table-cell">Image</th>
            <th className="text-blue-800 font-bold md:text-2xl text-xl">Name</th>
            <th className="hidden md:table-cell text-cyan-800 md:text-2xl text-xl">Brand Name</th>
            <th className="text-amber-800 md:text-2xl text-xl">rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id} className=" text-center">
              <td className="hidden md:table-cell px-2 py-2">
                <img src={product.price} alt="" className="w-60 h-40 object-cover rounded-xl mx-auto shadow-2xl"/>
              </td>
              <td className="text-blue-800 font-bold md:text-2xl  px-2 py-2">{product.name}</td>
              <td className="hidden md:table-cell md:text-xl text-cyan-800 px-2 py-2">{product.brand}</td>
              <td className="text-amber-800 md:text-xl px-2 py-2">{product.rating}</td>
              <td className="px-2 py-2">
               <Link to={`/updatedProduct/${product._id}`}> <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
                         Update Product
                       </button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
):(



<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {filteredProducts.map((product) => (
    <div  key={product._id} className='rounded-lg shadow-lg'>
    <div key={product._id}className=" p-4 flex items-center gap-3">
      <img src={product.photo} alt="" className="w-40 h-40 object-cover rounded-md mb-4 "/>
      <div>
        <h2 className="text-xl font-bold text-blue-800 mb-2">{product.name}</h2>
      <p className="text-cyan-800 mb-1">Brand: {product.brand}</p>
      <p className="text-amber-800 mb-3">Rating: {product.rating}</p>
      </div>
      
    </div>

     <Link to={`/updatedProduct/${product._id}`}> <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
               Update Product
             </button></Link>
    </div>
    
  ))}
 
</div>)
}



           

        </div>
    );
};

export default AllProduct;