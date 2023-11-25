import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import logo from "../../../assets/logos/PayPro.svg";
import { Link } from "react-router-dom";

const Signup = (props) => {
  // State for form fields
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");

  // Fetch countries using Axios and set them to the state
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");

        setCountryList(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Event handler for continue button
  const handleContinue = () => {
    // Add your logic for handling the continue button click, e.g., navigating to the next step
    console.log("Continue button clicked");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="p-4 flex items-center justify-between ">
        {/* Logo */}
        <img src={logo} alt="PayPro Logo" className="h-8" />

        {/* Progress Bar */}
        <div className="w-full md:w-3/3 bg-gray-300 rounded-full h-2 mt-2  md:mt-0 flex items-start justify-start relative xl:ml-2">
          <div
            className="absolute left-0 bg-blue-500 h-full rounded-full"
            style={{ width: "33%" }}
          ></div>
        </div>

        {/* Close Icon */}
        <button>
          <IoMdClose />
        </button>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto xl:mx-40 p-4 md:p-8 flex-grow">
        <h1 className="text-xl md:text-xl lg:text-2xl font-extrabold mb-2">
          Get Started Effortlessly - It’s Quick and Simple
        </h1>
        <p className=" text-black mb-4">
          Create your account to effectively manage payments from clients.
        </p>

        {/* Country Dropdown */}
        <div className=" mt-12">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="mt-1 p-2 w-full border h-16"
          >
            {countryList.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Business Type Dropdown */}
        <div className="mt-20">
          <label
            htmlFor="businessType"
            className="block text-sm font-medium text-gray-700"
          >
            Select a Business Type
          </label>
          <select
            id="businessType"
            name="businessType"
            value={selectedBusinessType}
            onChange={(e) => setSelectedBusinessType(e.target.value)}
            className="mt-1 p-2 w-full border  h-16"
          >
            <option value="fashion_beauty">Fashion and Beauty</option>
            <option value="health_technology">Health Technology</option>
            <option value="construction">Construction</option>
          </select>
          <label
            htmlFor="businessType"
            className="block text-sm font-medium text-gray-700"
          >
            Select a Niche that best describes your services
          </label>
        </div>

        {/* Continue Button */}
        <Link to="/steptwo">
          <button
            id="continueBtn"
            onClick={handleContinue}
            className="bg-blue-500 text-white px-4 py-2 mt-28 rounded-md hover:bg-blue-600 w-full"
          >
            Continue
          </button>
        </Link>
        <div className=" items-center justify-center flex mt-2">
          Already have an account?
          <Link
            to="/login"
            className=" text-blue-500"
            onClick={() => props.onFormSwitch("login")}
          >
            Login here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
