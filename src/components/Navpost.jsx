import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdOutlineMoreVert } from "react-icons/md";

const Navpost = () => {
  return (
    <div className="w-full h-12 flex justify-between items-center bg-white  px-3 rounded-lg dark:bg-gray-800 dark:shadow-lg transition-all duration-300">
      <div className="flex items-center space-x-3">
        <div className="rounded-full p-2 bg-indigo-500 text-white">
          <FaUser className="text-xl" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="flex items-center space-x-1 bg-indigo-500 text-white px-2 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-300 focus:outline-none">
          <span>Read Post</span>
          <FaEdit className="text-md" />
        </button>

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300">
          <MdOutlineMoreVert className="text-2xl text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default Navpost;
