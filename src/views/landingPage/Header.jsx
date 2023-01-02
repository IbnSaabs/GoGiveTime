import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Landing_Page_Images/GoGive_Time 3 (1).svg";

const Header = () => {
  return (
    <header className="w-full left-0 right-0 top-0 bottom[97.39%] h-[70px] sm:h-[131.95px] box-border overflow-hidden z-50 bg-white py-2 px-4 border-b border-[#666666] ">
      <div className="flex justify-between sm:ml-4 sm:mr-8 mx-2">
        <div className="flex items-center gap-[5px] sm:gap-[10px] h-[50px] sm:h-[100px] w-[141.44px] sm:w-[345px] top-[15px] left-[20px]">
          <img
            src={logo}
            alt=""
            className="w-[40.44px] h-[50px] sm:w-[80.88px] sm:h-[100px]"
          />
          <h1 className="font-bold sm:text-4xl text-[15px]">GoGive Time</h1>
        </div>
        <div className="flex items-center gap-[10px] sm:w-[350px]">
          <Link to={"/sign-in"}>
            <button className="border-[2px] border-[#EE364F] text-[#EE364F] text-[12px] sm:text-[20px] font-bold rounded-[2px] sm:rounded-[10px] w-[65px] sm:w-[145px] sm:h-[56px]">
              Sign In
            </button>
          </Link>
          <Link to={"/sign-up"}>
            <button className="border-[2px] border-[#EE364F] text-white bg-[#EE364F] text-[12px] sm:text-[20px] font-bold rounded-[2px] sm:rounded-[10px] w-[65px] sm:w-[145px] sm:h-[56px]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
