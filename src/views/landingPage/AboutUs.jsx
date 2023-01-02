import React from "react";
import Image1 from "../../assets/Landing_Page_Images/Group 126.svg";

const AboutUs = () => {
  return (
    <div className="w-[350px] sm:w-[1440px] h-[410.47px] sm:h-[893px] top-[383px] sm:top-[929px] left-[40px] sm:left-0 sm:flex sm:justify-between">
      <div className="ml-[50px]">
        <img
          src={Image1}
          alt=""
          className="w-[700px] h-[643px] top-[1030px] "
        />
      </div>
      <div className="w-[298px] sm:w-[604px] h-[124px] sm:h-[242px] top-[669.47px] sm:top-[980px] left-[66px] sm:left-[640px] gap-[20px] sm:gap-[40px] flex flex-col items-center p-0 absolute">
        <div className="w-[298px] sm:w-[604px] h-[78px] sm:h-[146px] gap-[10px] sm:gap-[20px] flex flex-col items-center p-0">
          {/* i stopped here */}
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
