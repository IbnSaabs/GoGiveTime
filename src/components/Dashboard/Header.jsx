import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

// menu items
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

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { pathname } = useLocation();

  const toggleMobileNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white lg:px-4 py-2.5 sticky w-full z-20 top-0 border-b border-gray-200 ">
      <div
        className={`container flex flex-wrap items-center  w-[85vw] mx-auto  ${
          isOpen ? "justify-end" : "justify-between"
        }`}
      >
        {!isOpen && <Logo className="h-6 mr-3 lg:h-16" />}
        <div className="flex lg:order-2 lg:hidden z-20">
          <button
            onClick={toggleMobileNav}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <IoIosClose className="h-6 w-6" />
            ) : (
              <HiMenu className="w-6 h-6 " color="EC3138" />
            )}
          </button>
        </div>
        <div
          className={`${
            !isOpen && "hidden"
          } items-center justify-between w-full fixed lg:relative top-14 lg:top-0 left-0 right-0 lg:flex lg:w-auto lg:order-1 border lg:border-0 px-4 lg:px-0 bg-white`}
        >
          <ul className="flex flex-col  py-4 sm:mt-4  rounded-lg lg:flex-row lg:space-x-4 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 ">
            <div className="lg:hidden  flex items-center justify-center mb-3">
              <Logo className="h-20 mr-3" />
            </div>
            {NavItems.map((item) => (
              <li key={item.id} className="mt-2 lg:mt-0">
                <Link to={item.to}>
                  <button
                    type="button"
                    className={`${
                      pathname === item.to && "bg-[#01B0F1] text-white"
                    }  hover:bg-[#01B0F1] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#01b1f1bd] font-semibold text-md rounded-md  px-7 py-3 text-center  md:mr-0 w-full`}
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

export default React.memo(Header);
