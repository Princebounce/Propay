import { useState } from "react";
import paypro from "../../assets/logos/PayPro.svg";
import control from "../../assets/logos/control-logo.svg";
import invoice from "../../assets/logos/invoice-logo.svg"; 
import notification from "../../assets/logos/notification-logo.svg"; 
import payment from "../../assets/logos/payment-logo.svg"; 
import todo from "../../assets/logos/todo-logo.svg"; 
import tracking from "../../assets/logos/tracking-logo.svg"; 
import client from "../../assets/logos/client-profile-logo.svg";
import help from "../../assets/logos/help-logo.svg";
import dashboard from "../../assets/logos/dashboard-logo.svg"; 
import settings from "../../assets/logos/settings-logo.svg"; 
// ... (your imports)

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", logo: dashboard },
    { title: "Client", logo: client },
    { title: "Payment", logo: payment },
    { title: "Invoice", logo: invoice },
    { title: "Tracking", logo: tracking },
    { title: "Notification", logo: notification },
    { title: "To-Do List", logo: todo },
    { title: "Help Center", logo: help, gap: true },
    { title: "Setting", logo: settings },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-customBlue h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          alt="control button"
          className={`absolute cursor-pointer -right-3 top-10 w-5   ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col items-center gap-y-2">
          <img
            src={paypro}
            alt="paypro logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white font-light text-xs duration-200 ${
              !open && "scale-0"
            }`}
          >
            Service Management Board
          </h1>
        </div>
        <div className="border-b border-gray-400 my-4"></div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              }`}
            >
              <img
                src={Menu.logo}
                alt={Menu.title}
                className={`${!open && "hidden"} origin-left duration-200`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;