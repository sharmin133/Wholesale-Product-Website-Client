import React from 'react';
import { motion } from 'framer-motion';

const paymentImages = [
  {
    src: '/Allimage/Bkash-Logo.jpg',
    alt: 'Payment method Bkash',
  },
  {
    src: '/Allimage/dutch-bangla-rocket.png',
    alt: 'Payment method Dutch Bangla Rocket',
  },
  {
    src: '/Allimage/Nagad-Logo.webp',
    alt: 'Payment method Nagad',
  },
  {
    src: '/Allimage/American-Express-Logo-Download-Free-PNG.png',
    alt: 'Payment method American Express',
  },
  {
    src: '/Allimage/Visa_Logo.png',
    alt: 'Payment method Visa',
  },
];

const TopItems = () => {
  return (
    <div className="bg-base-100 py-10">
      <h2 className="text-3xl md:text-5xl text-center font-bold text-blue-800 mb-8" >
        Payment Methods
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4 md:px-10">
        {paymentImages.map((item, index) => (
          <div
            key={index}
            className="border border-blue-300 rounded-xl p-3 shadow-md hover:shadow-xl bg-white"
          >
            <motion.img
              src={item.src}
              alt={item.alt}
              animate={{ scale: [1, 1.05, 1] }}
              whileHover={{ scale: 1.2 }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 2,
                delay: index * 0.3,
                type: 'spring',
                stiffness: 150,
                damping: 8,
              }}
              className="w-full h-28 object-contain mx-auto cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopItems;

