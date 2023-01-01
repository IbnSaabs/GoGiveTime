import React from "react";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-2  mb-6 px-2 sm:px-10 lg:px-20 ">
        <div>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter you Institution"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your Program"
            required
          />
        </div>

        <select
          defaultValue="0"
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value="0">Level</option>
          <option value="1">100</option>
          <option value="2">200</option>
          <option value="3">300</option>
          <option value="4">400</option>
        </select>

        <div className="text-center mt-5">
          <Link to={"/registration-successfull"}>
            <button
              type="submit"
              className="text-white w-4/5 sm:w-1/2 border  bg-[#01B0F1] hover:bg-[#039ad1] focus:ring-4 focus:ring-blue-300 shadow-md font-medium rounded-[10px] text-sm px-5 py-2.5 mx-auto mb-2 "
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Student;
