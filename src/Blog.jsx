import React from "react";
import logo from "./logo.png";
import photo from "./Blog.jpeg";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <div className="h-full pr-[10px] pl-[10px]">
      <div
        className="h-screen rounded-t-lg bg-cover bg-center h-[91vh] p-[100px] pt-[250px]"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="text-white font-[bold] text-[30px] text-center">
          The Art of Grooming: Elevate Your Style with Masters & Mane
        </div>
        <div className="text-white font-[bold] text-[20px] text-justify">
          At Masters & Mane, we believe that a great hairstyle is more than just
          a look—it's a statement of confidence and personality. Whether you're
          aiming for a sharp fade, a classic gentleman’s cut, or a bold
          transformation with global coloring, our expert stylists are here to
          craft the perfect look tailored just for you. Our salon isn’t just
          about haircuts; it’s about an experience—one where precision,
          creativity, and passion come together to redefine your style. Stay
          tuned to our blog for expert hair care tips, the latest styling
          trends, and grooming insights to keep you looking your best every day.
          Because at Masters & Mane, your style is our masterpiece!
        </div>
      </div>
    </div>
  );
}
