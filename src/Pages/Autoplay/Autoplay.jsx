import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";

const AutoPlay = () => {

  
    return (
      <div className="carousel w-full md:h-[700px] h-[300px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
    
     
       src="/Allimage/ban-1.jpg"
      className="w-full" />

<div className="absolute inset-0 bg-black opacity-20"></div>


  <div className="absolute top-3 md:top-10 left-1/2 transform -translate-x-1/2 text-center p-4 text-white">

  
    <div className="md:text-6xl text-xl flex justify-center items-center gap-2 md:p-4">
      <p className=" text-green-500 font-bold flex gap-3"><span>Welcome</span> <span className="hidden md:block">to</span> </p>
      <p className="md:text-6xl text-xl p-2">
        <span className='font-bold text-pink-600'>Prime</span>
        <span className='font-medium text-blue-700'>Go</span>
      </p>
    </div>

    <p className=" md:text-3xl text-gray-200 italic">
      Bulk Buying. Better Pricing. <span className="text-teal-200 font-semibold">No Hassle</span>
  <span className="inline-block text-yellow-200 font-semibold">
    <Typewriter
      words={['Fully Trusted.']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={1000}
  
    />
  </span>
    </p>

   
    <h2 className="text-xl md:text-4xl font-bold md:mb-4 md:pt-12 text-violet-700">
      Find Your Product
    </h2>
    <div className="mt-4 flex justify-center">
      <input
        type="text"
        placeholder="Search by Name, preferences, or budget..."
        className="w-2/3 md:px-4 md:py-2 rounded-lg border-2 border-teal-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>
  </div>


    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
    src="/Allimage/2108.i305.009.S.m005.c13.realistic sandalwood horizontal poster.jpg"
    
    
      className="w-full" />

      <div className="absolute inset-0 bg-black opacity-40"></div>

<div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center p-4 text-white">
<div className="flex flex-col justify-between items-center">
  <h2 className=" text-2xl md:text-6xl text-yellow-400 font-bold md:p-4 ">We Source. You Save.</h2>
<p className="md:text-2xl md:pt-4  font-medium">Discover a smarter way to buy in bulk. PrimeGo connects trusted suppliers with smart buyers—no middlemen, no hassle.</p>
</div>

</div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="/Allimage/32872.jpg"
      className="w-full" />

      <div className="absolute inset-0 bg-black opacity-40"></div>

<div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center p-4 text-white">


<div className="flex flex-col justify-between items-center">
  <h2 className=" text-2xl md:text-6xl text-red-400 font-bold md:p-4 ">Where Restocking Meets Reliability.</h2>
<p className="md:text-2xl md:pt-4  font-medium"> Manage your inventory effortlessly with our reliable bulk buying platform designed to keep your shelves full and profits growing.</p>
</div>

</div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="/Allimage/7728475.jpg"
      className="w-full" />

      <div className="absolute inset-0 bg-black opacity-20"></div>

<div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center p-4 text-white">



</div>


    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default AutoPlay;