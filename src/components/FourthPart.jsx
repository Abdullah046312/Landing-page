import React from 'react';
import Container from './Container';
import Slider from "react-slick";
import images8 from "../assets/images8.png";
import images9 from "../assets/images9.png";
import images10 from "../assets/images10.png";
import images11 from "../assets/images11.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; // Import arrow icons from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div 
      className="slick-prev custom-arrow" 
      onClick={onClick} 
      style={{ position: 'absolute', left: '10px', zIndex: 10, cursor: 'pointer' }}
    >
      <BsArrowLeft size={30} color="#183835" />
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div 
      className="slick-next custom-arrow" 
      onClick={onClick} 
      style={{ position: 'absolute', right: '10px', zIndex: 10, cursor: 'pointer' }}
    >
      <BsArrowRight size={30} color="#183835" />
    </div>
  );
};

const FourthPart = () => {
  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Infinite looping
    speed: 500,  // Speed of transition
    slidesToShow: 4,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll at once
    autoplay: true,  // Autoplay carousel
    autoplaySpeed: 3000,  // Speed of autoplay
    prevArrow: <CustomPrevArrow />,  // Custom previous arrow
    nextArrow: <CustomNextArrow />,  // Custom next arrow
    responsive: [
      {
        breakpoint: 1024, // For tablets and larger screens
        settings: {
          slidesToShow: 3,  // 3 slides at a time on smaller screens
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,  // 1 slide at a time on mobile
          dots: false, // Optional: remove dots on mobile
        },
      },
    ],
  };

  return (
    <section className='py-20 bg-[#E1E1E1]'>
      <Container>
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-[#2B4846] text-[32px] sm:text-[40px] lg:text-[48px] font-Red_Hat font-semibold">
            What People Say About Us
          </h2>
        </div>

        {/* Slick Slider */}
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img src={images8} alt="Testimonial 1" className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg" />
              <p className="mt-4 text-center text-[16px] sm:text-[18px] text-[#183835] font-medium">"Amazing service and properties!"</p>
              <p className="text-center text-[14px] text-[#72718F] font-light">- John Doe</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img src={images9} alt="Testimonial 2" className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg" />
              <p className="mt-4 text-center text-[16px] sm:text-[18px] text-[#183835] font-medium">"A great place to find your dream home!"</p>
              <p className="text-center text-[14px] text-[#72718F] font-light">- Jane Smith</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img src={images10} alt="Testimonial 3" className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg" />
              <p className="mt-4 text-center text-[16px] sm:text-[18px] text-[#183835] font-medium">"Exceptional customer service!"</p>
              <p className="text-center text-[14px] text-[#72718F] font-light">- Sarah Johnson</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img src={images11} alt="Testimonial 4" className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg" />
              <p className="mt-4 text-center text-[16px] sm:text-[18px] text-[#183835] font-medium">"I highly recommend their services!"</p>
              <p className="text-center text-[14px] text-[#72718F] font-light">- Mike Brown</p>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default FourthPart;
