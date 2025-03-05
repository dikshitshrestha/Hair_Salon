import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <div>
      <div className="lg:h-[70px] flex flex-col gap-2 items-center justify-between lg:px-[50px] py-2">
        <div className="flex items-center justify-between lg:w-[155px] gap-1">
          <img src={logo} alt="logo" className="h-8 lg:h-[40px]" />
          <h1 className="text-xs">Masters&Mane</h1>
        </div>
        <div className="flex text-xs gap-3">
          {["/", "/services", "/shop", "/blog", "/contact"].map(
            (path, index) => {
              const labels = ["HOME", "SERVICES", "SHOP", "BLOG", "CONTACT"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `lg:px-3 px-2 py-2 ${
                      isActive ? "bg-red-500 text-white rounded-md" : ""
                    }`
                  }
                >
                  {labels[index]}
                </NavLink>
              );
            }
          )}
        </div>
        <div className="lg:w-[150px] flex gap-2 justify-between items-center text-xs">
          <NavLink to="/login">Sign in</NavLink>
          <div className="border-2 border-gray-700 px-2 py-1 rounded-md bg-black text-white">
            <NavLink to="/shop">Buy Now</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
