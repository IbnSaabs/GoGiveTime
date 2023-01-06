import React from "react";
import { Layout } from "../../../components/Dashboard";
import { TfiMoreAlt } from "react-icons/tfi";
import pin from "../../../assets/Landing_Page_Images/sidebar/map-pin.svg";
import { BsBookmarkFill } from "react-icons/bs";
import { useGlobalState } from "../../../utils/store";

const Events = () => {
  const [events] = useGlobalState("events");

  return (
    <Layout className="text-xl bg-white h-64 rounded-md p-5">
      <div className="w-[309px] border text-center bg-white">
        <div className="border-b [#F5F5F5] p-4 flex justify-between items-center">
          <h1 className="text-[#6C6C6C] text-[16px] font-medium ">
            Recommended Events
          </h1>
          <TfiMoreAlt className="text-[#D8D8D8] text-xl font-medium " />
        </div>
        {events.map((event, i) => (
          <div className="flex justify-center p-4" key={i} event={event}>
            <div className="w-[250px] h-fit rounded-[5px] shadow-lg shadow-[#a0a0a05a] p-2 space-y-2 relative">
              <div className="flex justify-between w-56 px-2 absolute z-20 top-8">
                <p className="w-14 bg-[#d1d1d1] text-red-600  rounded-md">
                  10 <br /> June
                </p>
                <div className="p-2 h-8 bg-[#d1d1d1] rounded-md">
                  <BsBookmarkFill className="text-lg text-white " />
                </div>
              </div>
              <img
                src={event.img}
                alt=""
                className="w-[229.36px] h-[131px] rounded-[5px] "
              />
              <h1 className="text-md">{event.heading}</h1>
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
                <p className="text-[12px] text-[#434343]">{event.location}</p>
              </div>
            </div>
          </div>
        ))}
        <p className="text-[14px] text-[#20A6FC]">see all</p>
      </div>
    </Layout>
  );
};

export default Events;
