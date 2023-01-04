import React from "react";
import { useGlobalState } from "../utils/store";
import { TfiMoreAlt } from "react-icons/tfi";
import pin from "../assets/Landing_Page_Images/sidebar/map-pin.svg"

const RecommendedEvents = () => {
  const [events] = useGlobalState("events");
  return (
    <div className="w-[308px]  text-center">
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
      <div className="flex justify-center p-4 shadow-md shadow-[#434343]">
        <div className="w-[250px] h-[241px] rounded-[5px] border p-2 space-y-2">
          <img
            src={event.img}
            alt=""
            className="w-[229.36px] h-[131px] rounded-[5px] border"
          />
          <h1>{event.heading}</h1>
          <div className="flex justify-between">
            <div className="flex justify-between items-center border">
              <img src={event.groupImg} alt="" />
              <p className="text-[10px] text-[#01B0F1]">+3</p>
            </div>
            <div className="flex justify-between items-center border">
              <img src={event.groupImg1} alt="" />
              <p className="text-[10px] text-[#01B0F1]">+20 Going</p>
            </div>
          </div>
          <div className="flex">
            <img src={pin} alt="" className="w-[16px]"/>
            <p className="text-[12px] text-[#434343]">{event.location}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecommendedEvents;
