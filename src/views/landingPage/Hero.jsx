import { Link } from "react-router-dom";
import play from "../../assets/Landing_Page_Images/Group.svg";

const Hero = () => {
  return (
    <div className="hero flex justify-center h-[417px] sm:h-[831px] bg-center sm:bg-top">
      <div className="mt-20 sm:top-[200px] h-[175px] sm:h-[352px] w-[300px] sm:w-[637px] sm:left-[390px] sm:absolute text-center">
        <h1 className="font-bold text-[20px] sm:text-[64px] leading-[21.47px] sm:leading-[68.7px] text-[#01B0F1]">
          You
          <span className="text-[#EC3138]"> Volunteer,</span>
          You <br />
          <span className="text-[#EC3138]"> Grow </span>
          and you
          <span className="text-[#EC3138]"> Lead!</span>
        </h1>
        <p className="text-center top-[202px] sm:top-[462px] h-[36px] sm:h-[84px] w-[300px] sm:w-[637px] left-[109px] sm:left-[447px] font-[300px] text-[12px] sm:text-[28px] sm:leading-[28.8px] mt-2 sm:mt-4">
          “Go on, start a volunteering event to solve a social challenge in your
          communities where you live, work or school and socialize.”
        </p>
        <div className="flex justify-center mt-6 sm:mt-8">
          <div
            className="flex items-center p-0 top-[253px] sm:top-[590px] h-[26px] sm:h-[56px] w-[175px] sm:w-[389px] left-[147px]    
          sm:left-[563px] gap-[12px] sm:gap-[24px]"
          >
            <Link to={"/sign-up"}>
              <button className="border-[2px] border-[#EE364F] text-white bg-[#EE364F] text-[12px] sm:text-[20px] font-bold rounded-[2px] sm:rounded-[10px] w-[65px] sm:w-[145px] sm:h-[56px]">
                Sign Up
              </button>
            </Link>
            <div className="flex justify-center items-center p-0 top-[12px] h-[24px] sm:h-[84px] w-[92px] sm:w-[183px] left-[13.5px] gap-[4px] sm:gap-[8px]">
              <img
                src={play}
                alt=""
                className="w-[10px] sm:w-[20px] h-[10px] sm:h-[20px] top-[1px] sm:top-[2px] left-[1px] sm:left-[2px]"
              />
              <button className="text-[#01B0F1] left-[16px] sm:left-[0] text-[12px] sm:text-[24px] leading-[24px] h-[24px] font-medium">
                How it Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
