import React from "react";
import Header from "./Header";
import Footer from "../../views/landingPage/Footer";
import SideBar from "./SideBar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-[#EDF1F5]">
      {/* header  */}
      <Header />
      {/* main section */}
      <div className="container w-[90vw] lg:w-[85vw] mx-auto my-5 grid grid-cols-1 lg:grid-cols-7 lg:gap-6 ">
        {/* sidebar  */}
        <SideBar />
        {/* main content  */}
        <div className="lg:col-span-5">{children}</div>
      </div>

      {/* footer  */}
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

// export default Layout;
