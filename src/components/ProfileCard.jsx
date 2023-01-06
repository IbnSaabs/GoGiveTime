import React from "react";
import { useGlobalState } from "../utils/store";
import stars from "../assets/Landing_Page_Images/sidebar/stars.svg"

const ProfileCard = () => {
  const [user] = useGlobalState("user");
  return (
    <div >
      {user.map((user, i) => (
        <User key={i} user={user} />
      ))}
    </div>
  );
};

const User = ({user}) => {
  return (
    <div className="bg-white w-full h-[520px]">
      <img src={user.img} className="" alt="" />
      <div className="flex flex-col items-center gap-4 pt-6 pb-4">
        <div className="text-center">
          <h1 className="text-[14px] font-bold">{user.name}</h1>
          <p className="text-[10px] font-medium">{user.career}</p>
          <p className="text-[10px] font-medium">{user.location}</p>
        </div>
        <div className="gap-[30px] flex justify-between">
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-[#01B0F1] text-[14px] font-medium tracking-[0.1px]">{user.hours}</h1>
            <p className="text-[12px] text-[#666666]">Hours</p>
          </div>
          <div className="w-[100px] flex flex-col items-center justify-between">
            <img src={stars} alt="" />
            <p className="text-[12px] text-[#666666]">Rating {user.rating} </p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-[#01B0F1] text-[14px] font-medium tracking-[0.1px]">{user.events}</h1>
            <p className="text-[12px] text-[#666666] tracking-[0.1px]">Events</p>
          </div>
        </div>
      </div>
      <div className="border-y p-4 flex flex-col items-center">
        <div className="flex justify-between w-[232px]">
          <p className="text-[14px] text-[#191919]">Posts</p>
          <p className="text-[#01B0F1] text-[12px] font-medium">{user.post}</p>
        </div>
        <div className="flex justify-between w-[232px]">
          <p className="text-[14px] text-[#191919]">Followers</p>
          <p className="text-[#01B0F1] text-[12px] font-medium">{user.follwers}</p>
        </div>
        <div className="flex justify-between w-[232px]">
          <p className="text-[14px] text-[#191919]"> Following</p>
          <p className="text-[#01B0F1] text-[12px] font-medium">{user.follwing}</p>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="w-[250px] gap-[14px] flex justify-between">
          <button className="w-[106px] h-[38px] p-[10px] rounded-[10px] bg-[#EC3138] text-white text-[14px] font-medium"> Share Profile</button>
          <button className="w-[130px] h-[38px] p-[10px] rounded-[10px]  bg-[#FFDF0D] text-white text-[14px] font-medium"> Invite Friends 3</button>
        </div> 
      </div>
    </div>
  );
};

export default ProfileCard;
