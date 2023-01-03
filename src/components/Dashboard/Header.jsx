import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/ggt_logo.svg";

const NavItems = [
  {
    id: 1,
    title: "Home",
    to: "/dashboard",
  },
  {
    id: 2,
    title: "Events",
    to: "/events",
  },
  {
    id: 3,
    title: "Profile",
    to: "/profile",
  },
  {
    id: 4,
    title: "Message",
    to: "/messages",
  },
  {
    id: 5,
    title: "Notification",
    to: "/notifications",
  },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white  sm:px-4 py-2.5 sticky w-full z-20 top-0 border-b border-gray-200 ">
      <div className="container flex flex-wrap items-center justify-between w-[85vw] mx-auto ">
        <Link to="/" className="flex items-center ">
          <img
            src={logo}
            className="h-6 mr-3 sm:h-16"
            alt="Go give time Logo"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap">
            GoGiveTime
          </span>
        </Link>
        <div className="flex md:order-2 md:hidden">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fillRule="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mr[-4px] "
          id="navbar-sticky"
        >
          <ul className="flex flex-col  py-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            {NavItems.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>
                  <button
                    type="button"
                    class={`${
                      pathname === item.to && "bg-[#01B0F1] text-white"
                    }  hover:bg-[#01B0F1] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#01b1f1bd] font-semibold text-md rounded-md  px-7 py-3 text-center  md:mr-0 `}
                  >
                    {item.title}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
