import React, { useEffect } from 'react';
import Categories from './Categories';
import AutoPlay from './Autoplay/Autoplay';
import BannerDiscount from './bannerDsicount/BannerDiscount';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import TopItems from './TopItems/TopItems';
import SuccessStory from '../assets/SucessStory';

const Home = () => {
  useEffect(() => {
    document.title = "Home | PrimeGo";
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      <Slide direction="down">
        <div><AutoPlay /></div>
      </Slide>

      <Fade cascade damping={0.2}>
        <div><Categories /></div>
      </Fade>

      <div><BannerDiscount /></div>

      <div className="  bg-white dark:bg-gray-800  p-6">
        <Zoom triggerOnce>
          <h2 className="text-3xl md:text-5xl text-center font-bold text-emerald-500 dark:text-emerald-700 p-4">
            Know Before You Nest
          </h2>

          <div className="collapse collapse-arrow bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">How do I create an account?</div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Do I need to be logged in to post ?</div>
            <div className="collapse-content text-sm">
              Yes, you must be logged in to create a post. This helps ensure that all interactions are secure and tied to a real user.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Can I update my post later?</div>
            <div className="collapse-content text-sm">
              Yes, you can easily update your post at any time. Just log into your account, go to the “All Product” section, select the post you want to update, and click the “Update” button. Make your changes and save — your post will be updated instantly.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Can I delete my post if I no longer need it?</div>
            <div className="collapse-content text-sm">
              Absolutely. If you no longer need the post, go to your "My Product" section and click the "Delete" button on the post you want to remove.
            </div>
          </div>
        </Zoom>
      </div>

      <Fade direction="up" cascade>
        <TopItems />
      </Fade>

      <div className="my-10">
        <SuccessStory />
      </div>
      
    </div>
  );
};

export default Home;
