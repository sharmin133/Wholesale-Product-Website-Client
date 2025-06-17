import React from 'react';
import { Link } from 'react-router';


const Categories = () => {



    return (
        <div>
            <h2 className='text-5xl text-center'>All Categories</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>




              <Link to='/products/category/Electronics & Gadgets'>
            <div  className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
           <img
           src="/Allimage/electronics.jpg"
          alt=""
       className="rounded-xl" />
       </figure>
        <div className="card-body items-center text-center">
    <h2 className="card-title">Electronics & Gadgets</h2>
  </div>
</div>
</Link>



 <Link to='/products/category/Home & Kitchen Appliances'>
 <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Home & Kitchen Appliances</h2>
  </div>
</div>
</Link>


 <Link to='/products/category/Fashion & Apparel'>
 <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Fashion & Apparel</h2>
  </div>
</div>
</Link>


 <Link to='/products/category/Industrial Machinery & Tools'>
 <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> Industrial Machinery & Tools</h2>
  </div>
</div>
</Link>




 <Link to='/products/category/Health & Beauty'>
 <div className="card bg-base-100 w-96 shadow-sm">

  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Health & Beauty</h2>
  </div>
</div>
</Link>



 <Link to='/products/category/Automotive Parts & Accessories'>
 <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Automotive Parts & Accessories</h2>
  </div>
</div>
</Link>



 <Link to='/products/category/Office Supplies & Stationery'>
 <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> Office Supplies & Stationery</h2>
  </div>
</div>
</Link>



</div>

        </div>
    );
};

export default Categories;