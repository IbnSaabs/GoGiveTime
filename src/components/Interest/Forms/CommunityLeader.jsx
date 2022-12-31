import React from "react";
import { Link } from "react-router-dom";

const CommunityLeader = () => {
  return (
    <form>
      <div className="grid gap-2  mb-6 px-2 sm:px-10 lg:px-20 ">
        <div>
          <input
            type="text"
            name="nameOfCommmunity"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter name of Community"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="Role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Role"
            required
          />
        </div>

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

export default CommunityLeader;
