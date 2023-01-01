import play from "../../assets/Landing_Page_Images/Group.svg"

const Hero = () => {
  return (
    <div className="hero flex justify-center">
      <div className="top-[294px] h-[352px] w-[645px] absolute">
        <h1 className="font-bold text-[64px] leading-[68.7px] text-[#01B0F1]">
          You
          <span className="text-[#EC3138]"> Volunteer,</span>
          You <br />
          <span className="text-[#EC3138]"> Grow </span>
          and you
          <span className="text-[#EC3138]"> Lead!</span>
        </h1>
        <p className="text-center top-[462px] h-[84px] w-[637px] left-[447px] font-[300px] text-[28px] leading-[28.8px] mt-4">
          “Go on, start a volunteering event to solve a social challenge in your
          communities where you live, work or school and socialize.”
        </p>
        <div className="flex justify-center mt-8">
          <div className="flex items-center p-0 top-[590px] h-[56px] w-[389px] left-[563px] gap-[24px]">
            <button className="py-4 px-10 border-[2px] border-[#EE364F] bg-[#EE364F] text-[#FFFFFF] font-bold rounded-[10px]">
              Sign Up
            </button>
            <div className="flex justify-center items-center p-0 top-[12px] h-[84px] w-[183px] left-[13.5px] gap-[8px]">
              <img src={play} alt="" />
              <button className="text-[#01B0F1] text-[24px] leading-[24px] h-[24px] font-medium">
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
