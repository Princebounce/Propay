import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";  // Add the FaBars and FaTimes icons
import Payprowhite from "../../assets/logos/PayProWhite.svg";
import hero from "../../assets/logos/hero.svg";
import Whoarewe from "./Whoarewe";
import Offer from "./Offer";
import Divider from "./Divider";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // Track if the menu is open or closed

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar section */}
      <div className="bg-customBlue p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo on the left */}
          <img src={Payprowhite} alt="PayPro Logo" className="h-8" />

          {/* Navbar on the right */}
          <div className="flex items-center">
            {/* Hamburger menu icon for small screens */}
            <div className="lg:hidden">
              {isMenuOpen ? (
                <FaTimes
                  className="text-white text-2xl cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className="text-white text-2xl cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </div>

            {/* Navigation links */}
            <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
              <Link to="/" className="text-white lg:mr-5">
                Home
              </Link>
              <Link to="/about" className="text-white lg:mr-5">
                About
              </Link>
              <Link to="/contact" className="text-white lg:mr-5">
                Contact
              </Link>
              <Link to="/signup" className="text-white lg:mr-5">
                Login/Signup
              </Link>

              {/* Dropdown for 'EN' */}
              <div className="relative inline-block text-white">
                <button
                  onClick={toggleDropdown}
                  className="focus:outline-none flex items-center lg:ml-5"
                >
                  <MdLanguage className="text-lg" />
                  <span className="ml-1">EN</span>
                  <IoIosArrowDown
                    className={`transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300 ml-1`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-1 bg-white text-gray-800 p-2 rounded shadow">
                    <button className="block w-full text-left">English</button>
                    <button className="block w-full text-left">Spanish</button>
                    {/* Add more language options as needed */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image section */}
      <div className="mx-0 my-0">
        <img src={hero} alt="Hero" className="w-full" />
        <Link to="/signup"><button className="relative -top-10 bg-customTeal rounded-md">Get Started </button></Link>
      </div>

      <Offer />
      <Divider />
      <Whoarewe />
      <Divider />
      <Contact />
      <Divider />
      <Faq />
      <Footer />
    </div>
  );
};

export default Hero;
