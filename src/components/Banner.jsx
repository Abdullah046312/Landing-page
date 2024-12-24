import React from 'react';

import images from "../assets/images.png";
import images1 from "../assets/images1.png";
import Container from './Container';
import { FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="bg-[#E1E1E1] py-10">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2 bg-[#DDF1E6] py-5 px-5 lg:px-10 rounded-3xl mb-10 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl xl:text-[80px] text-[#183835] font-Red_Hat font-semibold">
              Elevate Your Living Experience
            </h2>
            <p className="text-lg lg:text-[22px] text-[rgba(24,56,53,0.61)] font-normal font-Red_Hat mt-5">
              Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates,
              we curate the finest selections to match your distinct lifestyle.
            </p>
            <img className="w-full lg:w-[50%] pt-5 pb-5 " src={images1} alt="Banner Image" />
            <div className="relative mt-5">
              <input
                className="h-[50px] w-full lg:w-[500px] rounded-3xl pl-12 pr-5 outline-none"
                type="text"
                placeholder="Search city, region or address..."
              />
              {/* Search Icon */}
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#183835]">
                <FiSearch />
              </span>
              {/* Button */}
              <span className="py-2 px-5 rounded-[50px] absolute lg:top-[50%] lg:left-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#183835] text-[#FFF] font-NunSans font-semibold hover:bg-[#FF7628] hover:text-[#262626] transition duration-300 ease-in-out hidden lg:block">
  Browse House’s
</span>

            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-[45%]">
            <img src={images} alt="Banner Image" className="w-full h-auto object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
