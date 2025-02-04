import React from "react";
import logo from "./logo.png";
import product from "./Hairspray.jpg";
import product2 from "./wax.jpg";
import product3 from "./hairproducts.jpg";
import Navbar from "./Navbar";

export default function Shop() {
  return (
    <div className="h-full pr-[10px] pl-[10px]">
      <div className="bg-gray-100 h-[91vh] rounded-t-lg flex justify-center items-center">
        <div className="h-2/3 p-[50px] flex justify-evenly items-center">
          <div className="mr-[20px] w-1/4 text-center">
            <div className="flex items-center bg-white">
              <img src={product} alt="hairspray" />
            </div>
            <div>Hairspray: 30$</div>
          </div>
          <div className="mr-[20px] w-1/4 text-center">
            <div className="flex items-center bg-white">
              <img src={product2} alt="hairspray" />
            </div>
            <div>Hair wax: 10$</div>
          </div>
          <div className="mr-[20px] w-1/4 text-center">
            <div className="flex items-center bg-white">
              <img src={product3} alt="hairspray" />
            </div>
            <div>Shampoo, Serums and conditioner combo: 50$</div>
          </div>
        </div>
      </div>
    </div>
  );
}
