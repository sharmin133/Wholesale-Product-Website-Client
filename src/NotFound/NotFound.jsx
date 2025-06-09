import Lottie from 'lottie-react';
import React from 'react';
import { useNavigate } from 'react-router';
// import notfound from '../assets/Lotties/notfound.json'
import notFound from '../../src/assets/lotties/error.json'

const NotFound = () => {
   

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (

        <div className='bg-gradient-to-r from-sky-50 to-violet-200'>

            
        <div className="flex flex-col items-center justify-center text-center py-8 px-6">
       <Lottie style={{width:'500px'}}  animationData={notFound} loop={true}> </Lottie>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">404 - Page Not Found</h2>
            <p className="text-lg sm:text-2xl font-medium text-gray-600 mb-6">Oops! The page you are looking for doesn't exist.</p>
            <button 
                className="text-xl sm:text-3xl bg-amber-500 font-bold rounded-3xl p-4 text-white hover:bg-amber-500 transition"
                onClick={handleGoHome}
            >
                Go back Home
            </button>
        </div>
        </div>
    );
};  

export default NotFound;
