import React, { useState } from "react";

const DropdownFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={handleDropdown}
        className="inline-flex justify-between w-56 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        {selectedFilter}
        {!isOpen ? (
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            className="-mr-1 ml-2 -rotate-180 transition-all duration-200 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right right-0 absolute  mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <span
              onClick={() => handleSelect("All")}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              All
            </span>
            <span
              onClick={() => handleSelect("#Technology")}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              #Technology
            </span>
            <span
              onClick={() => handleSelect("#Design")}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              #Design
            </span>
            <span
              onClick={() => handleSelect("#Development")}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              #Development
            </span>
            <span
              onClick={() => handleSelect("#Business")}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              #Business
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
