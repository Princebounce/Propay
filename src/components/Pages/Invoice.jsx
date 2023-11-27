import React from "react";
import { Link } from "react-router-dom";
import { IoFilterOutline } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import invoice from "../../assets/logos/invoiceblue-logo.svg";
import addlist from "../../assets/logos/addlist-logo.svg";
import rectangle from "../../assets/logos/rectangle.svg";
import download from "../../assets/logos/download-logo.svg";

const Invoice = () => {
  return (
    <div className="flex flex-col  ml-[-1.5rem] bg-customGray">
      <div className="container mt-8 lg:flex lg:flex-row w-full lg:w-1/2 bg-slate-50 p-5 mx-4 my-4 mb-4 rounded-lg justify-between">
        {/* Left Content */}
        <div className="flex items-start mb-4 lg:mb-0 lg:mr-4">
          <div className="ml-2">
            <img src={rectangle} alt="Logo" className="mr-3" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Invoice Title</h3>
            <h4 className="text-2xl font-extrabold">2043</h4>
            <p className="text-sm text-gray-500">Total No. of Invoices</p>
          </div>
          <div className="ml-2">
            <img src={invoice} alt="Logo" className="w-6 h-6 ml-4" />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-right">
          <div className="flex items-center justify-center lg:justify-end mt-4">
            <p className="text-lg font-semibold">Generate New Invoice</p>
            <img src={addlist} alt="Icon" className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="container bg-slate-50 p-4 lg:p-8 mx-4 my-4 rounded-lg overflow-y-auto  lg:max-h-[25rem] border lg:w-[90%]">
        <div className="flex mb-4 justify-between">
          <h3 className="text-lg font-semibold">Invoices</h3>
          <div className="flex">
            <IoFilterOutline alt="Filter Icon" className="w-6 h-6 mr-4" />
            <p className="mr-4 lg:mr-12 hidden lg:inline">Filter</p>
            <BiDotsHorizontalRounded className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center" />
          </div>
        </div>

        {/* Small Card */}
        <div className="flex border-2 p-2 rounded-lg font-semibold">
          <div className="w-1/12">No.</div>
          <div className="w-2/12">Client Id</div>
          <div className="w-2/12">Client Name</div>
          <div className="w-2/12">Service</div>
          <div className="w-2/12">Order</div>
          <div className="w-2/12">Status</div>
          <div className="w-1/12">Price</div>
        </div>

        {/* Rows */}
        {[...Array(10).keys()].map((index) => (
          <div key={index} className="flex flex-col mt-4 lg:flex-row lg:items-center p-2 hover:bg-customTeal">
            <div className="lg:w-1/12">{index + 1}</div>
            <div className="lg:w-2/12 flex justify-start items-center">
              #12345{" "}
              <Link to="/">
                <img src={download} className="ml-1 w-4 h-4" alt="download" />
              </Link>
            </div>
            <div className="lg:w-2/12">Buchi Paints</div>
            <div className="lg:w-2/12">Screeding</div>
            <div className="lg:w-2/12">Order</div>
            <div className="lg:w-2/12">1/1/1990</div>
            <div className="lg:w-1/12">$25</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invoice;
