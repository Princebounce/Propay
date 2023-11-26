import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../../assets/logos/PayPro.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const StepTwo = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };



  const calculatePasswordStrength = (password) => {
    // Password strength criteria
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Calculate strength based on criteria
    const strength =
      (hasUppercase + hasLowercase + hasNumber + hasSymbol) *
      (password.length >= minLength ? 2 : 1);

    return strength;
  };

  const getPasswordStrengthColor = (strength) => {
    // Define color codes based on strength
    if (strength >= 8) return "text-green-500"; // Strong
    if (strength >= 5) return "text-yellow-500"; // Medium
    return "text-red-500"; // Weak
  };

  const passwordStrengthIndicator = calculatePasswordStrength(newPassword);
  const passwordStrengthColor = getPasswordStrengthColor(
    passwordStrengthIndicator
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formValid =
    agreedToTerms &&
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    businessName.trim() !== "";

    const handleContinue = async () => {
      setFormSubmitted(true);
    
      if (formValid) {
        // Construct the request body
        const requestBody = {
          Email: email,
          BName: businessName,
          Password: newPassword,
          Type: "SomeType", // Replace with the actual value
          Country: "SomeCountry", // Replace with the actual value
          fName: firstName,
          lName: lastName,
        };
    
        console.log("Sending data to server:", requestBody);
    
        try {
          // Make the API call
          const response = await fetch("https://paypro-r94x.onrender.com/user/SignUp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });
    
          console.log("Server response:", response);
    
          // Check if the request was successful (status code 2xx)
          if (response.ok) {
            // Add your logic for handling a successful response, e.g., navigating to the next step
            console.log("API call successful");
          } else {
            // Handle the error based on the response status
            console.error(`API call failed with status: ${response.status}`);
          }
        } catch (error) {
          // Handle network-related errors
          console.error("Network error:", error);
        }
      } else {
        // Optional: You can add additional logic or display an error message here
      }
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
            className="absolute left-0 bg-customTeal h-full rounded-full"
            style={{ width: "66%" }}
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
        <h1 className="text-xl md:text-xl lg:text-2xl font-extrabold mb-2">
          Input Your Details
        </h1>

        {/* Form */}
        <form>
          {/* Full Name */}
          <div className="mt-8 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`mt-1 p-2 h-12 w-full border rounded-md ${
                  formSubmitted && firstName.trim() === ""
                    ? "border-red-500"
                    : ""
                }`}
              />
              <label
                htmlFor="businessType"
                className="block text-sm font-medium text-gray-700"
              >
                Please enter your name as it appears on your ID
              </label>
            </div>
            <div className="w-1/2 ml-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`mt-1 p-2 h-12 w-full border rounded-md ${
                  formSubmitted && lastName.trim() === ""
                    ? "border-red-500"
                    : ""
                }`}
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mt-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 p-2 h-12 w-full border rounded-md ${
                formSubmitted && email.trim() === "" ? "border-red-500" : ""
              }`}
            />
          </div>

          {/* Create New Password Input */}
          <div className="mt-8 relative">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Create New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-2 p-2 h-16 w-full border pr-10"
              />
              <button
                className="relative ml-[-20px] top-2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {newPassword && (
              <p className={`mt-2 text-sm ${passwordStrengthColor}`}>
                Password Strength:{" "}
                {passwordStrengthIndicator >= 8
                  ? "Strong"
                  : passwordStrengthIndicator >= 5
                  ? "Medium"
                  : "Weak"}
              </p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="mt-8 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 h-16 w-full border pr-10"
              />
              <button
                className=" relative ml-[-20px] top-2 transform -translate-y-1/2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </button>
            </div>
          </div>

          {/* Business Name */}
          <div className="mt-8">
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-700"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="PayPro Enterprise"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={`mt-1 p-2 h-12 w-full border rounded-md ${
                formSubmitted && businessName.trim() === ""
                  ? "border-red-500"
                  : ""
              }`}
            />
          </div>

          {/* Acknowledge Checkbox */}
          <div className="mt-7">
            <input
              type="checkbox"
              id="acknowledge"
              name="acknowledge"
              className="mr-2"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
            />
            <label htmlFor="acknowledge" className="text-sm text-gray-700">
              I acknowledge that I have read, understood, and agree to PayPro's
              Merchant Service Agreement (MSA), Terms and Conditions, and
              Privacy Policy.
            </label>
          </div>

          {/* Receive News Checkbox */}
          <div className="mt-5">
            <input
              type="checkbox"
              id="receiveNews"
              name="receiveNews"
              className="mr-2"
            />
            <label htmlFor="receiveNews" className="text-sm text-gray-700">
              I agree to receive news, offers, and promotional materials from
              PayPro.
            </label>
          </div>

          {/* Create Account Button */}
          <Link to="/stepthree">
            <button
              id="continueBtn"
              onClick={handleContinue}
              className={`bg-customTeal text-white px-4 py-2 mt-20 rounded-md hover:bg-customTeal w-full ${
                !agreedToTerms || !formValid
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={!agreedToTerms || !formValid}
            >
              Create your account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
