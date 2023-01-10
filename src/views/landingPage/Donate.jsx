import React from "react";
import visa from "../../assets/Landing_Page_Images/Vector.svg";
import mastercard from "../../assets/Landing_Page_Images/mastercard.svg";
import vodafone from "../../assets/Landing_Page_Images/vodafone.svg";
import mtn from "../../assets/Landing_Page_Images/mtn.svg";
import airtel from "../../assets/Landing_Page_Images/airtel.svg";

const Donate = () => {
  return (
    <div className="flex justify-center w-full h-[96px] sm:h-[180px] md:h-[233px] border-y border-[#EC3138]">
      <div className="flex flex-col items-center w-[345px] sm:w-[500px] md:w-[1063.65px] h-[45px] sm:h-[150px] md:h-[214px] top-[46px] sm:top-[2px] gap-[20px] md:gap-[52px] text-center">
        <h1 className="h-[26px] sm:h-[62px] font-bold text-[20px] sm:text-[38px] sm:leading-[62.5px]">Donate</h1>
        <div className="flex justify-between w-[345.46px] sm:w-[500px] md:w-[1063.65px] h-[50px] sm:h-[100px] top-[46px] sm:top-[114px]">
          <div className=" w-[50px] md:w-[100px] h-[50px] md:h-[100px] pt-[15px] md:pt-[35px]">
            <img
              src={visa}
              alt=""
              className="w-[45.68px] sm:w-[91.36px] h-[15px] md:h-[30px] top-[19.27px] sm:top-[38.54px] left-[7.81px] sm:left-[15.63px]"
            />
          </div>
          <img src={mastercard} alt="" className="w-[54px] md:w-[100px] h-[40px] md:h-[100px] left-[70px] sm:left-[200px]"/>
          <img src={vodafone} alt="" className="w-[50px] md:w-[120px] h-[40px] md:h-[100px] left-[144.5px] sm:left-[436.25px]"/>
          <img src={mtn} alt="" className="w-[50px] md:w-[120px] h-[40px] md:h-[100px] left-[235.61px] sm:left-[714.03px]"/>
          <img src={airtel} alt="" className="w-[50px] md:w-[120px] h-[50px] md:h-[100px] left-[315.46px] sm:left-[963.65px]"/>
        </div>
      </div>
    </div>
  );
};

export default Donate;