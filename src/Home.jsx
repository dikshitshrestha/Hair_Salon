import logo from "./logo.png";
import barber from "./barber.mp4";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="h-full px-[10px]">
      <div className="relative h-screen rounded-t-lg overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={barber} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="font-bold text-4xl">Masters & Mane</h1>
          <p className="mt-2 text-xl">Where Style Meets Perfection</p>
        </div>
      </div>
    </div>
  );
}
