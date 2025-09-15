import React from 'react';
import { motion } from 'framer-motion';

const paymentImages = [
  { src: '/Allimage/Bkash-Logo.jpg', alt: 'Payment method Bkash' },
  { src: '/Allimage/dutch-bangla-rocket.png', alt: 'Payment method Dutch Bangla Rocket' },
  { src: '/Allimage/Nagad-Logo.webp', alt: 'Payment method Nagad' },
  { src: '/Allimage/American-Express-Logo-Download-Free-PNG.png', alt: 'Payment method American Express' },
  { src: '/Allimage/Visa_Logo.png', alt: 'Payment method Visa' },
];

const TopItems = () => {
  return (
    <div className="py-16 px-16 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300">

      <h2 className="text-3xl pb-8 md:text-5xl text-center font-bold text-emerald-700">
        Payment Methods
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4 md:px-10">
        {paymentImages.map((item, index) => (
          <motion.div
            key={index}
            className="border border-blue-300 rounded-xl p-3 shadow-md hover:shadow-xl bg-gray-200"
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}   
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: index * 0.3,
            }}
          >
            <motion.img
              src={item.src}
              alt={item.alt}
              whileHover={{ scale: 1.2 }}
              className="w-full h-28 object-contain mx-auto cursor-pointer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopItems;
