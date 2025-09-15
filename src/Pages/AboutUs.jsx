import React from 'react';
import { FaBoxes, FaHandHoldingUsd, FaTruckLoading } from 'react-icons/fa'; // fa6 na, just 'fa'


const AboutUs = () => {
  return (
    <div className='bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 min-h-screen'>
      <div className="max-w-6xl mx-auto p-6 space-y-12">

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-amber-500">
          About PrimeGo
        </h1>

        {/* Intro paragraph */}
        <p className="text-center text-emerald-700 max-w-3xl mx-auto">
          PrimeGo is your ultimate destination for reliable wholesale shopping. Whether you’re sourcing for your retail store, organization, or personal bulk needs — we deliver quality products at competitive prices, across diverse categories like beauty, electronics, home, and more.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="p-6 bg-amber-100 border-2 border-amber-500 rounded-lg shadow-md hover:shadow-xl transition">
            <FaBoxes className="text-4xl mx-auto text-amber-500 mb-3" />
            <h3 className="font-semibold text-lg text-emerald-700 mb-2">Massive Product Range</h3>
            <p className="text-emerald-600">
              Explore thousands of quality items across top categories — all under one wholesale roof.
            </p>
          </div>

          <div className="p-6 bg-emerald-100 border-2 border-emerald-500 rounded-lg shadow-md hover:shadow-xl transition">
            <FaHandHoldingUsd className="text-4xl mx-auto text-emerald-500 mb-3" />
            <h3 className="font-semibold text-lg text-amber-700 mb-2">Affordable Pricing</h3>
            <p className="text-amber-600">
              Get unbeatable deals for bulk orders — we prioritize affordability without compromising on quality.
            </p>
          </div>

          <div className="p-6 bg-amber-100 border-2 border-amber-500 rounded-lg shadow-md hover:shadow-xl transition">
            <FaTruckLoading className="text-4xl mx-auto text-amber-500 mb-3" />
            <h3 className="font-semibold text-lg text-emerald-700 mb-2">Fast & Secure Delivery</h3>
            <p className="text-emerald-600">
              Enjoy fast and reliable shipping nationwide — making your wholesale journey smooth and secure.
            </p>
          </div>

        </div>

        {/* Mission Section */}
        <div className="bg-emerald-100 border-2 border-emerald-500 p-6 rounded-xl shadow-md mt-10">
          <h2 className="text-2xl font-bold text-amber-500 mb-3 text-center">
            Our Mission
          </h2>
          <p className="text-emerald-700 text-center">
            PrimeGo is committed to empowering businesses and consumers with accessible, affordable, and efficient wholesale solutions. We strive to simplify bulk buying while ensuring quality, transparency, and trust.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
