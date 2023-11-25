import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../../assets/logos/PayPro.svg";
import { Link } from "react-router-dom";

const StepThree = () => {
  const [resendDelay, setResendDelay] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  useEffect(() => {
    let timer;
    if (resendDelay > 0) {
      timer = setInterval(() => {
        setResendDelay((prevDelay) => prevDelay - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [resendDelay]);

  const handleResendClick = () => {
    // Add logic to resend the verification code
    setResendDelay(60);
    setIsResendDisabled(true);
  };

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

  const handleConfirmEmail = () => {
    // Add logic to confirm the email using the entered verification code
    console.log("Email confirmed");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="p-4 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="PayPro Logo" className="h-8" />

        {/* Progress Bar */}
        <div className="w-full md:w-3/3 bg-gray-300 rounded-full h-2 mt-2 md:mt-0 flex items-start justify-start relative xl:ml-2">
          <div
            className="absolute left-0 bg-blue-500 h-full rounded-full"
            style={{ width: "100%" }}
          ></div>
        </div>

        {/* Close Icon */}
        <button>
          <IoMdClose />
        </button>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto xl:mx-40 p-4 md:p-8 flex-grow">
        {/* Step Heading */}
        <h1 className="text-xl md:text-xl lg:text-2xl flex justify-center font-extrabold mb-4">
          We just sent you an email
        </h1>

        {/* Email Address */}
        <p className="text-gray-700 flex justify-center mb-4">
          Enter the code that was sent to example@gmail.com to confirm your
          email.
        </p>

        {/* Verification Code Input */}
        <div className="flex items-center justify-center mt-20">
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

        {/* Confirm Email Button */}
        <button
          id="confirmEmailBtn"
          onClick={handleConfirmEmail}
          className={`bg-blue-500 text-white px-4 py-2 mt-20 rounded-md hover:bg-blue-600 w-full ${
            verificationCodes.some((code) => code === "")
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          disabled={verificationCodes.some((code) => code === "")}
        >
          Confirm Your Email
        </button>

        {/* Resend Code Section */}
        <div className="flex justify-center mt-6">
          <p className="text-gray-700">Didn't receive the code?</p>
          <Link to="/login">
            <button
              id="resendBtn"
              onClick={handleResendClick}
              disabled={isResendDisabled}
              className="ml-2 text-blue-500"
            >
              Resend{isResendDisabled && ` (${resendDelay}s)`}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
