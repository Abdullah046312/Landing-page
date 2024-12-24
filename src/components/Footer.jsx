import React from 'react';
import Container from './Container';
import logo from "../assets/Logo.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";




const Footer = () => {
  return (
    <section className="pt-20 bg-[#F4F4F4] ">
      <Container>
        <div className="flex flex-wrap sm:flex-nowrap justify-between ">
          {/* Logo and Description */}
          <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
            <img src={logo} alt="Logo" className="mb-4" />
            <div className="">
  <p className="text-[#6C7D93] flex gap-5 text-[30px] cursor-pointer">
    <h4 className="hover:text-[#3b5998] transition duration-300">
      <RiFacebookCircleLine />
    </h4>
    <h4 className="hover:text-[#E4405F] transition duration-300">
      <FaInstagram />
    </h4>
    <h4 className="hover:text-[#0e76a8] transition duration-300">
      <FaLinkedin />
    </h4>
    <h4 className="hover:text-[#333] transition duration-300">
      <FaGithub />
    </h4>
  </p>
</div>

          </div>

          {/* Features + Products Section (combined) */}
            {/* Features Section */}
            <div className="w-[30%] sm:w-[20%] mb-4 sm:mb-0">
              <h4 className="text-lg font-semibold text-[#262626] mb-4">Quick Links</h4>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Home</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">About</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Pricing</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Blog</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Benefit</h5>
            </div>

            {/* Products Section */}
            <div className="w-[30%] sm:w-[20%]">
              <h4 className="text-lg font-semibold text-[#262626] mb-4">Company</h4>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Task Management</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Company Growth</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Time Tracking</h5>
            </div>
          

          {/* Support Section */}
          <div className="w-[30%] sm:w-[20%] mb-6 sm:mb-0">
            <h4 className="text-lg font-semibold text-[#262626] mb-4">Contact</h4>
            <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">C101 West Broadway, Ste 300
            </h5>
            <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">San Diego, CA 92101
            </h5>
            <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">+4 57494- 4985213 Us</h5>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between mt-10 border-t pt-6 text-[#6C7D93]">
          <div className="w-full sm:w-[60%] text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-sm sm:text-base">Copyright © 2024bd.Real ® All Rights Reserved</h2>
            <h2 className="text-sm sm:text-base">Design By Abdullah Al-Mamun.</h2>
          </div>

          <div className="w-full sm:w-[20%] text-center sm:text-left  sm:mb-0">
            <h4 className="text-sm cursor-pointer hover:text-[#FF7628]">Privacy Policy</h4>
          </div>

          <div className="w-full sm:w-[20%] text-center sm:text-left">
            <h4 className="text-sm cursor-pointer hover:text-[#FF7628]">Terms & Conditions</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
