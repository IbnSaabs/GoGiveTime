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
    <div >
      <div className="flex justify-between items-center w-full h-[279px] pr-10">
        <div className="w-[320.88px] h-[161px] top-[36px] ml-[50px] space-y-4">
          <div className="flex items-center w-[320.88px] h-[100px] top-[36px] left-[78px] gap-[10px]">
            <img src={logo} alt="" className="w-[80.88px] h-[100px]" />
            <p className="w-[230px] h-[47px] top-[26.5px] left-[90.88px] font-bold text-[36px] leading-[46.87px] tracking-[2%]">
              GoGive Time
            </p>
          </div>
          <div className="flex w-[296px] h-[41px] top-[156px] left-[86px] gap-5">
            <img src={apple} alt="" className="" />
            <img src={google} alt="" className="" />
          </div>
        </div>
        <div className="flex justify-between w-[413px] h-[156px] top-[50px] left-[516px]">
          <div className="w-[130px] h-[156px] top-[50px] left-[516px] space-y-4 font-semibold text-[16px] text-[#0E0F1D]">
            <p>Beneficiary</p>
            <p>How It Works</p>
            <p>Volunteer Stories</p>
            <p>Leaderboard</p>
          </div>
          <div className="w-[138px] h-[156px] top-[50px] left-[676px] space-y-4 font-semibold text-[16px] text-[#0E0F1D]">
            <p>About Us</p>
            <p>Partner With Us</p>
            <p>Support Us</p>
            <p>Jobs & Internships</p>
          </div>
          <div className="w-[86px] h-[156px] top-[50px] left-[843px] space-y-4 font-semibold text-[16px] text-[#0E0F1D]">
            <p>FAQ</p>
            <p>Policies</p>
            <p>Contact Us</p>
            <p>Knowledge</p>
          </div>
        </div>
        <div className="w-[372px] h-[151px] top-[50px] left-[1032px] gap-[19px]">
          <div className="w-[372px] h-[96px] rounded-[5px]">
            <p className="font-medium text-[14px] leading-[18.23px] text-[#0E0F1D]">
              Subscribe to our newsletter to get updates on our latest stories!
            </p>
            <div class="flex justify-between w-[372px] h-[46px] top-[50px] rounded-[5px] bg-[#F5F5F5] overflow-hidden my-4">
              <input
                type="email"
                id="typeEmail"
                class="border-none outline-none bg-transparent"
                placeholder="Your email"
              />
              <button className="w-[120px] px-[12px] left-[255px] gap-[10px] bg-black text-white font-light text-[16px] leading-[24px]">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center h-[36px] top-[115px] left-[111px] gap-[10px]">
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
      <div className="w-full h-[86px] top-[279px] bg-black flex justify-between items-center pr-10">
        <p className="text-[white] font-medium text-[16px] ml-[50px]">© 2023 GoGive Time All Rights Reserved </p>
        <div className="w-[219px] h-[24px] flex justify-between">
            <img src={instagram} alt="" className="w-[24px] h-[24px]" />
            <img src={facebook} alt="" className="w-[24px] h-[24px]" />
            <img src={twitter} alt="" className="w-[24px] h-[24px]" />
            <img src={linkedin} alt="" className="w-[24px] h-[24px]" />
            <img src={youtube} alt="" className="w-[24px] h-[24px]" />
            <img src={tictok} alt="" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
