import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/ggt_logo.svg";

const Logo = ({ className }) => {
  return (
    <Link to="/" className="flex items-center ">
      <img src={logo} className={className} alt="Go give time Logo" />
      <span className="self-center text-xl font-bold whitespace-nowrap">
        GoGiveTime
      </span>
    </Link>
  );
};

export default Logo;
