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

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard",  logo: dashboard },
    { title: "Client",  client},
    { title: "Payment",  payment },
    { title: "Invoice",  invoice },
    { title: "Tracking",  tracking},
    { title: "Notification",  notification },
    { title: "To-Do List",  todo },
    { title: "Help Center",  help , gap: true},
    { title: "Setting", settings },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-customBlue h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          alt="control button"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={paypro}
            alt="control-buttton"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.icon}
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
