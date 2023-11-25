import React from "react";
import logo from "../../../assets/logos/PayPro.svg";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const FgWord = () => {
  return (
    <div className=" flex flex-col">
      {/* Navbar Section */}
      <div className="p-4 flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="PayPro Logo" className="h-8" />

        {/* Progress Bar */}
        <div className="w-full md:w-2/3 bg-gray-300 rounded-full h-2 mt-2 md:mt-0 flex items-start justify-start relative xl:ml-2">
          <div
            className="absolute left-0 bg-customTeal h-full rounded-full"
            style={{ width: "33%" }}
          ></div>
        </div>
        <Link to="/login">
          <button className="text-white bg-customTeal px-4 py-2 rounded-md hover:bg-customTeal">
            Login to Account
          </button>
        </Link>
      

      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4 md:p-8 flex-grow">
        {/* Back to Login Button */}
        <Link to="/login" className="text-blue-500 mb-4 block">
          <TiArrowBack className="inline mr-2" />
          Back to Login
        </Link>

        {/* Forgot Password Heading */}
        <h1 className="text-xl md:text-xl lg:text-2xl font-extrabold mb-4">Forgot password?</h1>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          An OTP will be sent to your registered email address.
        </p>

        {/* Email Input */}
        <div className="mt-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            className=" p-2 h-16 w-2/3 mt-10 border rounded-md"
          />
        </div>

        {/* Request OTP Button */}
        <Link to="/forgot-passwo">
        <button className="bg-customTeal text-white px-4 py-2 mt-20 rounded-md hover:bg-blue-600 w-2/3">
          Request OTP
        </button>
        </Link>
      </div>
    </div>
  );
};

export default FgWord;