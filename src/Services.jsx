import React from "react";
import logo from "./logo.png";
import photo from "./services.jpeg";
import photo2 from "./barberpic.jpeg";
import photo3 from "./haircut.jpeg";
import photo4 from "./haircut2.jpeg";
import Navbar from "./Navbar";

export default function Services() {
  return (
    <div className="h-full ">
      <div className="bg-gray-100 h-screen">
        <div
          className="lg:h-[700px] md:h-[300px] bg-cover flex justify-center items-center rounded-t-lg lg:px-10"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="text-white w-full py-7 text-center">
            <div className="lg:text-[100px] font-[bold]">Our services</div>
            <div className="lg:text-[20px] font-[bold]">
              At Masters & Mane, we take pride in offering top-tier grooming
              services tailored to enhance your style and confidence. Our
              skilled barbers specialize in precision haircuts, beard trims, hot
              towel shaves, and modern styling to ensure you leave looking and
              feeling your best. Whether you're after a classic cut, trendy
              fade, or a sharp beard lineup, we use high-quality products and
              expert techniques to deliver the perfect finish.
            </div>
          </div>
        </div>
        <div className="lg:h-full flex flex-col-reverse py-[20px] bg-gray-100">
          <div className="py-4 w-full flex justify-center items-center">
            <div>
              <div className="lg:text-[80px] font-[bold] text-yellow-800 flex justify-center items-center">
                Our Story
              </div>
              <div className="lg:text-[50px] font-[bold] flex justify-center items-center">
                We Love hairs!
              </div>
              <div className="flex justify-center items-center mt-[10px]">
                <div className="bg-yellow-700 text-white lg:h-[40px] lg:w-[180px] flex justify-center items-center rounded-md">
                  <a href="#" className="text-xs py-1 px-1">
                    MAKE AN APPOINTMENT
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-green-200 h-44 md:h-[300px] lg:h-[400px] w-full bg-cover"
            style={{ backgroundImage: `url(${photo2})` }}
          ></div>
        </div>
        <div className="lg:h-[600px] flex flex-col lg:flex-row py-5 lg:p-[50px] bg-black">
          <div
            className="lg:h-[500px] md:h-[300px] h-56 lg:w-1/3 w-full bg-white bg-cover bg-center lg:rounded-lg"
            style={{ backgroundImage: `url(${photo3})` }}
          ></div>
          <div className="lg:h-[500px] lg:w-1/3 text-white text-center py-[40px] text-sm font-[bold] flex justify-center items-center">
            <div>
              <h1 className="text-[30px] text-yellow-700">
                Haircuts & Styling
              </h1>
              <div className="text-left lg:flex lg:flex-col lg:gap-3 list-none mt-[15px]">
                <li>
                  Classic Haircut & Style...............................$35
                </li>
                <li>Men’s Fade & Taper Cut............................$40</li>
                <li>Beard Trim & Shape-Up............................$20</li>
                <li>Scissor Cut & Texturing.............................$45</li>
                <li>
                  Children’s Haircut......................................$25
                </li>
              </div>
            </div>
          </div>
          <div
            className="lg:h-[500px] md:h-[300px] h-56 lg:w-1/3 bg-white w-full bg-cover bg-center lg:rounded-lg"
            style={{ backgroundImage: `url(${photo4})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
