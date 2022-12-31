import React from "react";
import { Link } from "react-router-dom";

const Professional = () => {
  return (
    <form>
      <div className="grid gap-2  mb-6 px-2 sm:px-10 lg:px-20 ">
        <select
          defaultValue="1"
          id="industry"
          name="industry"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value="1">Industry</option>
          <option value="2">200</option>
          <option value="3">300</option>
          <option value="4">400</option>
        </select>

        <div>
          <input
            type="text"
            name="profession"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Profession"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="organisation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Organisation"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="yoe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Years of Experience"
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

export default Professional;
