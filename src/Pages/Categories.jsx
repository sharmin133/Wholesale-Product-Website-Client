import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.title = "Categories | PrimeGo";
    AOS.init({ duration: 1000, once: true });
  }, []);

  // সব category ডেটা
  const categories = [
    {
      name: "Electronics & Gadgets",
      image: "/Allimage/electronics.jpg",
      link: "/products/category/Electronics & Gadgets",
    },
    {
      name: "Home & Kitchen Appliances",
      image: "/Allimage/Home & Kitchen Appliances Products.jpg",
      link: "/products/category/Home & Kitchen Appliances",
    },
    {
      name: "Fashion & Apparel",
      image: "/Allimage/Fashion & Apparel Products.jpg",
      link: "/products/category/Fashion & Apparel",
    },
    {
      name: "Industrial Machinery & Tools",
      image: "/Allimage/Industrial Machinery & Tools Products.jpg",
      link: "/products/category/Industrial Machinery & Tools",
    },
    {
      name: "Health & Beauty",
      image: "/Allimage/Health & Beauty.jpg",
      link: "/products/category/Health & Beauty",
    },
    {
      name: "Automotive Parts & Accessories",
      image: "/Allimage/Automotive Parts.jpg",
      link: "/products/category/Automotive Parts & Accessories",
    },
    {
      name: "Office Supplies & Stationery",
      image: "/Allimage/Office Supplies & Stationery.jpg",
      link: "/products/category/Office Supplies & Stationery",
    },
  ];

 //show 1st 6 card
  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
<div className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 pt-18 p-12 transition-colors duration-500">
  <h2 className="text-3xl md:text-5xl text-center font-bold text-emerald-500 dark:text-emerald-700 pb-8">
    Explore Our Categories
  </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-4">
        {visibleCategories.map((cat, index) => (
          <div key={cat.name} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
            <Link to={cat.link} className="group w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-2xl flex items-end p-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                    {cat.name}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {!showAll && categories.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-md hover:bg-emerald-600 transition-colors"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
