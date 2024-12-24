import React from 'react';
import Container from './Container';
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import images2 from "../assets/images2.png";
import images3 from "../assets/images3.png";
import images4 from "../assets/images4.png";
import images5 from "../assets/images5.png";

const FirstPart = () => {
  return (
    <section className='py-10 bg-[#E1E1E1]'>
      <Container>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full gap-10 justify-between">
          <div className="w-full lg:w-[40%]">
            <h2 className='text-[#2B4846] text-[38px] font-Red_Hat font-semibold'>
              We are The Best & Most Trusted Real Estate Agent
            </h2>
          </div>

          <div className="w-full lg:w-[30%] flex justify-center items-center mt-4 lg:mt-0">
            <button className='py-3 px-5 flex items-center bg-[#FFFF] rounded-full gap-3 text-[20px] transition duration-300 hover:bg-[#183835] hover:text-[#FFF]'>
              <BsArrowUpRightSquareFill />
              Browse House Now
            </button>
          </div>
        </div>

   {/* Stats Section */}
<div className="flex flex-col lg:flex-row justify-between mt-10">
  <div className="group w-full lg:w-[32%] bg-[#FFFF] py-8 px-10 text-center rounded-full mb-4 lg:mb-0 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#183835] hover:text-white cursor-pointer">
    <h2 className='text-[48px] text-[#183835] font-Red_Hat font-semibold group-hover:text-white transition-all duration-300'>
      2.3 K+
    </h2>
    <p className='text-[24px] text-[#183835] font-Red_Hat font-medium group-hover:text-white transition-all duration-300'>
      Local Premium property
    </p>
  </div>

  <div className="group w-full lg:w-[32%] bg-[#FFFF] py-8 px-10 text-center rounded-full mb-4 lg:mb-0 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#183835] hover:text-white cursor-pointer">
    <h2 className='text-[48px] text-[#183835] font-Red_Hat font-semibold group-hover:text-white transition-all duration-300'>
      75+
    </h2>
    <p className='text-[24px] text-[#183835] font-Red_Hat font-medium group-hover:text-white transition-all duration-300'>
      Awards winning
    </p>
  </div>

  <div className="group w-full lg:w-[32%] bg-[#FFFF] py-8 px-10 text-center rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#183835] hover:text-white cursor-pointer">
    <h2 className='text-[48px] text-[#183835] font-Red_Hat font-semibold group-hover:text-white transition-all duration-300'>
      2.3 K+
    </h2>
    <p className='text-[24px] text-[#183835] font-Red_Hat font-medium group-hover:text-white transition-all duration-300'>
      Local Premium property
    </p>
  </div>
</div>


        {/* Explore Section */}
        <div className="flex flex-col lg:flex-row w-full gap-10 justify-between mt-20">
          <div className="w-full lg:w-[40%]">
            <h2 className='text-[#2B4846] text-[38px] font-Red_Hat font-semibold'>
            Explore The Closest 
            Habitation to Your Location
            </h2>
          </div>

          <div className="w-full lg:w-[30%] flex justify-center items-center mt-4 lg:mt-0">
            <button className='py-3 px-5 flex items-center bg-[#FFFF] rounded-full gap-3 text-[20px] transition duration-300 hover:bg-[#183835] hover:text-[#FFF]'>
              <BsArrowUpRightSquareFill />
              Browse All House
            </button>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {[images2, images3, images4, images5].map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  src={image}
                  alt={`Property ${index + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-5 rounded-t-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg text-[#1A0B5B] font-semibold mt-4 mb-2 transition-colors hover:text-[#183835]">
                  Rutherbook
                </h4>
                <div className="flex gap-2 items-center">
                  <CiLocationOn className='text-[20px]' />
                  <p className="text-[18px] text-[#72718F] mb-4">
                    Ngurag Rai Street Denpaser, 80165
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-[#151875] font-Josefin_Sans font-medium">
                  <div className="flex items-center gap-2">
                    <span className='text-[18px]'>$1,050,00</span>
                  </div>
                  <div className="flex items-center gap-2 underline cursor-pointer">
                    <span className='text-[18px]'>View Details</span>
                    <FaArrowRightLong className="text-[#21A2EA] text-[18px]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default FirstPart;
