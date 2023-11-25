import React from "react";
import contactImage from "../../assets/logos/contact-image.jpg";

const Contact = () => {
  return (
    <div className="container mx-auto flex items-center justify-between p-8">
      {/* Left Section */}
      <div className="w-1/2 mt-20 mr-8">
        <img
          src={contactImage}
          alt="Contact"
          className=" w-68 h-64 rounded-md shadow-lg"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <div className="">
          <h1 className="text-4xl mt-20 font-extrabold mb-10">
            Enjoy Our Professional <br />
            Customer Support and <br /> get help with any issue
          </h1>
          <p className="text-gray-700 mb-6">
            Some hardworking people are working day and  <br />night to provide scalable product for you and <br /> yours.
          </p>
          <button className="bg-customTeal mt-6 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
