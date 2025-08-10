import React from 'react';
import { FaBoxes, FaHandHoldingUsd, FaTruckLoading } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 transition-colors duration-500 min-h-screen'>
  
      <div className="max-w-6xl mx-auto p-6 space-y-8 transition-colors duration-300">

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-800 dark:text-yellow-400">
          About PrimeGo
        </h1>

        {/* Intro paragraph */}
        <p className="text-blue-700 dark:text-yellow-200 text-center max-w-3xl mx-auto">
          PrimeGo is your ultimate destination for reliable wholesale shopping. Whether you’re sourcing for your retail store, organization, or personal bulk needs — we deliver quality products at competitive prices, across diverse categories like beauty, electronics, home, and more.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="p-6 bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-400 dark:border-yellow-600 rounded-lg shadow-md transition-colors duration-300">
            <FaBoxes className="text-4xl mx-auto text-yellow-500 dark:text-yellow-300 mb-2" />
            <h3 className="font-semibold text-lg text-blue-800 dark:text-yellow-300">Massive Product Range</h3>
            <p className="text-blue-700 dark:text-yellow-200">
              Explore thousands of quality items across top categories — all under one wholesale roof.
            </p>
          </div>

          <div className="p-6 bg-pink-100 dark:bg-pink-900 border-2 border-pink-400 dark:border-pink-600 rounded-lg shadow-md transition-colors duration-300">
            <FaHandHoldingUsd className="text-4xl mx-auto text-pink-500 dark:text-pink-300 mb-2" />
            <h3 className="font-semibold text-lg text-blue-800 dark:text-pink-300">Affordable Pricing</h3>
            <p className="text-blue-700 dark:text-pink-200">
              Get unbeatable deals for bulk orders — we prioritize affordability without compromising on quality.
            </p>
          </div>

          <div className="p-6 bg-blue-100 dark:bg-blue-800 border-2 border-blue-400 dark:border-blue-600 rounded-lg shadow-md transition-colors duration-300">
            <FaTruckLoading className="text-4xl mx-auto text-blue-600 dark:text-blue-300 mb-2" />
            <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-300">Fast & Secure Delivery</h3>
            <p className="text-blue-700 dark:text-blue-200">
              Enjoy fast and reliable shipping nationwide — making your wholesale journey smooth and secure.
            </p>
          </div>

        </div>

        {/* Mission section */}
        <div className="bg-gray-200 dark:bg-gray-900 border-2 border-blue-400 dark:border-yellow-400 p-6 rounded-xl shadow-md mt-10 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-yellow-300 mb-3 text-center">
            Our Mission
          </h2>
          <p className="text-blue-700 dark:text-yellow-200 text-center">
            PrimeGo is committed to empowering businesses and consumers with accessible, affordable, and efficient wholesale solutions. We strive to simplify bulk buying while ensuring quality, transparency, and trust.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
