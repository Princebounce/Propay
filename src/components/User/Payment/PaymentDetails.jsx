import React, { useState } from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";

const PaymentDetails = () => {
  const [editAccountOpen, setEditAccountOpen] = useState(true);
  const [addNewAccountOpen, setAddNewAccountOpen] = useState(true);

  return (
    <div className="container p-4 mx-44 md:p-8 flex flex-col mt-4">
        <h1 className="text-xl md:text-xl lg:text-2xl font-black">
          Payment Details
        </h1>
      <div className="flex justify-between mt-10 items-center mb-4">
        <h1 className="text-xl md:text-xl lg:text-2xl font-black">
         Enter Account Details
        </h1>
        
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setEditAccountOpen(!editAccountOpen)}
        >
          <FaChevronDown className={`mr-2 ${editAccountOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Edit Account Details */}
      <div className="flex flex-col">
        {editAccountOpen && (
          <>
            <label htmlFor="Bank name" className="text-sm font-medium text-gray-700">
              Bank Name
            </label>
            <input
              placeholder="Enter Bank name"
              className="mt-2 p-2 h-12 w-full border"
            />

            <label htmlFor="Account name" className="text-sm mt-4 font-medium text-gray-700">
              Account Name
            </label>
            <input
              placeholder="Enter Account name"
              className="mt-2 p-2 h-12 w-full border"
            />

            <label htmlFor="Account No" className="text-sm mt-4 font-medium text-gray-700">
              Account No
            </label>
            <input
              placeholder="Enter Account No"
              className="mt-2 p-2 h-12 w-full border"
            />

            <label htmlFor="Account Url" className="text-sm mt-4 font-medium text-gray-700">
              Account Url
            </label>
            <input
              placeholder="https://www.firstbanplc/radianttimes"
              className="mt-2 p-2 h-12 w-full border"
            />
            {/* Add more input fields for account details */}
          </>
        )}
      </div>


      <div className="flex justify-between mt-10 items-center mb-4">
        <h1 className="text-xl md:text-xl lg:text-2xl font-black">
         Enter Account Details
        </h1>
        
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setAddNewAccountOpen(!addNewAccountOpen)}
        >
          <FaChevronDown className={`mr-2 ${addNewAccountOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Edit Account Details */}
      <div className="flex flex-col">
        {addNewAccountOpen && (
          <>
            <label htmlFor="Bank name" className="text-sm font-medium text-gray-700">
              Bank Name
            </label>
            <input
              placeholder="Enter Bank name"
              className="mt-2 p-2 h-12 w-full border"
            />

            <label htmlFor="Account name" className="text-sm mt-4 font-medium text-gray-700">
              Account Name
            </label>
            <input
              placeholder="Enter Account name"
              className="mt-2 p-2 h-12 w-full border"
            />

            <label htmlFor="Account No" className="text-sm mt-4 font-medium text-gray-700">
              Account No
            </label>
            <input
              placeholder="Enter Account No"
              className="mt-2 p-2 h-12 w-full border"
            />

            <label htmlFor="Account Url" className="text-sm mt-4 font-medium text-gray-700">
              Account Url
            </label>
            <input
              placeholder="https://www.firstbanplc/radianttimes"
              className="mt-2 p-2 h-12 w-full border"
            />
            {/* Add more input fields for account details */}
          </>
        )}
      </div>

      {/* Add New Payment Details */}
      <div className="mt-4">
        <div className="flex items-center">
          <FaPlus className="mr-2" />
          <span>Add New Payment Details</span>
        </div>
      </div>

      {/* Save Button */}
      <button className="mt-4 w-56 bg-customBlue text-white p-2 rounded">Save</button>
    </div>
  );
};

export default PaymentDetails;
