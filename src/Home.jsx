import logo from "./logo.png";
import barber from "./barber.mp4";

export default function Home() {
  return (
    <div className="h-full pr-[10px] pl-[10px]">
      <div className=" h-[70px] flex items-center justify-between pr-[50px] pl-[50px] pt-[20px]">
        <div className="flex items-center justify-between w-[155px]">
          <img src={logo} alt="photo" className="h-[40px]" />
          <div>Masters&Mane</div>
        </div>
        <div className="flex justify-between w-1/3">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Shop</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="w-[150px] flex justify-between">
          <button>Sign in</button>
          <div className="border-2 border-gray-700 p-1 pr-2 pl-3 w-[90px] rounded-xl bg-black text-white">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
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
          <h1 className="text-4xl font-bold text-9xl">Masters & Mane</h1>
          <p className="text-lg mt-2 text-6xl">Where Style Meets Perfection</p>
        </div>
      </div>
    </div>
  );
}
