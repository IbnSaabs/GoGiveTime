import React from "react";
import { Link } from "react-router-dom";

const Header = ({text}) => {
  return (
    <header className="border-b h-[73px] shadow-sm flex items-center ">
      <div className=" w-full flex justify-end mx-10">
        <Link
          to='/sign-in'
          type="button"
          className="text-white   bg-[#EC3138] hover:bg-[#b8262b] focus:ring-4 focus:ring-red-300 shadow-sm font-medium rounded-[8px]  px-5 py-2"
        >
          {text}
        </Link>
      </div>
    </header>
  );
};

export default Header;
