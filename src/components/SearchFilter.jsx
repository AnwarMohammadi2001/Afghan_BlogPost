import React from "react";
import DropdownFilter from "./DropdownFilter";

const SearchFilter = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg dark:bg-gray-800 transition-all duration-300">
      <div className="flex justify-between w-full container">
        <div>
          <input
            type="text"
            placeholder="Search posts by title..."
            className="w-full max-w-2xl p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <DropdownFilter />
        </div>
      </div>

      <div className="flex flex-wrap mt-4">
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
