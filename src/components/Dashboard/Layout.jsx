import React from "react";
import Header from "./Header";
import Footer from "../../views/landingPage/Footer";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  console.log("Redered");
  return (
    <div className="bg-[#EDF1F5]">
      {/* header  */}
      <Header />
      {/* main  */}
      <div className="container w-[85vw] mx-auto my-5 grid  grid-cols-7 gap-6 ">
        {/* sidebar  */}
        <SideBar />
        {/* main content  */}
        <div className="text-md col-span-5">{children}</div>
      </div>

      {/* footer  */}
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
