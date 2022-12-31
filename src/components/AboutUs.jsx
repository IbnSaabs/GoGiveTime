import React from "react";
import Image1 from "../assets/Landing_Page_Images/Group 126.svg";

const AboutUs = () => {
  return (
    <div className="w-[1440px] h-[893px] top-[929px] left-0 flex justify-between">
      <div className="ml-[50px]">
        <img
          src={Image1}
          alt=""
          className="w-[700px] h-[643px] top-[1030px] "
        />
      </div>
      <div className="w-[604px] h-[242px] top-[980px] left-[640px] gap-[40px] flex flex-col items-center p-0 absolute">
        <div className="w-[604px] h-[146px] gap-[20px] flex flex-col items-center p-0">
          <h1 className="font-bold text-[36px] leading-[50px] w-[604px] h-[100px] text-[#252A34] capitalize">
            Plan an event to solve a social challenge in your community
          </h1>
          <p className="font-extrabold text-[40px] leading-[26px] w-[135px] h-[26px] top-[120px] left-[234.5px] text-[#01B0F1]">
            Go On!
          </p>
        </div>
        <button className="py-4 px-10 bg-[#EE364F] text-[#FFFFFF] font-bold rounded-[10px]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
