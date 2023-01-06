import React from "react";
import { useGlobalState } from "../utils/store";
import { TfiMoreAlt } from "react-icons/tfi";
import pin from "../assets/Landing_Page_Images/sidebar/map-pin.svg";
import { BsBookmarkFill } from "react-icons/bs";

const RecommendedEvents = () => {
  const [events] = useGlobalState("events");
  return (
    <div className="bg-white mt-6 border text-center w-full">
      <div className="border-b [#F5F5F5] p-4 flex justify-between items-center">
        <h1 className="text-[#6C6C6C] text-[16px] font-medium ">
          Recommended Events
        </h1>
        <TfiMoreAlt className="text-[#D8D8D8] text-xl font-medium " />
      </div>
      {events.map((event, i) => (
        <Event key={i} event={event} />
      ))}
      <p className="text-[14px] text-[#20A6FC]">see all</p>
    </div>
  );
};

const Event = ({ event }) => {
  return (
    <div>
      <div className="flex justify-center p-4">
        <div className="w-[250px] h-[251px] rounded-[5px] shadow-lg shadow-[#a0a0a05a] p-2 space-y-2 relative">
          <div className="flex justify-between w-56 px-2 absolute z-20 top-8 ">
            <div className="px-2 p-1 bg-[#ffffffb6] text-[#EC3138] text-sm rounded-md leading-4">
              <p className="font-semibold">10</p>
              <p className="text-[10px]">JUNE</p>
            </div>
            <div className="p-2 h-8 bg-[#ffffffb6] rounded-md">
              <BsBookmarkFill className="text-md hover:text-[#01B0F1] text-white " />
            </div>
          </div>
          <img
            src={event.img}
            alt=""
            className="w-[229.36px] h-[131px] rounded-[5px] "
          />
          <div className="text-start">
            <h1 className="text-sm w-fit">{event.heading}</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between items-center">
              <img src={event.groupImg} alt="" />
              <p className="text-[10px] text-[#01B0F1]">+3</p>
            </div>
            <div className="flex justify-between items-center">
              <img src={event.groupImg1} alt="" />
              <p className="text-[10px] text-[#01B0F1]">+20 Going</p>
            </div>
          </div>
          <div className="flex">
            <img src={pin} alt="" className="w-[16px]" />
            <p className="text-[12px] font-thin text-[#434343]">{event.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedEvents;
