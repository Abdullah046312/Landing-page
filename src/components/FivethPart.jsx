import React from 'react';
import Container from './Container';
import { FiMail } from "react-icons/fi";  // Importing email icon
import images12 from "../assets/images12.png";

const FivethPart = () => {
  return (
    <section className='pt-20 pb-10 bg-[#E1E1E1]'>
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Text Section */}
          <div className="lg:w-[50%] bg-[#DDF1E6] py-5 px-10 rounded-3xl">
            <h2 className='text-[40px] sm:text-[50px] text-[#183835] font-Red_Hat font-semibold'>
              More Personalized Outreach With Automation
            </h2>
            <p className='text-[16px] sm:text-[20px] text-[rgba(24,56,53,0.61)] font-normal font-Red_Hat mt-2'>
              Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates, we curate the finest selections to match your distinct lifestyle. Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates, we curate the finest selections to match your distinct lifestyle.
            </p>

            {/* Input Field with Email Icon and Button */}
            <div className="relative mt-10">
              <input
                className="h-[50px] w-full lg:w-[500px] rounded-3xl pl-12 pr-5 outline-none"
                type="email"
                placeholder="Enter Your Email Address..."
              />
              {/* Email Icon */}
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#183835]">
                <FiMail />
              </span>

              {/* Submit Button */}
              <span className="py-2 px-5 rounded-[50px] absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 bg-[#183835] text-[#FFF] font-NunSans font-semibold hover:bg-[#FF7628] hover:text-[#262626] transition duration-300 ease-in-out hidden lg:block">
                Subscribe
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-[45%] w-full">
            <img className='w-full h-auto rounded-3xl' src={images12} alt="Luxury Properties" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FivethPart;
