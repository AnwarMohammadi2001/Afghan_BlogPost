import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="dark:bg-slate-800 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
