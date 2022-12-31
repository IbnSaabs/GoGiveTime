import React from "react";
import { Link } from "react-router-dom";
import success from "../../assets/interest/success.gif";
import InterestPageLayout from "../../components/Interest/InterestPageLayout";

const RegistrationSuccess = () => {
  return (
    <>
      <InterestPageLayout
        className="relative h-[calc(100vh-73px)] flex items-center justify-center"
        cardClassName="flex items-center flex-col shadow-lg rounded-3xl border  w-[90%] sm:w-4/6 lg:w-3/6 bg-white z-10  py-5  "
      >
        <img src={success} alt="" className="w-1/4 " />
        <p className="text-xl sm:text-3xl  font-medium mx-auto my-5">
          Successful Registration
        </p>
        <div className="mt-5 text-center self-stretch mb-14">
          <Link to="/login">
            <button
              type="button"
              className="text-white w-4/5 sm:w-1/2 border  bg-[#01B0F1] hover:bg-[#039ad1] focus:ring-4 focus:ring-blue-300 shadow-sm font-medium rounded-[10px] text-sm px-5 py-2.5 "
            >
              Login
            </button>
          </Link>
        </div>
      </InterestPageLayout>
    </>
  );
};

export default RegistrationSuccess;
