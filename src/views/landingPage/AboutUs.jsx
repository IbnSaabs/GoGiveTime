import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Landing_Page_Images/Group 126.svg";

const AboutUs = () => {
  return (
    <div className="w-full sm:w-[1440px] h-[410.47px] sm:h-[893px] top-[383px] sm:top-[929px] left-[40px] sm:left-0 flex flex-col items-center sm:flex sm:justify-between sm:items-start">
      <div className="flex justify-center sm:justify-start sm:ml-[50px]">
        <img
          src={Image1}
          alt=""
          className="w-[350px] sm:w-[700px] h-[276.47px] sm:h-[643px] top-[383px] sm:top-[1030px] left-[40px] sm:left-0"
        />
      </div>
      <div className="w-[350px] sm:w-[604px] h-[124px] sm:h-[242px] top-[669.47px] sm:top-[1100px] left-[66px] sm:left-[640px] gap-[20px] sm:gap-[40px] flex flex-col items-center p-0 sm:absolute">
        <div className="w-[350px] sm:w-[604px] h-[78px] sm:h-[146px] gap-[10px] sm:gap-[20px] flex flex-col items-center p-0 text-center sm:text-start">
          <h1 className="font-bold text-[20px] sm:text-[36px] leading-[21.4px] sm:leading-[50px] w-[350px]  sm:w-[604px] h-[42px] sm:h-[100px] text-[#252A34] capitalize">
            Plan an event to solve a social challenge in your community
          </h1>
          <p className="font-extrabold text-[20px] sm:text-[40px] leading-[26px] w-[68px] sm:w-[135px] h-[26px] sm:h-[26px] top-[52px] sm:top-[120px] left-[115px] sm:left-[234.5px] text-[#01B0F1]">
            Go On!
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

export default AboutUs;
