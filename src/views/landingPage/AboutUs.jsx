import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Landing_Page_Images/Group 126.svg";

const AboutUs = () => {
  return (
    <div className="md:bg-transparent mt-[-50px] w-full h-[410.47px] sm:h-[760px] md:h-[693px] flex flex-col items-center md:flex-row md:justify-between md:items-start">
      <div className="flex justify-center md:justify-start md:ml-[50px]">
        <img
          src={Image1}
          alt=""
          className="w-[350px] sm:w-[500px] md:w-[700px] h-[276.47px] sm:h-[500px] md:h-[643px]"
        />
      </div>
      <div className="w-[350px] sm:w-[500px] md:w-[604px] h-[124px] md:h-[242px] top-[669.47px] sm:top-[1050px] left-[66px] md:left-[640px] gap-[20px] md:gap-[40px] flex flex-col items-center p-0 md:absolute">
        <div className="w-[350px] sm:w-[604px] h-[78px] sm:h-[146px] gap-[10px] md:gap-[20px] flex flex-col items-center p-0 text-center md:text-start">
          <h1 className="font-bold text-[20px] sm:text-[28px] md:text-[36px] leading-[21.4px] sm:leading-[35px] md:leading-[50px] w-[350px]  sm:w-[604px] h-[42px] sm:h-[100px] text-[#252A34] capitalize">
            Plan an event to solve a social challenge in your community
          </h1>
          <p className="font-extrabold text-[20px] sm:text-[28px] md:text-[40px] leading-[26px] w-[68px] sm:w-[135px] h-[26px] top-[52px] sm:top-[120px] left-[115px] sm:left-[234.5px] text-[#01B0F1]">
            Go On!
          </p>
        </div>
        <Link to={"/sign-up"}>
          <button className="border-[2px] border-[#EE364F] text-white bg-[#EE364F] text-[12px] sm:text-[20px] font-bold rounded-[2px] sm:rounded-[10px] w-[65px] sm:w-[100px] md:w-[145px] sm:h-[45px] md:h-[56px] transition ease-out delay-150 hover:scale-110 duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
