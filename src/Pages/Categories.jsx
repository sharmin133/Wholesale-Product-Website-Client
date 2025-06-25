import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';


const Categories = () => {
  useEffect(() => {
    document.title = "Categories | PrimeGo";
  }, []);


    return (
        <div className='bg-blue-50'>
          <div className='lg:ml-20 ' >
          <motion.h2
  initial={{ x: -800, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.9, ease: 'easeOut' }}  
  className='text-3xl md:text-5xl text-center font-bold text-blue-800 p-4'
>
  All Categories
</motion.h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-5'>




              <Link to='/products/category/Electronics & Gadgets'>
            <div  className="card  w-96 shadow-sm bg-amber-50">
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
 <div className="card w-96 shadow-sm bg-amber-50">
  <figure className="px-10 pt-10">
    <img
      src="/Allimage/Home & Kitchen Appliances Products.jpg"
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Home & Kitchen Appliances</h2>
  </div>
</div>
</Link>


 <Link to='/products/category/Fashion & Apparel'>
 <div className="card w-96 shadow-sm bg-amber-50">
  <figure className="px-10 pt-10">
    <img
      src="/Allimage/Fashion & Apparel Products.jpg"
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Fashion & Apparel</h2>
  </div>
</div>
</Link>


 <Link to='/products/category/Industrial Machinery & Tools'>
 <div className="card  w-96 shadow-sm bg-amber-50">
  <figure className="px-10 pt-10">
    <img
      src="/Allimage/Industrial Machinery & Tools Products.jpg"
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> Industrial Machinery & Tools</h2>
  </div>
</div>
</Link>




 <Link to='/products/category/Health & Beauty'>
 <div className="card  w-96 shadow-sm bg-amber-50">

  <figure className="px-10 pt-10">
    <img
      src="/Allimage/Health & Beauty.jpg"
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Health & Beauty</h2>
  </div>
</div>
</Link>



 <Link to='/products/category/Automotive Parts & Accessories'>
 <div className="card  w-96 shadow-sm bg-amber-50">
  <figure className="px-10 pt-10">
    <img
      src="/Allimage/Automotive Parts.jpg"
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Automotive Parts & Accessories</h2>
  </div>
</div>
</Link>



 <Link to='/products/category/Office Supplies & Stationery'>
 <div className="card  w-96 shadow-sm bg-amber-50">
  <figure className="px-10 pt-10">
    <img
      src="/Allimage/Office Supplies & Stationery.jpg"
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Office Supplies & Stationery</h2>
  </div>
</div>
</Link>



</div>

        </div>
        </div>
    );
};

export default Categories;