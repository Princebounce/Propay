import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/PayProWhite.svg"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-customBlue text-white p-8">
      <div className="container mx-auto flex flex-wrap">
        {/* Logo */}
        <div className="w-full md:w-1/6 mr-20 mb-8">
          <img src={logo} alt="PayPro Logo" className=" mb-4" />
          <p className="text-gray-500">Management Simplified</p>
        </div>

        {/* Solutions */}
        <div className="w-full md:w-1/6  mb-8">
          <h4 className="font-bold mb-4">Solutions</h4>
          <ul>
            <li>
              <Link to="/">Startups</Link>
            </li>
            <li>
              <Link to="/">Enterprises</Link>
            </li>
            <li>
              <Link to="/">SaaS</Link>
            </li>
            <li>
              <Link to="/">Platforms</Link>
            </li>
            <li>
              <Link to="/">Ecommerce</Link>
            </li>
            <li>
              <Link to="/">Marketplaces</Link>
            </li>
            <li>
              <Link to="/">Crypto</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="w-full md:w-1/6 mb-8">
          <h4 className="font-bold mb-4">Resources</h4>
          <ul>
            <li>
              <Link to="/">Guides</Link>
            </li>
            <li>
              <Link to="/">Customer Stories</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Annual Conference</Link>
            </li>
            <li>
              <Link to="/">Privacy & Terms</Link>
            </li>
            <li>
              <Link to="/">Licenses</Link>
            </li>
            <li>
              <Link to="/">Sitemap</Link>
            </li>
            <li>
              <Link to="/">Cookie Settings</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="w-full md:w-1/6 mb-8">
          <h4 className="font-bold mb-4">Support</h4>
          <ul>
            <li>
              <Link to="/">Help Desk</Link>
            </li>
            <li>
              <Link to="/">Support Center</Link>
            </li>
            <li>
              <Link to="/">Support Plans</Link>
            </li>
          </ul>
        </div>
  {/* Connect with Us */}
  <div className="w-full md:w-1/6 mb-8 text-center">
          <h4 className="font-bold mb-4">Connect with Us</h4>
          <div className="flex justify-center">
            <FaFacebookF  alt="Facebook Logo" className="h-6 mx-2" />
            <FaXTwitter alt="X Logo" className="h-6 mx-2" />
            <FaInstagram  alt="Instagram Logo" className="h-6 mx-2" />
            <FaLinkedin alt="LinkedIn Logo" className="h-6 mx-2" />
          </div>
        </div>
      </div>

      
      {/* Footer Text */}
      <div className="text-center text-white">
        <p className="mb-4">
          PayPro Ltd. is licensed by the Monetary Authority of Nigeria as a Major Payment Institution under the Payment Services Act 2019.
        </p>
        <p>© 1999–2023 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
