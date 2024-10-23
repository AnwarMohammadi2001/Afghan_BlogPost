import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Language from "./Language";

const Navbar = () => {
  const [acitve, setActive] = useState(0);
  const [darkmode, setDarkmode] = useState(() => {
    const mode = localStorage.getItem("darkmode");
    return mode === "true";
  });
  const onChange = (index) => {
    setActive(index);
  };
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkmode", String(darkmode));
  }, [darkmode]);

  const navItem = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "BlogPost",
      path: "/blogpost",
    },
    {
      id: 3,
      name: "Category",
      path: "/category",
    },
    {
      id: 4,
      name: "About",
      path: "/about",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      <nav className="h-16 bg-white dark:bg-slate-900 shadow-md">
        <div className=" mx-auto flex h-full justify-between items-center px-6 md:px-12">
          {/* Logo */}
          <div className="flex items-center space-x-10">
            <div>
              <span className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-400">
                 Afghan Blog
              </span>
            </div>
            {/* Navbar Item */}
            <div className="hidden md:flex">
              <ul className="flex justify-center items-center gap-5">
                {navItem.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => onChange(index)}
                    className={`relative group cursor-pointer text-lg font-medium ${
                      acitve === index
                        ? "text-indigo-600 dark:text-indigo-300"
                        : "text-gray-800 dark:text-gray-300"
                    }`}
                  >
                    <Link to={item.path}>
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full ${
                          acitve === index ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dark mode button */}
          <div className="flex items-center space-x-3">
            <div
              className="flex items-center cursor-pointer transition-all duration-300"
              onClick={() => setDarkmode(!darkmode)}
            >
              <span className="text-sm font-bold mr-2 text-gray-700 dark:text-gray-300">
                {darkmode ? "Dark Mode" : "Light Mode"}
              </span>
              {darkmode ? (
                <MdDarkMode className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              ) : (
                <MdLightMode className="text-yellow-500 text-2xl" />
              )}
            </div>
            <div>
              <SearchBar />
            </div>
            <div className="flex items-center space-x-10 ">
              <Link className="flex items-center">
                <span className="text-md font-bold text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                  Login
                </span>
              </Link>
              <div>
                <Language />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
