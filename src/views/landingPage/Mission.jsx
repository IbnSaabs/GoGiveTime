import React from "react";

const Mission = () => {
  return (
    <div className="w-[1440px] h-[893px] top-[2862px] left-0 hidden sm:block">
      <div className="w-[679px] h-[296px] top-[3297px] left-[81px] gap-[40px] flex flex-col items-center p-0 absolute">
        <div className="w-[679px] h-[200px]  gap-[20px] flex flex-col items-center p-0">
          <p className="font-bold text-[36px] leading-[50px] text-[#252A34] capitalize">
            It is our mission at <span className="text-[#01B0F1]">GoGive Time</span>  to help you develop your leadership
            skill through community transformation efforts
          </p>
        </div>
        <button className="py-4 px-10 bg-[#EE364F] text-[#FFFFFF] font-bold rounded-[10px] flex ">
          Sign Up
        </button>
      </div>
      <div className="w-[700px] h-[643px] top-[2950px] ml-[500px] absolute mission"></div>
    </div>
  );
};

export default Mission;
