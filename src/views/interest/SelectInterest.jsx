import React, { useState } from "react";
import icon1 from "../../assets/interest/goals/sdg_icons_color_goal_1.svg";
import icon2 from "../../assets/interest/goals/sdg_icons_color_goal_2.svg";
import icon3 from "../../assets/interest/goals/sdg_icons_color_goal_3.svg";
import icon4 from "../../assets/interest/goals/sdg_icons_color_goal_4.svg";
import icon5 from "../../assets/interest/goals/sdg_icons_color_goal_5.svg";
import icon6 from "../../assets/interest/goals/sdg_icons_color_goal_6.svg";
import icon7 from "../../assets/interest/goals/sdg_icons_color_goal_7.svg";
import icon8 from "../../assets/interest/goals/sdg_icons_color_goal_8.svg";
import icon9 from "../../assets/interest/goals/sdg_icons_color_goal_9.svg";
import icon10 from "../../assets/interest/goals/sdg_icons_color_goal_10.svg";
import icon11 from "../../assets/interest/goals/sdg_icons_color_goal_11.svg";
import icon12 from "../../assets/interest/goals/sdg_icons_color_goal_12.svg";
import icon13 from "../../assets/interest/goals/sdg_icons_color_goal_13.svg";
import icon14 from "../../assets/interest/goals/sdg_icons_color_goal_14.svg";
import icon15 from "../../assets/interest/goals/sdg_icons_color_goal_15.svg";
import icon16 from "../../assets/interest/goals/sdg_icons_color_goal_16.svg";
import icon17 from "../../assets/interest/goals/sdg_icons_color_goal_17.svg";
import heart from "../../assets/interest/heart.png";

import InterestPageLayout from "../../components/Interest/InterestPageLayout";
import { Link } from "react-router-dom";

const interests = [
  {
    id: 1,
    icon: icon1,
  },

  {
    id: 2,
    icon: icon2,
  },
  {
    id: 3,
    icon: icon3,
  },
  {
    id: 4,
    icon: icon4,
  },
  {
    id: 5,
    icon: icon5,
  },
  {
    id: 6,
    icon: icon6,
  },
  {
    id: 7,
    icon: icon7,
  },
  {
    id: 8,
    icon: icon8,
  },
  {
    id: 9,
    icon: icon9,
  },
  {
    id: 10,
    icon: icon10,
  },
  {
    id: 11,
    icon: icon11,
  },
  {
    id: 12,
    icon: icon12,
  },
  {
    id: 13,
    icon: icon13,
  },
  {
    id: 14,
    icon: icon14,
  },

  {
    id: 15,
    icon: icon15,
  },
  {
    id: 16,
    icon: icon16,
  },
  {
    id: 17,
    icon: icon17,
  },
];

const SelectInterests = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (id) => {
    const itemExist = selected.includes(id);

    if (itemExist) {
      const newSelected = selected.filter((item) => item !== id);
      setSelected(newSelected);
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  return (
    <InterestPageLayout
      btnText="Sign in"
      btnPath="/sign-in"
      className="relative h-[calc(100vh-73px)] flex items-center justify-center"
      cardClassName="flex flex-col justify-center  shadow-lg rounded-3xl border max-h-[90%] w-5/6 sm:w-4/6 lg:w-3/6 bg-white z-10 px-[22px] py-5"
      title="Select Your Interest"
      subTitle="Your feed will be personalized based on your interests. Don’t
              worry you can change it later."
      linkTo="/sign-in"
    >
      {/* card header end  */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5  ">
        {interests.map((item) => (
          <div
            key={item.id}
            className="relative hover:cursor-pointer"
            onClick={() => handleClick(item.id)}
          >
            <img
              src={item.icon}
              className="object-contain w-full "
              alt={`icon ${item.id.toString()}`}
            />
            {/* overlay  */}
            {selected.includes(item.id) && (
              <div>
                <div
                  className="absolute top-0 bottom-0 right-0 left-0 
                bg-[#ffffffcc] "
                ></div>
                <img
                  src={heart}
                  className="absolute w-7 left-1/2 opacity-80 top-1/2 translate-x-[-50%] translate-y-[-50%] "
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* card action  */}
      <div className="my-8 text-center ">
        <Link to={"/add-expertise"}>
          <button
            type="button"
            className="text-white w-4/5 sm:w-1/2 mt-5 border  bg-[#01B0F1] hover:bg-[#039ad1] focus:ring-4 focus:ring-blue-300 shadow-md font-medium rounded-[10px] text-sm px-5 py-2.5 mx-auto mb-2 "
          >
            Continue
          </button>
        </Link>
      </div>
    </InterestPageLayout>
  );
};

export default SelectInterests;
