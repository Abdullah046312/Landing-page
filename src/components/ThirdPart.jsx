import React from 'react';
import Container from './Container';
import images7 from "../assets/images7.png";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const ThirdPart = () => {
  return (
    <section className="py-8 sm:py-16 bg-[#E1E1E1]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start ">
          
          {/* Image Section */}
          <div className="w-full lg:w-[50%] mb-8 lg:mb-0">
            <img src={images7} alt="Property Image" className="w-full h-auto object-cover rounded-lg" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-[45%] text-center lg:text-left lg:mt-20">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#2B4846] font-Red_Hat font-semibold mt-4 lg:mt-0">
              Take Control of Your Property Easy & Hassle-Free
            </h2>
            <p className='text-[16px] sm:text-[18px] lg:text-[20px] text-[#2B4846] opacity-80 font-Red_Hat font-normal mt-4'>
              Need a best favorite place with family right now? Here’s the best selection for you! Amazing properties with the most unique offerings.
            </p>

            {/* Button Section */}
            <div className="flex justify-center mt-5">
              <button className="py-3 px-6 flex items-center justify-center bg-[#FFFF] text-[#183835] rounded-full gap-3 text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#183835] hover:text-white transition duration-300 ease-in-out">
                <BsArrowUpRightSquareFill />
                Learn More
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ThirdPart;
