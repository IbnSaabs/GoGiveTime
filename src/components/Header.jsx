import React from "react";
import logo from "../assets/GoGive_Time 3.svg";

const Header = () => {
  return (
    <header className=" absolute left-0 right-0 top-0 bottom[97.39%] h-[131.95px] box-border overflow-hidden z-50 bg-white py-2 px-4 border-b border-[#666666] ">
    <div className="flex justify-between w-[1144px]">
    <div className="flex items-center gap-[10px] h-[100px] w-[345px] top-[15px] ml-[50px]">
      <img src={logo} alt="" className="" />
      <h1 className="font-bold text-4xl">GoGive Time</h1>
    </div>
    <div className="flex items-center gap-[10px]">
      <button className="py-4 px-10 border-[2px] border-[#EE364F] text-[#EE364F] font-bold rounded-[10px]">
        Sign In
      </button>
      <button className="py-4 px-10 border-[2px] border-[#EE364F] bg-[#EE364F] text-[#FFFFFF] font-bold rounded-[10px]">
        Sign Up
      </button>
    </div>
    
    </div>
  </header>
  );
};

export default Header;
