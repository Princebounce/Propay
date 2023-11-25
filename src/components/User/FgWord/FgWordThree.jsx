import React, { useState } from "react";
import logo from "../../../assets/logos/PayPro.svg";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const FgWordThree = () => {
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

  const handleResetPassword = () => {
    // Add logic to handle the reset password functionality
    console.log("Resetting password...");
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
      (hasUppercase + hasLowercase + hasNumber + hasSymbol) * (password.length >= minLength ? 2 : 1);

    return strength;
  };

  const getPasswordStrengthColor = (strength) => {
    // Define color codes based on strength
    if (strength >= 8) return "text-green-500"; // Strong
    if (strength >= 5) return "text-yellow-500"; // Medium
    return "text-red-500"; // Weak
  };

  const passwordStrengthIndicator = calculatePasswordStrength(newPassword);
  const passwordStrengthColor = getPasswordStrengthColor(passwordStrengthIndicator);

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
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4 md:p-8 flex-grow">
        {/* Back to Login Button */}
        <Link to="/" className="text-blue-500 mb-4 block">
          <TiArrowBack className="inline mr-2" />
          Back to Login
        </Link>

        {/* Reset Password Heading */}
        <h1 className="text-xl md:text-xl lg:text-2xl font-extrabold mb-4">Reset password?</h1>

      {/* Create New Password Input */}
<div className="mt-20 relative">
  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
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
      className="mt-2 p-2 h-16 w-2/3 border pr-10"
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
<div className="mt-10 relative">
  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
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
      className="mt-1 p-2 h-16 w-2/3 border pr-10"
    />
    <button
      className="relative ml-[-20px] top-2 transform -translate-y-1/2 cursor-pointer"
      onClick={toggleConfirmPasswordVisibility}
    >
      {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </button>
  </div>
</div>

        {/* Reset Password Button */}
        <button
          className="bg-customTeal text-white px-4 py-2 mt-20 rounded-md hover:bg-customTeal w-2/3"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default FgWordThree;
