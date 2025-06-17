import React from 'react';

const TopItems = () => {
  const paymentImages = [
    '/Allimage/Bkash-Logo.jpg',
    '/Allimage/dutch-bangla-rocket.png',
    '/Allimage/Nagad-Logo.webp',
    '/Allimage/American-Express-Logo-Download-Free-PNG.png',
    '/Allimage/Visa_Logo.png',
  ];

  return (
    <div className="bg-base-100 py-10">
      <h2 className="text-3xl md:text-5xl text-center font-bold text-blue-800 mb-8">
        Payment Methods
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4 md:px-10">
        {paymentImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Payment method ${index + 1}`}
            className="w-full h-28 object-contain mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default TopItems;
