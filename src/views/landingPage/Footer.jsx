import React from "react";
import logo from "../../assets/Landing_Page_Images/GoGive_Time 3 (1).svg";
import apple from "../../assets/Landing_Page_Images/apple.svg";
import google from "../../assets/Landing_Page_Images/google.svg";
import facebook from "../../assets/Landing_Page_Images/facebook.svg";
import twitter from "../../assets/Landing_Page_Images/twitter.svg";
import youtube from "../../assets/Landing_Page_Images/youtube.svg";
import tictok from "../../assets/Landing_Page_Images/tictok.svg";
import instagram from "../../assets/Landing_Page_Images/instagram.svg";
import linkedin from "../../assets/Landing_Page_Images/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <div className="md:flex md:justify-between md:items-center w-full md:h-[279px] md:pr-10  p-4 md:p-0 space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:block md:w-[320.88px] sm:h-[161px] top-[36px] md:ml-[50px] space-y-4">
          <div className="flex items-center w-[150.44px] sm:w-[320.88px] h-[50px] sm:h-[100px] gap-[10px]">
            <img
              src={logo}
              alt=""
              className="w-[40.44px] sm:w-[80.88px] h-[50px] sm:h-[100px]"
            />
            <p className="w-[230px] left-[90.88px] font-bold text-[15px] sm:text-[36px] leading-[46.87px] tracking-[2%]">
              GoGive Time
            </p>
          </div>
          <div className="flex w-[296px] left-[86px] gap-5">
            <img src={apple} alt="" className="" />
            <img src={google} alt="" className="" />
          </div>
        </div>
        <div className="flex justify-between sm:justify-evenly md:justify-between w-full md:w-[413px] sm:h-[156px]">
          <div className="w-[130px] top-[50px] left-[516px] space-y-4 font-semibold text-[14px] sm:text-[16px] text-[#0E0F1D]">
            <p>Beneficiary</p>
            <p>How It Works</p>
            <p>Volunteer Stories</p>
            <p>Leaderboard</p>
          </div>
          <div className="w-[138px] top-[50px] left-[676px] space-y-4 font-semibold text-[14px] sm:text-[16px] text-[#0E0F1D]">
            <p>About Us</p>
            <p>Partner With Us</p>
            <p>Support Us</p>
            <p>Jobs & Internships</p>
          </div>
          <div className="w-[86px] top-[50px] left-[843px] space-y-4 font-semibold text-[14px] sm:text-[16px] text-[#0E0F1D]">
            <p>FAQ</p>
            <p>Policies</p>
            <p>Contact Us</p>
            <p>Knowledge</p>
          </div>
        </div>
        <div className="sm:flex sm:justify-center  md:w-[372px] top-[50px] md:left-[1032px] gap-[19px] ">
          <div className="md:w-[372px] h-[150px] rounded-[5px]  space-y-4">
            <p className="font-medium text-[14px] leading-[18.23px] text-[#0E0F1D] ">
              Subscribe to our newsletter to get updates on our latest stories!
            </p>
            <div className="flex justify-between sm:w-[372px] h-[46px] top-[50px] rounded-[5px] bg-[#F5F5F5] overflow-hidden my-4">
              <input
                type="email"
                id="typeEmail"
                className="border-none outline-none bg-transparent"
                placeholder="Your email"
              />
              <button className="w-[120px] px-[12px] left-[255px] gap-[10px] bg-black text-white font-light text-[16px] leading-[24px]">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center h-[36px] top-[115px] left-[111px] gap-[10px] ">
              <div className="w-[68px] h-[36px] rounded-[5px] p-[10px] text-[#01B0F1] border border-[#01B0F1]">
                <p className="font-medium text-[12px] leading-[15.62px]">
                  Male
                </p>
              </div>
              <div className="w-[68px] h-[36px] rounded-[5px] p-[10px] text-[#01B0F1] border border-[#01B0F1] box-border">
                <p className="font-medium text-[12px] leading-[15.62px]">
                  Female
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[134px] sm:h-[86px] sm:top-[279px] bg-black flex flex-col-reverse sm:flex-row sm:justify-between justify-center items-center sm:pr-10 ">
        <p className="text-[white] font-medium text-[16px] sm:ml-[50px] ">
          © 2023 GoGive Time All Rights Reserved{" "}
        </p>
        <div className="w-[219px] h-[24px] flex justify-between  mb-6 sm:mb-0 ">
          <img
            src={instagram}
            alt=""
            className="w-[16.01px] sm:w-[24px] h-[15.76px] sm:h-[24px]"
          />
          <img
            src={facebook}
            alt=""
            className="w-[16.01px] sm:w-[24px] h-[15.76px] sm:h-[24px]"
          />
          <img
            src={twitter}
            alt=""
            className="w-[16.01px] sm:w-[24px] h-[15.76px] sm:h-[24px]"
          />
          <img
            src={linkedin}
            alt=""
            className="w-[16.01px] sm:w-[24px] h-[15.76px] sm:h-[24px]"
          />
          <img
            src={youtube}
            alt=""
            className="w-[16.01px] sm:w-[24px] h-[15.76px] sm:h-[24px]"
          />
          <img
            src={tictok}
            alt=""
            className="w-[16.01px] sm:w-[24px] h-[15.76px] sm:h-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
