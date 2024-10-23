import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const toggleSearchBar = () => {
    setOpen(!open);
  };
  return (
    <div className="h-8 relative">
      <input
        type="text"
        required
        onClick={toggleSearchBar}
        placeholder="__"
        className={`rounded-2xl px-4 font-semibold transition-all duration-300 outline-none shadow-md 
            ${
              !open
                ? "w-24  border-2 h-full border-indigo-500"
                : "w-72  border-2 h-full border-gray-300"
            }
            bg-white dark:bg-gray-800 
            text-gray-700 dark:text-gray-200 
            placeholder-gray-400 dark:placeholder-gray-300
             
          `}
      />
      <span
        onClick={toggleSearchBar}
        className="absolute top-2 right-0 w-8 h-8"
      >
        <FaSearch className="text-gray-600 dark:text-gray-300" />
      </span>
      {open && (
        <button
          onClick={toggleSearchBar}
          className="absolute top-0 right-7 w-8 h-8 flex justify-center items-center  text-white rounded-full  transition-all duration-200"
        >
          <FaXmark className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>
      )}
      {/* {open && (
        <div className="absolute top-8 right-0 w-72 p-4 bg-white rounded-md shadow-md dark:bg-gray-800">
         
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;
