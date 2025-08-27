import React, { useEffect } from 'react';
import Categories from './Categories';
import AutoPlay from './Autoplay/Autoplay';
import BannerDiscount from './bannerDsicount/BannerDiscount';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import TopItems from './TopItems/TopItems';
import SuccessStory from '../assets/SucessStory';
import Contact from './contact/Contact';

const Home = () => {
  useEffect(() => {
    document.title = "Home | PrimeGo";
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      

        <div><AutoPlay /></div>
        <div><Categories /></div>
      <div><BannerDiscount /></div>

      <div className="  bg-emerald-200 px-16 py-12">
        <Zoom triggerOnce>
          <h2 className="text-3xl md:text-5xl text-center font-bold text-emerald-700 pb-8">
            Know Before You Nest
          </h2>

          <div className="collapse collapse-arrow bg-white border border-gray-300 dark:border-gray-600 rounded-md mb-2">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold text-2xl text-gray-800">How do I create an account?</div>
  <div className="collapse-content text-amber-500">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>

<div className="collapse collapse-arrow bg-white border border-gray-300 dark:border-gray-600 rounded-md mb-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-2xl text-gray-800">Do I need to be logged in to post?</div>
  <div className="collapse-content text-amber-500">
    Yes, you must be logged in to create a post. This helps ensure that all interactions are secure and tied to a real user.
  </div>
</div>

<div className="collapse collapse-arrow bg-white border border-gray-300 dark:border-gray-600 rounded-md mb-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-2xl text-gray-800">Can I update my post later?</div>
  <div className="collapse-content text-amber-500">
    Yes, you can easily update your post at any time. Just log into your account, go to the “All Product” section, select the post you want to update, and click the “Update” button. Make your changes and save — your post will be updated instantly.
  </div>
</div>

<div className="collapse collapse-arrow bg-white border border-gray-300 dark:border-gray-600 rounded-md">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-2xl text-gray-800">Can I delete my post if I no longer need it?</div>
  <div className="collapse-content text-amber-500">
    Absolutely. If you no longer need the post, go to your "My Product" section and click the "Delete" button on the post you want to remove.
  </div>
</div>

        </Zoom>
      </div>

    
        <TopItems />
        <SuccessStory />
        <Contact></Contact>
    
      
    </div>
  );
};

export default Home;
