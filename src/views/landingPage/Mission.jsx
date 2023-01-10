import React from "react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="broder w-full h-[893px] hidden md:block">
      <div className="w-[679px] h-[296px] top-[3127px] left-[81px] gap-[40px] flex flex-col items-center p-0 absolute">
        <div className="w-[679px] h-[200px]  gap-[20px] flex flex-col items-center p-0">
          <p className="font-bold text-[36px] leading-[50px] text-[#252A34] capitalize">
            It is our mission at{" "}
            <span className="text-[#01B0F1]">GoGive Time</span> to help you
            develop your leadership skill through community transformation
            efforts
          </p>
        </div>
        <Link to={"/sign-up"}>
          <button className="border-[2px] border-[#EE364F] text-white bg-[#EE364F] text-[12px] sm:text-[20px] font-bold rounded-[2px] sm:rounded-[10px] w-[65px] sm:w-[100px] md:w-[145px] sm:h-[45px] md:h-[56px] transition ease-out delay-150 hover:scale-110 duration-300">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="w-[700px] h-[643px] top-[2800px] ml-[500px] absolute mission"></div>
    </div>
  );
};

export default Mission;
