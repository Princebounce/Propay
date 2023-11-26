import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import logo from "../../assets/logos/payprowhitepro.svg"; 
import invoice from "../../assets/logos/invoice-logo.svg"; 
import notification from "../../assets/logos/notification-logo.svg"; 
import payment from "../../assets/logos/payment-logo.svg"; 
import todo from "../../assets/logos/todo-logo.svg"; 
import tracking from "../../assets/logos/tracking-logo.svg"; 
import client from "../../assets/logos/client-profile-logo.svg";
import help from "../../assets/logos/help-logo.svg";
import dashboard from "../../assets/logos/dashboard-logo.svg"; 
import settings from "../../assets/logos/settings-logo.svg"; 

const Sidebar = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <div className={`overflow-x-hidden text-white ${isSidebarMinimized ? "minimized" : ""}`}>
      {/* Sidebar Content */}
      <div className={`h-screen w-${isSidebarMinimized ? "1/12" : "1/6"} bg-customTeal text-white ${isSidebarMinimized ? "minimized" : ""}`}>
        {/* Logo and Service Management Board */}
        <div className="p-4 flex items-center flex-col">
          <img src={logo} alt="Your Logo" className="h-6 mb-2" />
          {!isSidebarMinimized && <p className="font-extralight">Service Management Board</p>}
        </div>

        {/* Divider and Minimize/Maximize Button */}
        <div className="border-t border-white p-2 flex justify-end cursor-pointer" onClick={toggleSidebar}>
          {isSidebarMinimized ? <FaArrowRight /> : <FaArrowLeft />}
        </div>

        {/* Menu Items */}
        <div className="p-4">
          <Link to="/dashboard" className="flex items-center mb-8">
            {/* Dashboard Logo */}
            <img src={dashboard} alt="Your Logo" className="h-5 mr-4 ml-4" />
            {!isSidebarMinimized && <span>Dashboard</span>}
          </Link>

          {/* Repeat the above pattern for other menu items */}
          <Link to="/client-profile" className="flex items-center mb-8">
            {/* Client Profile Logo */}
            <img src={client} alt="Your Logo" className="h-5 mr-4 ml-4 " />
            {!isSidebarMinimized && <span>Client Profile</span>}
          </Link>

          {/* Payment */}
          <Link to="/payment" className="flex items-center mb-8">
            {/* Payment Logo */}
            <img src={payment} alt="Your Logo" className="h-5 mr-4 ml-4" />
            {!isSidebarMinimized && <span>Payment</span>}
          </Link>

          {/* Invoice */}
          <Link to="/invoice" className="flex items-center mb-8">
            {/* Invoice Logo */}
            <img src={invoice} alt="Your Logo" className="h-5 mr-4 ml-4" />
            {!isSidebarMinimized && <span>Invoice</span>}
          </Link>

          {/* Tracking */}
          <Link to="/tracking" className="flex items-center mb-8">
            {/* Tracking Logo */}
            <img src={tracking} alt="Your Logo" className="h-5 mr-4 ml-4" />
            {!isSidebarMinimized && <span>Tracking</span>}
          </Link>

          {/* Notification */}
          <Link to="/notification" className="flex items-center mb-8">
            {/* Notification Logo */}
            <img src={notification} alt="Your Logo" className="h-5 mr-4 ml-4" />
            {!isSidebarMinimized && <span>Notification</span>}
          </Link>

          {/* Todo List */}
          <Link to="/todo-list" className="flex items-center mb-8">
            {/* Todo List Logo */}
            <img src={todo} alt="Your Logo" className="h-5 mr-4 ml-4" />
            {!isSidebarMinimized && <span>Todo List</span>}
          </Link>
        </div>

        {/* Help and Support */}
        <div className="p-4">
          <p className={`font-bold mb-4 mr-5 ${isSidebarMinimized ? "hidden" : ""}`}>Help and Support</p>
          <Link to="/help-center" className="flex items-center mb-8">
            {/* Help Center Logo */}
            <img src={help} alt="Your Logo" className="h-5 mr-4 ml-4" />
            {!isSidebarMinimized && <span>Help Center</span>}
          </Link>

          {/* Settings */}
          <Link to="/settings" className="flex items-center">
            {/* Settings Logo */}
            <img src={settings} alt="Your Logo" className="h-5 mr-4 ml-4" />
            {!isSidebarMinimized && <span>Settings</span>}
          </Link>
        </div>
      </div>

      {/* Sidebar Minimized Button */}
      {isSidebarMinimized && (
        <div className="h-screen w-1/12 bg-customTeal text-white">
          <div className="p-2 cursor-pointer" onClick={toggleSidebar}>
            <FaArrowLeft />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
