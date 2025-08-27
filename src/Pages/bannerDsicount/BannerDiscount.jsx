import React from 'react';
import { motion } from 'framer-motion';

const BannerDiscount = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[550px]">
      {/* Background Image */}
      <img 
        src="/Allimage/banner-2.jpg"
        className="w-full h-full object-cover shadow-lg"
        alt="Banner"
      />

      {/* Overlay */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>

      {/* Centered Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.p 
            className='text-white text-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Special Offer in Register
          </motion.p>

          <motion.h2
            className="text-2xl md:text-6xl text-orange-500 font-bold"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, type: 'spring', stiffness: 120 }}
          >
            Buy 1 Get 2 Free
          </motion.h2>

          <motion.p
            className="md:text-2xl font-medium text-emerald-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            It is long established fact that reader will distracted by the readable content of page.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default BannerDiscount;
