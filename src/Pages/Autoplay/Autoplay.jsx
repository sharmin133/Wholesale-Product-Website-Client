import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AutoPlay = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  const slides = [
    "https://i.ibb.co/dwTz6cjg/Brown-Simple-Minimalist-Beauty-Product-Banner.png",
    "https://i.ibb.co/S7W3vhWf/Brown-Photo-Centric-Holi-Festival-Sale-Website-banner.png",
    "https://i.ibb.co/hnhtnCH/Pink-and-Brown-Watercolor-Splotch-Monogram-Personal-Envelope-1.jpg",
    "https://i.ibb.co/ksLQdwsJ/Grey-and-White-Minimalist-Beauty-Product-Facebook-Fundraiser-Cover-Photo.png",
  ];

  return (
    <div className="w-full h-[300px] md:h-[550px] relative">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] md:h-[550px] object-cover"
              data-aos="fade-up"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlay;
