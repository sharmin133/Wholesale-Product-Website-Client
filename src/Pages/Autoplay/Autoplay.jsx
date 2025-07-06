import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AutoPlay = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="carousel w-full h-[300px] md:h-[550px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
  <img src="/Allimage/ban-1.jpg" className="w-full object-cover" />

<div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

  <div
    className="absolute top-3 md:top-20 left-1/2 transform -translate-x-1/2 text-center px-4   text-white" >
    <h1
      className="text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg"
      data-aos="zoom-in"
    >
      <span className="text-pink-600">Prime</span>
      <span className="text-emerald-600 dark:text-emerald-600">Go</span>
    </h1>
    <p
      className="md:text-xl text-sm uppercase tracking-wider mb-2 text-emerald-300 dark:text-emerald-400 font-semibold drop-shadow"
      data-aos="fade-up"
    >
      One Marketplace. All Solutions.
    </p>
    <p
      className="text-gray-200 dark:text-gray-300 text-sm md:text-lg max-w-xl mx-auto drop-shadow"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Buy bulk with confidence. We bring you beauty, home, stationery, automation & more — at wholesale prices.
    </p>
    <p
      className="text-pink-400 font-semibold mt-3 drop-shadow"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <Typewriter
        words={['Fast. Trusted. Affordable.']}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={30}
        delaySpeed={1500}
      />
    </p>
  </div>

  <div className="absolute left-5 right-5 md:bottom-60 bottom-30 flex justify-between">
    <a
      href="#slide4"
      className="btn btn-circle bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-800"
    >
      ❮
    </a>
    <a
      href="#slide2"
      className="btn btn-circle bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-800"
    >
      ❯
    </a>
  </div>
</div>


      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src="/Allimage/cos2.jpg" className="w-full object-cover" />
        <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4
                        text-gray-900 dark:text-gray-100">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-emerald-500 dark:text-emerald-700" data-aos="fade-up">
            Streamline Your Supply Chain
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-xl max-w-xl" data-aos="zoom-in" data-aos-delay="200">
            Whether you're sourcing office goods or cosmetics, get everything delivered at scale with ease.
          </p>
        </div>

        <div className="absolute left-5 right-5 md:bottom-60 bottom-30 flex justify-between">
          <a href="#slide1" className="btn btn-circle bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-800">❮</a>
          <a href="#slide3" className="btn btn-circle bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-800">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src="/Allimage/32872.jpg" className="w-full object-cover" />
        <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4
                        text-gray-900 dark:text-gray-100">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-700" data-aos="fade-right">
            Quality You Can Rely On
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-xl mt-2" data-aos="fade-left" data-aos-delay="300">
            Our vetted partners ensure every item meets standards — no compromise.
          </p>
        </div>

        <div className="absolute left-5 right-5 md:bottom-60 bottom-30 flex justify-between">
          <a href="#slide2" className="btn btn-circle bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-800">❮</a>
          <a href="#slide4" className="btn btn-circle bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-800">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src="/Allimage/cos5.jpg" className="w-full object-cover" />
        <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4
                        text-gray-900 dark:text-gray-100">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-700" data-aos="zoom-in-down">
            The Bulk Buying Revolution
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-xl mt-2" data-aos="fade-up" data-aos-delay="200">
            Save more, buy smarter — and get everything in one cart.
          </p>
        </div>

        <div className="absolute left-5 right-5 md:bottom-60 bottom-30 flex justify-between">
          <a href="#slide3" className="btn btn-circle bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-800">❮</a>
          <a href="#slide1" className="btn btn-circle bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-800">❯</a>
        </div>
      </div>
    </div>
  );
};

export default AutoPlay;

