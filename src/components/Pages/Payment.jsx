import React from "react";
import rectangle from "../../assets/logos/rectangle.svg";

const Payment = () => {
  return (
    <div className="flex flex-col items-center min-h-80  mt-4 w-[43rem] bg-customGray ">
      <div className="container mx-auto w-full max-w-screen-md">
        {/* First Card */}
        <div className="w-[22rem] max-w-screen-md flex mb-4">
          <div className="border p-2 w-full rounded-lg bg-slate-50 flex flex-col lg:flex-row  items-start shadow-lg">
            <div className="flex items-center mb-4 mr-5  lg:mb-0">
              <div className="mr-1">
                <img src={rectangle} alt="Logo" className="w-20 h-20" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Payment</h3>
                <p className="text-sm">123</p>
                <p className="text-xs font-extralight">Total No. of Payment Transactions</p>
              </div>
            </div>
            <div className="border-l-2 md:h-full pl-4 flex ml-10  flex-col">
              <div className="flex ">
                <p className="text-lg font-bold mr-2">29</p>
                <p className="text-xs">Expected Payment</p>
              </div>
              <div className="flex  mt-4">
                <p className="text-lg font-bold mr-2">05</p>
                <p className="text-xs">Due Payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="border p-4 bg-slate-50 rounded-lg w-full h-[30rem] shadow-lg mb-4 overflow-x-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-lg font-bold mb-4 md:mb-0 md:mr-4">
              Account Details
            </h3>
            <button className="bg-green-500 text-white px-4 py-2 mb-4 md:mb-0 md:ml-4">
              Edit
            </button>
          </div>

          {/* Additional Cards */}
          <div className="border p-4 m-4 w-[40rem] shadow-md">
            <h3>Business Bank Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {/* First Row */}
              {[1, 2, 3].map((label) => (
                <div key={label} className="flex flex-col w-full md:w-auto">
                  <p className="font-bold text-sm mb-1">
                    FirstBank Plc {label}
                  </p>
                  <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
              {/* Second Row */}
              {[4, 5, 6].map((label) => (
                <div key={label} className="flex flex-col w-full md:w-auto">
                  <p className="font-bold text-sm mb-1">Label {label}</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content for the second additional card */}
          <div className="border p-4 m-4 w-[40rem] shadow-md">
            <h3>Paystack Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {/* First Row */}
              {[1, 2, 3].map((label) => (
                <div key={label} className="flex flex-col w-full md:w-auto">
                  <p className="font-bold text-sm mb-1">Label {label}</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
              {/* Second Row */}
              {[4, 5, 6].map((label) => (
                <div key={label} className="flex flex-col w-full md:w-auto">
                  <p className="font-bold text-sm mb-1">Label {label}</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
          </div>

          {/* content for third additional card */}
          <div className="border p-4 m-4 w-[40rem] shadow-md">
            <h3>Flutterwave Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {/* First Row */}
              {[1, 2, 3].map((label) => (
                <div key={label} className="flex flex-col w-full md:w-auto">
                  <p className="font-bold text-sm mb-1">
                    FirstBank Plc {label}
                  </p>
                  <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
              {/* Second Row */}
              {[4, 5, 6].map((label) => (
                <div key={label} className="flex flex-col w-full md:w-auto">
                  <p className="font-bold text-sm mb-1">Label {label}</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
          </div>
          {/* content for crpto card */}

          <div className="border p-2 col-span-3">
            <h3 className="font-bold text-lg mb-2">Crypto Wallet Address</h3>

            {/* Card for BTC Address */}
            <div className="border p-2 mb-4">
              <p className="font-bold text-sm mb-1">BTC Address</p>
              <p className="text-sm">
                bc2qf75t8ur4r3a74ydnjg0jmsk6z3lg3yft78jpj
              </p>
            </div>

            {/* Card for ETH Address */}
            <div className="border p-2">
              <p className="font-bold text-sm mb-1">ETH Address</p>
              <p className="text-sm">
                0xd8b9CB4743402512dA38dcB2561958c7cDC2559D
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
