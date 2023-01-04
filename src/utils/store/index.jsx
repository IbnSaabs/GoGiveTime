import avatar1 from "../../assets/Landing_Page_Images/sidebar/avatar1.svg";
import avatar from "../../assets/Landing_Page_Images/sidebar/avatar.svg";
import avatar2 from "../../assets/Landing_Page_Images/sidebar/avatar3.svg";
import avatar3 from "../../assets/Landing_Page_Images/sidebar/avatar4.svg";
import group from "../../assets/Landing_Page_Images/sidebar/Group.svg";
import group1 from "../../assets/Landing_Page_Images/sidebar/Group (1).svg";
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  user: [
    {
      id: 1,
      img: avatar1,
      name: "Dmitry Kargaev Asamoah",
      career: "Freelance UX/UI designer",
      location: "Ghana",
      hours: 845,
      rating: 562,
      events: 30,
      post: 20,
      follwers: 20,
      follwing: 20,
    },
  ],
  events: [
    {
      id:1,
      img:avatar2,
      heading:"Food Donation ",
      groupImg: group,
      groupImg1: group1,
      location:"36 Guild Street London, UK ",
    },
    {
      id:2,
      img:avatar,
      heading:"Food Donation ",
      groupImg: group,
      groupImg1: group1,
      location:"36 Guild Street London, UK ",
    },
    {
      id:3,
      img:avatar3,
      heading:"Food Donation ",
      groupImg: group,
      groupImg1: group1,
      location:"36 Guild Street London, UK ",
    }
  ]
});
export { setGlobalState, useGlobalState, getGlobalState };
