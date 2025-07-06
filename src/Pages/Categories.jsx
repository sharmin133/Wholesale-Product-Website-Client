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
    <div className=" bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500 pb-6">
      <h2
        className="text-3xl md:text-5xl text-center font-bold
        text-emerald-500 dark:text-emerald-700
        mt-10 mb-6">Explore Our Categories </h2>

      <div className="lg:ml-20">
      

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-5 place-items-center px-4">
          {visibleCategories.map((cat, idx) => (
            <Link to={cat.path} key={idx} className="w-full max-w-sm">
              <div className="card w-full shadow-sm bg-white dark:bg-gray-800 rounded-lg transition-colors duration-500 hover:shadow-lg">
                <figure className="px-10 pt-10">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="rounded-xl h-44 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-gray-900 dark:text-gray-100 font-semibold">
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
              className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl transition"
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
