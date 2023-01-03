import React from "react";
import sidebar from "../../assets/Sidebar.png";
import recommended from "../../assets/recommended.png";

const SideBar = () => {
  return (
    <aside className="col-span-2 w-full " aria-label="Sidebar">
      <div className="overflow-y-auto">
        {/* <ul className="space-y-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
          ))}
        </ul> */}
        <img src={sidebar} className="w-full mb-5" alt="" />
        <img src={recommended} className="w-full" alt="" />
      </div>
    </aside>
  );
};

export default SideBar;
