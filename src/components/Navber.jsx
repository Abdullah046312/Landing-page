import React, { useState } from 'react';
import Container from './Container';
import logo from "../assets/Logo.png";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="py-5 bg-[#E1E1E1]">
      <Container>
        <div className="flex justify-between items-center flex-wrap relative">
          {/* Logo Section */}
          <div className="w-full sm:w-[10%] mb-4 sm:mb-0">
            <img src={logo} alt="Logo" className="mx-auto sm:mx-0" />
          </div>

          {/* Navigation Links */}
          <div className={`w-full sm:w-[50%] flex justify-center sm:justify-start mb-4 sm:mb-0 ${isMenuOpen ? "block" : "hidden"} sm:block`}>
            <ul className="flex flex-col sm:flex-row sm:justify-start gap-5 sm:gap-10 items-center sm:flex-row sm:space-x-10 transition-all duration-300 ease-in-out">
              <li className="text-[16px] sm:text-[18px] text-[#91999A] font-NunSans font-medium cursor-pointer transition-all duration-300 ease-in-out transform hover:text-[#183835] hover:scale-105 hover:translate-x-2">
                Home
              </li>
              <li className="text-[16px] sm:text-[18px] text-[#91999A] font-NunSans font-medium cursor-pointer transition-all duration-300 ease-in-out transform hover:text-[#183835] hover:scale-105 hover:translate-x-2">
                Listings
              </li>
              <li className="text-[16px] sm:text-[18px] text-[#91999A] font-NunSans font-medium cursor-pointer transition-all duration-300 ease-in-out transform hover:text-[#183835] hover:scale-105 hover:translate-x-2">
                Services
              </li>
              <li className="text-[16px] sm:text-[18px] text-[#91999A] font-NunSans font-medium cursor-pointer transition-all duration-300 ease-in-out transform hover:text-[#183835] hover:scale-105 hover:translate-x-2">
                About
              </li>
              <li className="text-[16px] sm:text-[18px] text-[#91999A] font-NunSans font-medium cursor-pointer transition-all duration-300 ease-in-out transform hover:text-[#183835] hover:scale-105 hover:translate-x-2">
                Rent
              </li>
              <li className="text-[16px] sm:text-[18px] text-[#91999A] font-NunSans font-medium cursor-pointer transition-all duration-300 ease-in-out transform hover:text-[#183835] hover:scale-105 hover:translate-x-2">
                Sell
              </li>
              <li className="text-[16px] sm:text-[18px] text-[#91999A] font-NunSans font-medium cursor-pointer transition-all duration-300 ease-in-out transform hover:text-[#183835] hover:scale-105 hover:translate-x-2">
                Buy
              </li>
            </ul>
          </div>

          {/* Contact Us Button */}
          <div className="w-full sm:w-[10%] flex justify-center sm:justify-end mt-4 sm:mt-0">
            <button className="py-3 px-5 rounded-[50px] bg-[#183835] text-[#FFF] font-NunSans font-semibold hover:bg-[#FF7628] hover:text-[#262626] transition duration-300 ease-in-out transform hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Hamburger Menu Icon for mobile (right-aligned) */}
          <div className="sm:hidden flex items-center bg-[#FF7628] p-2 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 z-10" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoIosClose className="text-2xl text-[#FFF] font-bold" />
            ) : (
              <IoIosMenu className="text-2xl text-[#FFF] font-bold" />
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Navber;
