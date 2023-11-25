import React from "react";
import userCardLogo from "../../assets/logos/user-card-logo.svg";
import bankCardsLogo from "../../assets/logos/bank-cards-logo.svg";
import invoiceLogo from "../../assets/logos/invoice-logo.svg";

const Offer = () => {
  return (
    <div className=" mb-20">
      <h1 className="mt-20 text-center text-3xl font-extrabold mb-20">
        What Are We Offering You?
      </h1>

      <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Card - Profile Management */}
        <div className="bg-white p-6 ">
          <img
            src={userCardLogo}
            alt="User Card Logo"
            className="mx-auto mb-4"
          />
          <h4 className="text-center text-xl font-semibold mb-2">
            Profile Management
          </h4>
          <p>
            Our platform is tailored to
            <br /> suit your needs and provide the
            <br /> services for creating profiles for each <br />
            of your clients.
          </p>
        </div>

        {/* Second Card - Payment Management */}
        <div className="bg-white p-6 text-center ">
          <img
            src={bankCardsLogo}
            alt="Bank Cards Logo"
            className="mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Payment Management</h4>
          <p>
            Our platform is tailored to <br />
            suit your needs and provide the
            <br />
            services for tracking payment <br />
            transactions.
          </p>
        </div>

        {/* Third Card - Invoice Management */}
        <div className="bg-white p-6  ">
          <img src={invoiceLogo} alt="Invoice Logo" className="mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Invoice Management</h4>
          <p>
            Our platform is tailored to <br />
            suit your needs and provide the
            <br />
            services for receiving real-time <br />
            alerts for unpaid invoices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
