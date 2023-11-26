import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/PayPro.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://paypro-r94x.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });
      console.log("Server response:", response);
      if (response.ok) {
        // Login successful, navigate to the dashboard
        console.log("API call successful");
        // setLoginError(false);
      } else {
        // Handle login error
        setLoginError(true);
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Navbar Section */}
      <div className="p-4 flex justify-between items-center w-full">
        {/* Logo */}
        <img src={logo} alt="PayPro Logo" className="h-8" />

        {/* Create Account Button */}
        <Link to="/niche">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 h-16 w-full border rounded-md"
          />
          <Link to="/forgot-password" className="text-blue-500 text-sm mt-2 block">
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
<Link to="/dashboard" className="mt-8 w-2/5">
  <button onClick={handleLogin} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
    Login
  </button>
</Link>

      </div>
    </div>
  );
};

export default Login;
