import React from "react";
import logo from "./logo.png";
import product from "./Hairspray.jpg";
import product2 from "./wax.jpg";
import product3 from "./hairproducts.jpg";
import Navbar from "./Navbar";

export default function Shop() {
  return (
    <div className="h-full px-[10px]">
      <div className="bg-gray-100 h-full rounded-t-lg flex justify-center items-center">
        <div className="px-16 py-16 flex-col flex justify-evenly items-center text-xs gap-5">
          <div className="text-center">
            <div className="flex items-center bg-white">
              <img src={product} alt="hairspray" />
            </div>
            <div className="mt-3">Hairspray: 30$</div>
          </div>
          <div className="text-center">
            <div className="flex items-center bg-white">
              <img src={product2} alt="hairspray" />
            </div>
            <div className="mt-3">Hair wax: 10$</div>
          </div>
          <div className="text-center">
            <div className="flex items-center bg-white">
              <img src={product3} alt="hairspray" />
            </div>
            <h1 className="mt-2">Shampoo, Serums and conditioner combo: 50$</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
