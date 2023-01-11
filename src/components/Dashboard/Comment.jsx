import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaReply } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import profilePhoto from "../../assets/comment_profile_photo.svg";
import commentOwnerPhoto from "../../assets/profilePhoto.svg";

const filterData = [
  {
    id: 1,
    title: "Most Recent",
  },
  {
    id: 2,
    title: "Most Relevant",
  },
  {
    id: 3,
    title: "All",
  },
];

const Comment = ({ comments }) => {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [filter, setFilter] = React.useState("Most Recent");

  const handleCommentsFilter = (title) => {
    setFilter(title);
    setFilterOpen(false);
  };
  console.log("commentss", comments);

  return (
    <div className="w-full bg-white px-2 sm:px-8 pb-5">
      <div className="flex items-center pt-5 hover:cursor-pointer text-gray-500 hover:text-gray-600">
        {/* <p className="text-lg font-semibold  mr-3">Most Recent</p>
        <IoMdArrowDropdown size={25} /> */}

        <div>
          <button
            className="text-lg font-semibold px-4 py-2.5 text-center inline-flex items-center relative"
            type="button"
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            {filter}
            <IoMdArrowDropdown size={25} className="ml-3" />
          </button>
          <div
            className={`${
              !filterOpen && "hidden"
            } z-10  bg-white divide-y divide-gray-100 rounded shadow w-44 absolute`}
          >
            <ul className="py-1 text-sm text-gray-700">
              {filterData.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleCommentsFilter(item.title)}
                >
                  <div className="block px-4 py-2 hover:bg-gray-100">
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {comments?.map((comment) => (
        <div key={comment.id} className="mt-5 mb-5 grid grid-cols-7 sm:gap-2">
          <div className="col-span-1  ">
            <img
              src={comment.img}
              className="mx-auto h-10 w-10 sm:h-16 sm:w-16 rounded-full object-cover "
              alt="Profile photo"
            />
          </div>
          <div className="col-span-6 flex flex-col relative pl-1 sm:pl-0">
            <div className="flex justify-between items-center mb-5 ">
              <div className="flex items-center">
                <p className="text-sm sm:text-base font-semibold mr-4">
                  {comment.name}
                </p>
                <p className="text-xs sm:text-base font-normal text-gray-500 mr-1">
                  1 Week ago
                </p>
              </div>
              {comment.owner ? (
                <div className="flex flex-col sm:flex-row justify-between sm:items-center  sm:gap-8 ">
                  <div className="flex items-center gap-1.5 text-[#EC3138] hover:cursor-pointer hover:text-[#c9292e]  absolute bottom-0 right-0 sm:relative">
                    <MdOutlineDelete size={16} />
                    <p className="text-xs sm:text-base font-medium">Delete</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#01B0F1] hover:cursor-pointer hover:text-[#0cb4f1bd] ">
                    <MdOutlineModeEditOutline size={16} />
                    <p className="text-xs sm:text-base font-medium">Edit</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-[#01B0F1] hover:cursor-pointer hover:text-[#0cb4f1bd]">
                  <FaReply size={14} />
                  <p className="text-xs sm:text-base font-medium">Reply</p>
                </div>
              )}
            </div>
            <div className="mb-3 pb-3">
              <p className="text-sm sm:text-base text-gray-500">
                {comment.comment}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div>
        <p className="text-lg font-semibold  text-gray-500 hover:text-gray-600 hover:cursor-pointer mb-8">
          Load More Comments
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="w-full grid grid-cols-9 sm:gap-3 mb-4 ">
            <div className="col-span-1 sm:col-span-1 sm:self-start sm:place-self-end ">
              <img
                src={commentOwnerPhoto}
                className="rounded-full object-cover h-8 w-8 sm:h-10 sm:w-10"
                alt="owner profile photo"
              />
            </div>
            <div className="col-span-8 sm:col-span-6 px-4 ml-1 sm:ml-0 py-2 mb-2 sm:mb-0 bg-white border-2 border-gray-400 rounded-lg">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="3"
                className="w-full px-0 resize-none  text-gray-500 bg-white border-0 focus:ring-0"
                placeholder="Add a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="col-span-9 sm:col-span-2 place-self-end border sm:self-start sm:place-self-start w-1/3 sm:w-2/3 py-2.5  font-semibold text-center text-white bg-[#01B0F1] rounded-md focus:ring-4 focus:ring-blue-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
