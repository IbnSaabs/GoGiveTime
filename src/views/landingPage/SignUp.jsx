import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center w-full h-[65px] sm:h-[126px] top-[1567px] sm:top-[3795px]">
      <div className="w-[342px] sm:w-[803px] gap-[20px] flex flex-col items-center p-0 sm:absolute space-y-2 sm:space-y-0">
        <h1 className="font-bold text-[18px] sm:text-[40px] gap-[10px] leading-[19.26px] sm:leading-[50px] sm:w-[803px] h-[19px] sm:h-[50px] sm:top-[-2px] left-[15.23px] text-[#252A34] text-center capitalize">
          You can also benefit from volunteering
        </h1>
        <Link to={"/sign-up"}>
          <button className="border-[2px] border-[#EE364F] text-white bg-[#EE364F] text-[12px] sm:text-[20px] font-bold rounded-[2px] sm:rounded-[10px] w-[65px] sm:w-[145px] sm:h-[56px] top-[39px]">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
