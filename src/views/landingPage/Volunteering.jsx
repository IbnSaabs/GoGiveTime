import React from "react";
import gif1 from "../../assets/Landing_Page_Images/gifs/gif17.gif";
import gif2 from "../../assets/Landing_Page_Images/gifs/gif16.gif";
import gif3 from "../../assets/Landing_Page_Images/gifs/gif15.gif";
import gif4 from "../../assets/Landing_Page_Images/gifs/gif6.gif";
import gif5 from "../../assets/Landing_Page_Images/gifs/gif7.gif";
import gif6 from "../../assets/Landing_Page_Images/gifs/gif8.gif";
import gif7 from "../../assets/Landing_Page_Images/gifs/gif14.gif";
import gif8 from "../../assets/Landing_Page_Images/gifs/gif13.gif";
import gif9 from "../../assets/Landing_Page_Images/gifs/gif12.gif";
import gif10 from "../../assets/Landing_Page_Images/gifs/gif11.gif";
import gif11 from "../../assets/Landing_Page_Images/gifs/gif10.gif";
import gif12 from "../../assets/Landing_Page_Images/gifs/gif9.gif";
import gif13 from "../../assets/Landing_Page_Images/gifs/no1.svg";
import gif14 from "../../assets/Landing_Page_Images/gifs/gif1.gif";
import gif15 from "../../assets/Landing_Page_Images/gifs/gif2.gif";
import gif16 from "../../assets/Landing_Page_Images/gifs/gif3.gif";
import gif17 from "../../assets/Landing_Page_Images/gifs/gif4.gif";
import gif18 from "../../assets/Landing_Page_Images/gifs/gif5.gif";

const Volunteering = () => {
  return (
    <div className="p-10 sm:h-[1040px] sm:top-[1822px] sm:left-[93px]">
      <Frames />
      <div
        className="w-[212px] sm:w-[796.46px] h-[52px] sm:h-[196px] top-[1475px] sm:top-[2244px] left-[110px] sm:left-[240px] flex flex-col justify-between items-center p-0 gap-[20px]    
      absolute"
      >
        <h1
          className="font-bold text-[12px] sm:text-[36px] leading-[12.84px] sm:leading-[50px] sm:w-[766px] sm:h-[200px] sm:top-[-2px] sm:left-[15.23px] text-[#252A34] text-center
        capitalize"
        >
          Through volunteering we can transfrom our world and achieve the UN
          agenda for sustainable development
        </h1>
      </div>
    </div>
  );
};

const Frames = () => {
  return (
    <div className="">
      <Frame4 />
      <div className="flex justify-between">
        <Frame2 />
        <Frame3 />
      </div>
      <Frame1 />
    </div>
  );
};
const Frame1 = () => {
  return (
    <div className="flex sm:h-[200px] top-[2662px] left-[96px] gap-[3px] sm:gap-[10px]">
      <div className="w-[200px] sm:h-[200px]">
        <img src={gif7} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px]">
        <img src={gif8} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px]">
        <img src={gif9} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px]">
        <img src={gif10} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px]">
        <img src={gif11} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px]">
        <img src={gif12} alt="" />
      </div>
    </div>
  );
};
const Frame2 = () => {
  return (
    <div className="w-fit sm:w-[200px] h-[180px] sm:h-[630px]  sm:top-[2032] sm:left-[93px] space-y-[3px] sm:space-y-[10px] ">
      <div className="w-[55px] sm:w-[200px] sm:h-[200px] mt-[3px] sm:mt-[10px]  sm:gap-[25px]">
        <img src={gif1} alt="" />
      </div>
      <div className="w-[55px] sm:w-[200px] sm:h-[200px]  top-[58px] sm:top-[210px]">
        <img src={gif2} alt="" />
      </div>
      <div className="w-[55px] sm:w-[200px] sm:h-[200px]  sm:top-[420px]">
        <img src={gif3} alt="" />
      </div>
    </div>
  );
};
const Frame3 = () => {
  return (
    <div className="w-fit sm:w-[200px] h-[180px] sm:h-[630px] sm:top-[2032px] left-[1146px] space-y-[3px] sm:space-y-[10px] ">
      <div className="w-[55px] sm:w-[200px] h-[55px] sm:h-[200px] mt-[3px] sm:mt-[10px]">
        <img src={gif4} alt="" />
      </div>
      <div className="w-[55px] sm:w-[200px] h-[55px] sm:h-[200px] ">
        <img src={gif5} alt="" />
      </div>
      <div className="w-[55px] sm:w-[200px] h-[55px] sm:h-[200px]">
        <img src={gif6} alt="" />
      </div>
    </div>
  );
};
const Frame4 = () => {
  return (
    <div className="flex sm:h-[200px] top-[2662px] left-[96px] gap-[3px] sm:gap-[10px] ">
      <div className="w-[200px] sm:h-[200px]">
        <img src={gif13} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px] left-[210px]">
        <img src={gif14} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px] left-[420px]">
        <img src={gif15} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px] left-[210px]">
        <img src={gif16} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px] left-[630px]">
        <img src={gif17} alt="" />
      </div>
      <div className="w-[200px] sm:h-[200px] left-[840px]">
        <img src={gif18} alt="" />
      </div>
    </div>
  );
};
export default Volunteering;
