import React from "react";

const Header = () => {
  return (
    <header className="border-b h-[73px] shadow-sm flex items-center ">
      <div className=" w-full flex justify-end mx-10">
        <button
          type="submit"
          className="text-white   bg-[#EC3138] hover:bg-[#b8262b] focus:ring-4 focus:ring-red-300 shadow-sm font-medium rounded-[8px]  px-5 py-2"
        >
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
