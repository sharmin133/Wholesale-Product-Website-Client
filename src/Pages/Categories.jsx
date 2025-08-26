import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';


const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.title = "Categories | PrimeGo";
  }, []);

  const categories = [
    {
      title: "Electronics & Gadgets",
      image: "/Allimage/electronics.jpg",
      path: "/products/category/Electronics & Gadgets",
    },
    {
      title: "Home & Kitchen Appliances",
      image: "/Allimage/Home & Kitchen Appliances Products.jpg",
      path: "/products/category/Home & Kitchen Appliances",
    },
    {
      title: "Fashion & Apparel",
      image: "/Allimage/Fashion & Apparel Products.jpg",
      path: "/products/category/Fashion & Apparel",
    },
    {
      title: "Industrial Machinery & Tools",
      image: "/Allimage/Industrial Machinery & Tools Products.jpg",
      path: "/products/category/Industrial Machinery & Tools",
    },
    {
      title: "Health & Beauty",
      image: "/Allimage/Health & Beauty.jpg",
      path: "/products/category/Health & Beauty",
    },
    {
      title: "Automotive Parts & Accessories",
      image: "/Allimage/Automotive Parts.jpg",
      path: "/products/category/Automotive Parts & Accessories",
    },
    {
      title: "Office Supplies & Stationery",
      image: "/Allimage/Office Supplies & Stationery.jpg",
      path: "/products/category/Office Supplies & Stationery",
    },
  ];

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className=" bg-emerald-50 p-12 transition-colors duration-500 ">
      <h2
        className="text-3xl md:text-5xl text-center font-bold
        text-emerald-500 dark:text-emerald-700 pb-8
         ">Explore Our Categories </h2>

      <div className="">
      

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-4">
  {visibleCategories.map((cat, idx) => (
    <Link key={idx} to={cat.path} className="group w-full max-w-lg">
      <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl">
        <img
          src={cat.image}
          alt={cat.title}
          className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-2xl flex items-end p-4">
          <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            {cat.title}
          </h2>
        </div>
      </div>
    </Link>
  ))}
</div>

        {!showAll && categories.length > 6 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-emerald-700 font-bold hover:bg-emerald-900 text-white rounded-xl transition"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
