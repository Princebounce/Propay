import React from "react";
import logo from "../../assets/logos/PayPro.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      {/* Navbar Section */}
      <div className="p-4 flex justify-between items-center w-full">
        {/* Logo */}
        <img src={logo} alt="PayPro Logo" className="h-8" />

        {/* Create Account Button */}
        <Link to="/signup">
          <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 mt-0">
            Create Account
          </button>
        </Link>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4 md:p-8 flex flex-col justify-center items-center mt-4">
        {/* Login Heading */}
        <h1 className="text-xl md:text-xl lg:text-2xl font-black mb-4">
          Login into your account
        </h1>

        {/* Email Input */}
        <div className="mt-4 w-2/5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 p-2 h-16 w-full border"
          />
        </div>

        {/* Password Input */}
        <div className="mt-4 w-2/5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="mt-1 p-2 h-16 w-full border rounded-md"
          />
          <Link to="/forgot-password" className="text-blue-500 text-sm mt-2 block">
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <Link to="/dashboard" className=" mt-16 w-2/5">
          <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
