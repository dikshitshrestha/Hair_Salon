import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <div>
      <div className="h-[70px] flex items-center justify-between pr-[50px] pl-[50px] pt-[20px]">
        <div className="flex items-center justify-between w-[155px]">
          <img src={logo} alt="logo" className="h-[40px]" />
          <div>Masters&Mane</div>
        </div>
        <div className="flex justify-between w-1/3">
          {["/", "/services", "/shop", "/blog", "/contact"].map(
            (path, index) => {
              const labels = ["HOME", "SERVICES", "SHOP", "BLOG", "CONTACT"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `px-3 py-2 ${
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
        <div className="w-[150px] flex justify-between items-center">
          <NavLink to="/login">Sign in</NavLink>
          <div className="border-2 border-gray-700 p-1 pr-2 pl-3 w-[90px] rounded-xl bg-black text-white">
            <NavLink to="/shop">Buy Now</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
