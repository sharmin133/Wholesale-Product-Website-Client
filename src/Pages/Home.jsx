import React from 'react';
import Categories from './Categories';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import AutoPlay from './Autoplay/Autoplay';
import BannerDiscount from './bannerDsicount/BannerDiscount';
import TopItems from './TopItems/TopItems';

const Home = () => {
    return (
        <div>
          {/* <div><AutoPlay></AutoPlay></div> */}
         <div> <Categories></Categories></div>

         <div> <BannerDiscount></BannerDiscount> </div>

         <div><TopItems></TopItems> </div>


          <div className=' mx-10 mt-10 shadow-sm'>
            <h2 className=' text-3xl  md:text-5xl text-center font-bold text-blue-800 p-4'>Know Before You Nest </h2>
            <p className=' text-2xl text-center text-yellow-500'>Common questions and helpful answers for new users.</p>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Do I need to be logged in to post ?</div>
  <div className="collapse-content text-sm">Yes, you must be logged in to create a post. This helps ensure that all interactions are secure and tied to a real user.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold"> Can I update my post later?</div>
  <div className="collapse-content text-sm">Yes, you can easily update your post at any time. Just log into your account, go to the “All Product” section, select the post you want to update, and click the “Update” button. Make your changes and save — your post will be updated instantly.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Can I delete my post if I no longer need it?</div>
  <div className="collapse-content text-sm">Absolutely. If you no longer need the post, go to your "My Product" section and click the "Delete" button on the post you want to remove.</div>
</div>

            </div>


 <div className='mt-10 ml-5 shadow-sm'>
 <h2 className='text-3xl md:text-5xl text-center font-bold text-blue-800 p-4  '>Success Story </h2>

<div className='grid grid-cols-1 md:grid-cols-3 mt-10 md:ml-15 gap-3'>

    <div className="card w-96 shadow-sm rounded-2xl border-amber-300 border-2 bg-pink-200">
  
  <div className="card-body items-center text-center">
    <h2 className='font-bold text-2xl text-amber-500'>Sumaiya Rahman</h2>
    <p ><BiSolidQuoteAltLeft size={30} fill='green' /></p>
    <p className='text-xl'>“The platform gives me access to trusted wholesalers without any hassle. It’s my go-to for sourcing quality products.”</p>
    
  </div>
</div>


<div className="card w-96 shadow-sm rounded-2xl border-amber-300 border-2 bg-pink-200">
  
  <div className="card-body items-center text-center">
    <h2 className='font-bold text-2xl text-amber-500'>Simi Jannat</h2>
   
    <p ><BiSolidQuoteAltLeft size={30} fill='green' /></p>
    <p className='text-xl'>“Managing my retail shop has become much easier since I started ordering here. Everything is so organized and efficient.”</p>
    
  </div>
</div>



<div className="card w-96 shadow-sm rounded-2xl border-amber-300 border-2 bg-pink-200">
  
  <div className="card-body items-center text-center">
    <h2 className='font-bold text-2xl text-amber-500'>Farhan Rahman</h2>
    <p ><BiSolidQuoteAltLeft size={30} fill='green' /></p>
    <p className='text-xl'>“Thanks to PrimeGo, I was able to stock my shop quickly and at a great price. Their product variety and easy ordering system make all the difference.”</p>
    
  </div>
</div>
</div>



            </div>


        </div>


    );
};

export default Home;