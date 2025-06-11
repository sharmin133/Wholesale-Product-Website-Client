import React from 'react';

import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const AllProduct = () => {
    const products=useLoaderData();
    // const {user}=use(AuthContext)
    return (
        <div>
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
          {products.map((product, index) => (
            <tr key={index} className=" text-center">
              <td className="hidden md:table-cell px-2 py-2">
                <img
                  src={product.price}
                  alt=""
                  className="w-60 h-40 object-cover rounded-xl mx-auto shadow-2xl"
                />
              </td>
              <td className="text-blue-800 font-bold md:text-2xl  px-2 py-2">{product.name}</td>
              <td className="hidden md:table-cell md:text-xl text-cyan-800 px-2 py-2">{product.brand}</td>
              <td className="text-amber-800 md:text-xl px-2 py-2">{product.rating}</td>
              <td className="px-2 py-2">
                <button className="btn btn-sm  md:btn-lg btn-primary" >Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

           

        </div>
    );
};

export default AllProduct;