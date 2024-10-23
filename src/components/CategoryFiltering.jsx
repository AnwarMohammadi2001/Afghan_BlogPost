import React, { useState } from "react";

const CategoryFiltering = () => {
  const [open, setOpen] = useState(false);
  const [selectedItme, setSelectedItem] = useState("#New");

  const selectedHandle = (item) => {
    setSelectedItem(item);
    setOpen(!open);
  };
  return (
    <div>
      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex justify-between w-40 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        >
          {selectedItme}
          {!open ? (
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
        {open && (
          <div className="origin-top-right right-0 absolute  mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2">
              <span
                onClick={() => selectedHandle("#New")}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
               #New
              </span>
              <span
                onClick={() => selectedHandle("#Populer")}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                
                #Populer
              </span>
              <span
                onClick={() => selectedHandle("#Most Viewed")}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                #Most Viewed
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFiltering;
