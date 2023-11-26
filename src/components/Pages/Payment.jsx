import React from 'react';

const PaymentComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="container mx-auto">
        {/* First Card */}
        <div className="border p-4 w-full h-36 rounded-lg bg-slate-50 flex justify-between items-center shadow-lg mb-4">
          <div>
            <h3 className="text-lg font-bold">Payment</h3>
            <img src="logo.png" alt="Logo" className="w-8 h-8" />
            <p>123</p>
            <p>Total number of payment transactions</p>
          </div>
          <div className="border-l-2 h-full">
            <p>29</p>
            <p>Expected Payment</p>
            <p>05</p>
            <p>Due Payment</p>
          </div>
        </div>

        {/* Second Card */}
        <div className="border p-4 bg-slate-50 rounded-lg w-full shadow-lg">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">Account Details</h3>
            <button className="bg-green-500 text-white px-4 py-2">Edit</button>
          </div>

          {/* Additional Cards */}
          <div className="border p-2 m-4 w-full shadow-md">
          <div className="grid grid-cols-3 gap-4 mt-4">
  {/* First Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 1</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Second Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 2</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Third Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 3</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Fourth Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 4</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Fifth Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 5</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Sixth Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 6</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Seventh Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 7</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Eighth Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 8</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Ninth Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 9</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>
</div>
</div>

 {/* Content for the second additional card */}
 <div className="border p-4 m-4 w-full shadow-md">
  <h3>Paystack Account Details</h3>
<div className="grid grid-cols-3 gap-3 mt-4">
           
            {/* First Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 1</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Second Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 2</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Third Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 3</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>
<div>Flutterwave Account Details</div>
  {/* Fourth Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 4</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Fifth Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 5</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

  {/* Sixth Item */}
  <div className="border p-2">
    <p className="font-bold text-sm mb-1">Label 6</p>
    <p className="text-sm">Lorem ipsum dolor sit amet</p>
  </div>

          </div>
          </div>

          <div className="border p-2 col-span-3">
              <h3 className="font-bold text-lg mb-2">Crypto Wallet Address</h3>

              {/* Card for BTC Address */}
              <div className="border p-2 mb-4">
                <p className="font-bold text-sm mb-1">BTC Address</p>
                <p className="text-sm">bc2qf75t8ur4r3a74ydnjg0jmsk6z3lg3yft78jpj</p>
              </div>

              {/* Card for ETH Address */}
              <div className="border p-2">
                <p className="font-bold text-sm mb-1">ETH Address</p>
                <p className="text-sm">0xd8b9CB4743402512dA38dcB2561958c7cDC2559D</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
