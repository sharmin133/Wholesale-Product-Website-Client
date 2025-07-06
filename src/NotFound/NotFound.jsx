import Lottie from 'lottie-react';
import React from 'react';
import { useNavigate } from 'react-router';
import notFound from '../../src/assets/lotties/error.json';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-white dark:bg-gray-900
                    bg-gradient-to-r from-sky-50 to-violet-200 dark:from-gray-800 dark:to-gray-900
                    px-6 py-12">

      <div className="flex flex-col items-center justify-center text-center max-w-md">
        <Lottie style={{ width: '300px', maxWidth: '100%' }} animationData={notFound} loop={true} />

        <h2 className="text-3xl sm:text-4xl font-bold 
                       
                       text-emerald-500 dark:text-emerald-700">
          404 - Page Not Found
        </h2>

        <p className="text-lg sm:text-2xl font-medium 
                      text-gray-700 dark:text-gray-300 mb-6">
          Oops! The page you are looking for doesn't exist.
        </p>

        <button
          onClick={handleGoHome}
          className="text-xl sm:text-3xl font-bold rounded-3xl p-4
                     bg-pink-500 hover:bg-pink-600 text-white
                     transition-colors duration-300"
        >
          Go back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
