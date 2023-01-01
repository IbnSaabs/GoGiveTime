import React from "react";
import visa from "../../assets/Landing_Page_Images/Vector.svg";
import mastercard from "../../assets/Landing_Page_Images/mastercard.svg";
import vodafone from "../../assets/Landing_Page_Images/vodafone.svg";
import mtn from "../../assets/Landing_Page_Images/mtn.svg";
import airtel from "../../assets/Landing_Page_Images/airtel.svg";

const Donate = () => {
  return (
    <div className=" h-[233px] top-[4452px]">
      <div className="flex flex-col items-center w-[1,063.65] h-[214px] top-[2px] gap-[52px]">
        <h1 className="w-[170px] h-[62px] font-bold text-[48px] leading-[62.5px] text-center">Donate</h1>
        <div className="flex justify-between w-[1063.65px] h-[100px] top-[114px] gap-[100px]">
          <div className="w-[100px] h-[100px] pt-[35px]">
            <img
              src={visa}
              alt=""
              className="w-[91.36px] h-[30px] top-[38.54px] left-[15.63px]"
            />
          </div>
          <img src={mastercard} alt="" className="w-[136.25px] h-[100px] left-[200px]" />
          <img src={vodafone} alt="" className="w-[177.78px] h-[100px] left-[436.25px]" />
          <img src={mtn} alt="" className="w-[149.62px] h-[100px] left-[714.03px]" />
          <img src={airtel} alt="" className="w-[100px] h-[100px] left-[963.65px]" />

        </div>
      </div>
    </div>
  );
};

export default Donate;
