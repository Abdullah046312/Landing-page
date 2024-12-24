import React from 'react';
import Container from './Container';
import images6 from "../assets/images6.png";

const SecoundPart = () => {
  return (
    <section className="pt-16 pb-10 bg-[#E1E1E1]">
      <Container>
      <div className="w-full lg:w-[40%] text-center mx-auto px-4">
  <h2 className='text-[#2B4846] text-[32px] sm:text-[40px] lg:text-[48px] font-Red_Hat font-semibold'>
    Tailored Solutions for Your Real Estate Needs
  </h2>
  <p className='text-[16px] sm:text-[18px] lg:text-[20px] text-[#183835] font-Red_Hat font-normal'>
    Our range of services includes expert property valuations, seamless buying and selling assistance, and personalized rental solutions.
  </p>
</div>


        {/* Card grid for services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          
          {/* Property Valuation */}
          <div className="group w-full bg-[#FFFF] py-5 px-5 rounded-[12px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#183835] hover:text-white cursor-pointer">
            <img src={images6} alt="Property Valuation" className="group-hover:opacity-70 transition-all duration-300"/>
            <h2 className='text-[24px] text-[#183835] font-Red_Hat font-medium mt-2 group-hover:text-white transition-all duration-300'>
              Property Valuation
            </h2>
            <p className='text-[16px] text-[rgba(24,56,53,0.42)] font-Red_Hat font-medium mt-2 group-hover:text-white transition-all duration-300'>
              Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.
            </p>
          </div>

          {/* Property Management */}
          <div className="group w-full bg-[#FFFF] py-5 px-5 rounded-[12px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#183835] hover:text-white cursor-pointer">
            <img src={images6} alt="Property Management" className="group-hover:opacity-70 transition-all duration-300"/>
            <h2 className='text-[24px] text-[#183835] font-Red_Hat font-medium mt-2 group-hover:text-white transition-all duration-300'>
              Property Management
            </h2>
            <p className='text-[16px] text-[rgba(24,56,53,0.42)] font-Red_Hat font-medium mt-2 group-hover:text-white transition-all duration-300'>
              Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.
            </p>
          </div>

          {/* Financial Reporting */}
          <div className="group w-full bg-[#FFFF] py-5 px-5 rounded-[12px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#183835] hover:text-white cursor-pointer">
            <img src={images6} alt="Financial Reporting" className="group-hover:opacity-70 transition-all duration-300"/>
            <h2 className='text-[24px] text-[#183835] font-Red_Hat font-medium mt-2 group-hover:text-white transition-all duration-300'>
              Financial Reporting
            </h2>
            <p className='text-[16px] text-[rgba(24,56,53,0.42)] font-Red_Hat font-medium mt-2 group-hover:text-white transition-all duration-300'>
              Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.
            </p>
          </div>

          {/* 24hr Consultation */}
          <div className="group w-full bg-[#FFFF] py-5 px-5 rounded-[12px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#183835] hover:text-white cursor-pointer">
            <img src={images6} alt="24hr Consultation" className="group-hover:opacity-70 transition-all duration-300"/>
            <h2 className='text-[24px] text-[#183835] font-Red_Hat font-medium mt-2 group-hover:text-white transition-all duration-300'>
              24hr Consultation
            </h2>
            <p className='text-[16px] text-[rgba(24,56,53,0.42)] font-Red_Hat font-medium mt-2 group-hover:text-white transition-all duration-300'>
              Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default SecoundPart;
