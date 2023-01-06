import React from "react";
import sidebar from "../../assets/Sidebar.png";
import recommended from "../../assets/recommended.png";
import { useLocation } from "react-router";
import ProfileCard from "../Sidebar";
import RecommendedEvents from "../RecommendedEvents";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="col-span-2 w-full " aria-label="Sidebar">
      <div className="overflow-y-auto">
        {pathname === "/dashboard" && (
          //  replace below image with sidebar component
          // <img src={sidebar} className="w-full mb-5" alt="sidebar element" />
          <ProfileCard />
        )}
        <div className="w-full hidden lg:block border">
          {/* replace below image with recommended post component */}
          {/* <img src={recommended} alt="recommended element" /> */}
          <RecommendedEvents />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
