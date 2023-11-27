import React from 'react';
import paypro from "../../assets/logos/PayPro.svg"
import mail from '../../assets/logos/mail-logo.svg'; // Replace with the actual path to your mail logo
import phone from '../../assets/logos/phone-logo.svg'; // Replace with the actual path to your phone logo
import share from '../../assets/logos/share-logo.svg'; // Replace with the actual path to your share icon

const InvoiceTemp = () => {
  return (
    <div className="container bg-customGray rounded-lg shadow-md mx-auto p-8">
      {/* Header */}
      <div className="flex justify-between mb-8">
        <img src={paypro} alt="Paypro Logo" className="w-16 h-16" />
        <div>
          <h1 className="text-2xl font-bold">Invoice</h1>
          <div>
            <p>Issue No: Lorem Ipsum</p>
            <p>Issue Date: Lorem Ipsum</p>
            <p>Due Date: Lorem Ipsum</p>
          </div>
        </div>
      </div>

      {/* Bill To */}
      <div className="flex justify-between mb-8">
        <div className="mb-10 p-4">
          <h2 className="text-white bg-customTeal mb-5 border-2 text-center rounded p5 font-bold">Bill To</h2>
          <p  className='text-bold font-extrabold text-xl'>Lawal Victor</p>
          <p>Client ID: Lorem Ipsum</p>
          <p>Phone: Lorem Ipsum</p>
          <p>Email: Lorem Ipsum</p>
        </div>
        <div className=" p-4">
        <h2 className="text-white bg-customBlue mb-5 text-center rounded p5 font-bold">Bill From</h2>
          <p className='text-bold font-extrabold text-xl'>Radiant Room Services</p>
          <p> Merchant ID: #00349FD</p>
          <p>Address:  Goriola Street, Off Adeola Odeku<br /> St. Victoria  Island, Lagos, State, Nigeria</p>
          <p>Email: radiantrooms@gmail.com</p>
        </div>
      </div>
     
        {/* Small Card */}
        <div className="flex border-2 p-2 ml-4  bg-customTeal rounded-lg font-semibold">
          <div className="w-1/12">No.</div>
          <div className="w-4/12">Service Description</div>
          <div className="w-4/12">Price</div>
          <div className="w-4/12">Quantity</div>
          <div className="w-4/12">Total</div>
        </div>

        {/* Rows */}
        {[...Array(5).keys()].map((index) => (
          <div key={index} className="flex border-b border-gray-400 my-4 mt-5 p-2 ">
            <div className="w-2/12">{index + 1}</div>
            <div className="w-4/12 flex justify-start">
              Dry Cleaning
            </div>
            <div className="w-4/12">Buchi Paints</div>
            <div className="w-4/12">Screeding</div>
            <div className="w-4/12">Order</div>
          </div>
        ))}


      {/* Total Card */}
      <div className="flex items-end justify-end mt-10 mr-32 mb-8">
        <div className=' justify-between flex '>
            <div className='mr-10'>
          <p>Sub Total</p>
          <p>Discount</p>
          <p>Task(1%)</p>
          <p className='bg-customBlue text-lg font-bold'>Total</p>
        </div>
        <div >
          <p>#100,000.00</p>
          <p>00.00</p>
          <p>#300.00</p>
          <p className='text-lg font-bold'>#100,00.00</p>
        </div>
      </div>
      </div>
      {/* Thank You */}
      <div className="mb-8 font-bold text-center  text-lg">
        <p>Thank you for your business</p>
      </div>

      {/* Contact Information */}
      <div className="text-center mb-8">
        <p>For any assistance or enquiry about this invoice, please do contact us</p>
        <div className="flex justify-center items-center">
          <img src={mail} alt="Mail Logo" className="w-8 h-8 mr-2" />
          <p>radianthelp@gmail.com</p>
          <img src={phone} alt="Phone Logo" className="w-8 h-8 ml-2" />
          <p>Hotline: +234 455 555 5545</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between">
        <p className='flex'>Generated with <img src={paypro} alt="Paypro Logo" className="w-8 h-8" /> </p>
        <img src={share} alt="Share Icon" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default InvoiceTemp;
