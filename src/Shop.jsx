import React from "react";
import product from "./Hairspray.jpg";
import product2 from "./wax.jpg";
import product3 from "./hairproducts.jpg";

export default function Shop() {
  return (
    <div className="h-full px-[10px]">
      <div className="bg-gray-100 h-full md:h-screen rounded-t-lg flex justify-center items-center">
        <div className="px-16 py-16 flex-col md:flex-row flex justify-evenly items-center text-xs gap-5">
          <div className="text-center">
            <div className="flex items-center lg:h-48 lg:w-72 bg-white">
              <img src={product} alt="hairspray" className="h-full w-full" />
            </div>
            <div className="mt-3 lg:text-sm">Hairspray: 30$</div>
          </div>
          <div className="text-center">
            <div className="flex items-center lg:h-48 lg:w-72">
              <img src={product2} alt="hairspray" className="h-full w-full" />
            </div>
            <div className="mt-3 lg:text-sm">Hair wax: 10$</div>
          </div>
          <div className="text-center">
            <div className="flex items-center bg-white lg:h-48 lg:w-72 overflow-hidden">
              <img src={product3} alt="hairspray" className="h-full w-full" />
            </div>
            <h1 className="mt-2 lg:text-sm">
              Shampoo and conditioner combo: 50$
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
