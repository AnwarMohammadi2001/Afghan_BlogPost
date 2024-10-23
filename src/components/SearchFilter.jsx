import React, { useState } from "react";
import DropdownFilter from "./DropdownFilter";
import { FaSearch } from "react-icons/fa";
import CategoryFiltering from "./categoryFiltering";

const SearchFilter = () => {
  function formHandler(e) {
    e.preventDefafult();
  }
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg dark:bg-gray-800 transition-all duration-300">
      <div className="flex justify-between w-full container">
        <div>
          <form action="" onSubmit={formHandler} className="flex items-center ">
            <input
              type="text"
              placeholder="Search posts by title..."
              className="w-80 p-2 border border-gray-300 rounded-l-md dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none "
            />
            <button
              type="submit"
              className="py-2 flex items-center space-x-2  px-1 border border-indigo-500  rounded-r-md bg-indigo-500"
            >
              <span>Search</span>
            </button>
          </form>
        </div>
       <div className="flex items-center space-x-10">
       <div>
          <CategoryFiltering />
        </div>
        <div>
          <DropdownFilter />
        </div>
       </div>
      </div>

      <div className="flex flex-wrap mt-10">
        <span className="cursor-pointer px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 bg-indigo-500 text-white">
          All
        </span>
        <span className="cursor-pointer px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 bg-gray-200 dark:bg-gray-600 dark:text-gray-100">
          #Technology
        </span>
        <span className="cursor-pointer px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 bg-gray-200 dark:bg-gray-600 dark:text-gray-100">
          #Design
        </span>
        <span className="cursor-pointer px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 bg-gray-200 dark:bg-gray-600 dark:text-gray-100">
          #Development
        </span>
        <span className="cursor-pointer px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 bg-gray-200 dark:bg-gray-600 dark:text-gray-100">
          #Business
        </span>
      </div>
    </div>
  );
};

export default SearchFilter;
