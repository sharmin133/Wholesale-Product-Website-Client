import React from 'react';

const BannerDiscount = () => {
    return (
       
        <div className="relative w-full h-[500px] md:h-[600px]">
      {/* Background Image */}
      <img 
        src="/Allimage/banner-2.jpg"
        className="w-full h-full object-cover shadow-lg rounded-2xl "
        alt="Banner"
      />

      {/* Overlay */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>

      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
        <div className="flex flex-col items-center">
            <p className='text-red-400'>Special Offer in Register</p>
          <h2 className="text-2xl md:text-6xl text-orange-500 font-bold mb-4">
           Buy 1 Get 2 Free
          </h2>
          <p className="md:text-2xl font-medium text-gray-600 ">
           It is long established fact that reader will distracted
by the readable content of page.
          </p>
        </div>
      </div>
    </div>
      
    );
};

export default BannerDiscount;