import React from "react";
import svg1 from "../../assets/pattern-top.svg";
import svg2 from "../../assets/pattern-bottom.svg";
import { FiArrowLeft } from "react-icons/fi";
import Header from "./Header";
import { Link } from "react-router-dom";

const InterestPageLayout = ({
  btnText,
  className,
  cardClassName,
  title,
  subTitle,
  linkTo,
  children,
}) => {
  return (
    <>
      <Header text={btnText} />
      <div className={className}>
        <img
          src={svg1}
          className="absolute top-0 left-0 w-1/2 sm:w-1/3"
          alt=""
        />
        <img
          src={svg2}
          alt=""
          className="absolute bottom-0 right-0 w-1/2 sm:w-1/3"
        />
        {/* card starts */}
        <div className={cardClassName}>
          <div
            className={`overflow-y-auto ${
              !title && " flex flex-col justify-center items-center"
            }`}
          >
            {/* card header  */}
            {title && (
              <div className="mb-5 px-[22px] sm:px-10 lg:px-16">
                <div className="flex mb-3 justify-between items-center ">
                  <div className=" text-xl hover:cursor-pointer">
                    <Link to={linkTo}>
                      <FiArrowLeft />
                    </Link>
                  </div>
                  <div className="text-xl sm:text-2xl  font-medium mx-auto">
                    {title}
                  </div>
                </div>
                <p className="text-center  font-normal text-xs sm:text-lg">
                  {subTitle}
                </p>
              </div>
            )}
            {/* card body  */}
            {children}
          </div>
        </div>
        {/* card end  */}
      </div>
    </>
  );
};

export default InterestPageLayout;
