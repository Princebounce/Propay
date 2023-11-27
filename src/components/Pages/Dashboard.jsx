import React from "react";
import rectangle from "../../assets/logos/rectangle.svg";
import invoice from "../../assets/logos/invoice-logo.svg";
import pie from "../../assets/logos/graph-place.svg";
import graph from "../../assets/logos/graph.svg";
import { IoFilterOutline } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import PieChart from "./Piechart";

const Dashboard = () => {
  return (
    <div className="flex bg-customGray">
      <div className="container flex flex-col mt-8 space-y-4">
        {/* Three equal-sized cards */}
        <div className="grid justify-evenly grid-cols-3 mx-9 gap-4">
          {/* Card 1 */}
          <div className="p-4 bg-slate-50 mb-10 rounded-md flex justify-between items-center shadow-md">
            <div className="flex items-center">
              <img src={rectangle} alt="Logo" className="mr-3" />
              <div className="ml-4">
                <h3 className="text-xs font-extralight">Clients</h3>
                <h4 className="text-2xl font-extrabold">2043</h4>
                <p className="text-sm text-gray-500">-0.50% since last week</p>
              </div>
            </div>
            <img src={invoice} alt="Right Image" className="ml-3" />
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-slate-50 mb-10 rounded-md flex justify-between items-center shadow-md">
            <div className="flex items-center">
              <img src={rectangle} alt="Logo" className="mr-3" />
              <div className="ml-4">
                <h3 className="text-xs font-extralight">Revenue</h3>
                <h4 className="text-2xl font-extrabold">2043</h4>
                <p className="text-sm text-gray-500">-0.20% since last week</p>
              </div>
            </div>
            <img src={invoice} alt="Right Image" className="ml-12" />
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-slate-50 mb-10 rounded-md flex justify-between items-center shadow-md">
            <div className="flex items-center">
              <img src={rectangle} alt="Logo" className="mr-3" />
              <div className="ml-4">
                <h3 className="text-xs font-extralight">Invoice</h3>
                <h4 className="text-2xl font-extrabold">2043</h4>
                <p className="text-sm text-gray-500">-0.17% since last week</p>
              </div>
            </div>
            <img src={invoice} alt="Right Image" className="ml-12" />
          </div>
        </div>
{/*  Pie*/}
<div className="grid grid-cols-5 gap-4 w-full bottom-10 mt-8">
          {/* Place "Invoice Statistics" at the top left */}
          <div className="col-span-5 lg:col-span-2 p-4 bg-slate-50 rounded-md shadow-md">
            <label className="font-extralight text-xs">
              Invoice Statistics
            </label>
            {/* First card with pie chart */}
            <div className="flex justify-between items-center space-x-4 mt-4">
              <div className="flex-1">
                {/* Placeholder: Pie chart component */}
                <img src={pie} alt="pie" />
              </div>
              <div className="flex-1">
                <label className="font-extralight text-xs" htmlFor="">
                  Total Paid
                </label>
                <li>543</li>
                <label className="font-extralight text-xs" htmlFor="">
                  Total Overdue
                </label>
                <li>890</li>
                <label className="font-extralight text-xs" htmlFor="">
                  Total Unpaid
                </label>
                <li>610</li>
              </div>
            </div>
          </div>

          {/* Second Card in Fish Card (2/3 width) */}
          <div className="col-span-3 lg:col-span-3 p-4 bg-slate-50 rounded-md shadow-md">
            <label className="font-extralight text-xs mb-4">
              Sales Analytics
            </label>
            {/* Placeholder: Image */}
            <img src={graph} alt="graphh" />
          </div>
        </div>

        {/* Third Card */}
       {/* Third Card */}
       <div className="container bg-slate-50 p-8 rounded-lg overflow-y-auto max-h-96 border shadow-md">
          <div className="flex mb-4 justify-between">
            <h3 className="text-lg font-semibold">Invoices</h3>
            <div className="flex">
              {/* Placeholder: Filter Icon */}
              <IoFilterOutline alt="Filter Icon" className="w-6 h-6 mr-4" />
              <p className="mr-12 hidden lg:inline">Filter</p>
              {/* Placeholder: Dots Horizontal Icon */}
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
            <div key={index} className="flex mt-5 p-2 hover:bg-customTeal">
              <div className="w-1/12">{index + 1}</div>
              <div className="w-2/12 ">#12345 </div>
              <div className="w-2/12">Buchi Paints</div>
              <div className="w-2/12">Screeding</div>
              <div className="w-2/12">Order</div>
              <div className="w-2/12">1/1/1990</div>
              <div className="w-1/12">$25</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
