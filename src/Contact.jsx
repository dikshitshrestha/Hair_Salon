import React from "react";
import logo from "./logo.png";
import photo from "./contact.jpeg";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <div className="h-full pr-[10px] pl-[10px]">
      <div
        className="h-screen rounded-t-lg bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="bg-white/30 backdrop-blur-md lg:h-[300px] lg:w-[300px] p-[20px] text-black rounded-xl">
          <div className="text-center font-bold mt-[5px]">Contact form</div>
          <div>
            <div className="mt-[10px] ml-[17px]">
              <div>Username:</div>
              <input
                type="text"
                placeholder="Enter your Name"
                className="bg-transparent outline-none w-[220px] border-b-2 border-gray-700 placeholder-gray-700"
              />
            </div>
            <div className="mt-[15px] ml-[17px]">
              <div>Email:</div>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none w-[220px] border-b-2 border-gray-700 placeholder-gray-700"
              />
            </div>
            <div className="mt-[15px] ml-[17px]">
              <div>Message:</div>
              <textarea
                placeholder="Enter your message"
                className="bg-transparent outline-none w-[220px] border-b-2 border-gray-700 placeholder-gray-700 h-[30px]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-[10px]">
            <div className="border-2 border-gray-700 p-1 pr-2 w-[80px] rounded-xl h-[35px] flex items-center justify-center text-white bg-black">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
