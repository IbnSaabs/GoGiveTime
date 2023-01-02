import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Landing_Page_Images/Group 48095446.svg"

const MissionSmallScreen = () => {
  return (
    <div className="w-full sm:hidden h-[410.47px] top-[383px] left-[40px] flex flex-col items-center">
        <div className="flex justify-center sm:justify-start sm:ml-[50px]">
        <img
          src={Image1}
          alt=""
          className="w-[350px] h-[276.47px]  top-[383px]left-[40px]"
        />
      </div>
      <div className="w-[350px] h-[124px] left-[66px] gap-[20px] flex flex-col items-center p-0">
        <div className="w-[342px] h-[84px]  gap-[10px] flex flex-col items-center p-0 text-center">
          <p className="font-bold text-[20px] leading-[21.4px]  w-[350px] h-[42px] text-[#252A34] capitalize">
            It is our mission at <span className="text-[#01B0F1]">GoGive Time</span>  to help you develop your leadership
            skill through community transformation efforts
          </p>
        </div>
        <Link to={"/sign-up"}>
          <button className="border-[2px] border-[#EE364F] text-white bg-[#EE364F] text-[12px] sm:text-[20px] font-bold rounded-[2px] sm:rounded-[10px] w-[65px] sm:w-[145px] sm:h-[56px]">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MissionSmallScreen;
