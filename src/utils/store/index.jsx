import avatar1 from '../../assets/Landing_Page_Images/sidebar/avatar1.svg'
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  user: [
    {
        id:1,
        img:avatar1,
        name:"Dmitry Kargaev Asamoah",
        career:"Freelance UX/UI designer",
        location:"Ghana",
        hours:845,
        rating:562,
        events:30,
        post:20,
        follwers:20,
        follwing:20,
    },
],
});
export { setGlobalState, useGlobalState, getGlobalState };
