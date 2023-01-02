import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";

const Carousel = ({ employess }) => {
  return (
    <div className=" relative">
      <HiOutlineArrowNarrowLeft
        className="left absolute w-5 h-6 sm:w-10 sm:h-8 left-0 lg:left-7 top-1/2 translate-y-[-50%] z-20  bg-[#01B0F1]"
        color="#fff"
      />
      <HiOutlineArrowNarrowRight
        className="right absolute w-5 h-6 sm:w-10 sm:h-8 right-0 lg:right-7 top-1/2 translate-y-[-50%] z-20 bg-[#01B0F1]"
        color="#fff"
      />
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay
        loop={true}
        navigation={{
          nextEl: ".right",
          prevEl: ".left",
        }}
      >
        {employess?.map((employer) => (
          <SwiperSlide key={employer.id}>
            <div className=" grid grid-cols-3 gap-1 sm:gap-2 lg:gap-4  lg:px-7">
              <div className="col-span-1 ">
                <img
                  src={employer.img}
                  alt={`image of ${employer.name}`}
                  className=" object-contain sm:h-[400px] mx-auto "
                />
              </div>
              <div className="flex flex-col items-center justify-center sm:gap-5 col-span-2 pr-6">
                <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-center">
                  {employer.name}
                </h1>
                <p className="text-sm sm:text-xl text-center sm:px-8 lg:px-14">
                  {employer.message}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
