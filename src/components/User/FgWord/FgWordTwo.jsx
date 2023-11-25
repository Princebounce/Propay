import React, { useState, useEffect, useRef } from "react";
import logo from "../../../assets/logos/PayPro.svg";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const FgWordTwo = () => {
 const [verificationCodes, setVerificationCodes] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const verificationCodeRefs = useRef([]);

  useEffect(() => {
    if (verificationCodeRefs.current.length > 0) {
      verificationCodeRefs.current[0].focus();
    }
  }, []);

  const handleVerificationCodeChange = (index, value) => {
    // Ensure only single character is entered
    const singleCharacter = value.slice(-1);

    const newVerificationCodes = [...verificationCodes];
    newVerificationCodes[index] = singleCharacter;

    // Move to the next box automatically
    if (singleCharacter !== "" && index < verificationCodes.length - 1) {
      verificationCodeRefs.current[index + 1].focus();
    }

    setVerificationCodes(newVerificationCodes);
  };


  return (
    <div className="h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="p-4 flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="PayPro Logo" className="h-8" />

        {/* Progress Bar */}
        <div className="w-full md:w-2/3 bg-gray-300 rounded-full h-2 mt-2 md:mt-0 flex items-start justify-start relative xl:ml-2">
          <div
            className="absolute left-0 bg-customTeal h-full rounded-full"
            style={{ width: "66%" }}
          ></div>
        </div>
        <Link to="/signup">
          <button className="text-white bg-customTeal px-4 py-2 rounded-md hover:bg-blue-600">
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
        <h1 className="text-xl md:text-xl lg:text-2xl font-extrabold mb-4">Reset password?</h1>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          Enter the OTP sent to your registered email address.
        </p>
{/* Verification */}
        <div className="flex items-center mt-20">
          {verificationCodes.map((code, index) => (
            <input
              key={index}
              type="text"
              value={code}
              onChange={(e) =>
                handleVerificationCodeChange(index, e.target.value)
              }
              maxLength="1"
              placeholder="•"
              className="p-2 h-12 w-12 text-center text-2xl font-black border rounded-md mr-2"
              ref={(inputRef) =>
                (verificationCodeRefs.current[index] = inputRef)
              }
            />
          ))}
        </div>

        {/* Request OTP Button */}
        <Link to="/forgot-password">
        <button className="bg-customTeal text-white px-4 py-2 mt-20 rounded-md hover:bg-blue-600 w-2/3">
         Continue
        </button>
        </Link>
      </div>
    </div>
  );
};



export default FgWordTwo