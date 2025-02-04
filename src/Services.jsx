import React from "react";
import logo from "./logo.png";
import photo from "./services.jpeg";
import photo2 from "./barberpic.jpeg";
import photo3 from "./haircut.jpeg";
import photo4 from "./haircut2.jpeg";
import Navbar from "./Navbar";

export default function Services() {
  return (
    <div className="h-full">
      <div className="bg-gray-100 h-screen">
        <div
          className="h-[600px] bg-cover flex justify-center items-center rounded-t-lg"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="text-white text-center w-[900px]">
            <div className="text-[100px] font-[bold]">Our services</div>
            <div className="text-[20px] font-[bold]">
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
        <div className="h-[500px] flex pt-[50px] pb-[50px] bg-gray-100">
          <div className="h-[400px] w-1/2 flex justify-center items-center">
            <div>
              <div className="text-[80px] font-[bold] text-yellow-800 flex justify-center items-center">
                Our Story
              </div>
              <div className="text-[50px] font-[bold] flex justify-center items-center">
                We Love hairs!
              </div>
              <div className="flex justify-center items-center mt-[20px]">
                <div className="bg-yellow-700 text-white h-[40px] w-[180px] flex justify-center items-center rounded-lg">
                  <a href="#" className="text-[14px]">
                    MAKE AN APPOINTMENT
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-green-200 h-[400px] w-1/2 bg-cover"
            style={{ backgroundImage: `url(${photo2})` }}
          ></div>
        </div>
        <div className="h-[600px] flex p-[50px] bg-black">
          <div
            className="h-[500px] bg-white w-1/3 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${photo3})` }}
          ></div>
          <div className="h-[500px] text-white w-1/3 text-center p-[50px] text-[20px] font-[bold] flex justify-center items-center">
            <div>
              <h1 className="text-[30px] text-yellow-700">
                Haircuts & Styling
              </h1>
              <div className="text-left list-none mt-[15px]">
                <li>
                  Classic Haircut & Style..............................$35
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
            className="h-[500px] bg-white w-1/3 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${photo4})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
