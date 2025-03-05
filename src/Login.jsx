import logo from "./logo.png";
import photo from "./loginbg.jpeg";
import Navbar from "./Navbar";

export default function Login() {
  return (
    <div className="h-full pr-[10px] pl-[10px]">
      <div
        className="lg:h-[660px] h-[500px] rounded-t-lg flex justify-center items-center bg-cover"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="bg-white/30 backdrop-blur-md h-[300px] w-[300px] p-[20px] text-black rounded-xl">
          <div className="text-center font-bold mt-[5px]">
            Login to Masters & Mane
          </div>
          <div className="ml-[18px]">
            <div className="mt-[40px]">
              <div>Username:</div>
              <input
                type="text"
                placeholder="Enter your Username or Email"
                className="bg-transparent outline-none w-[220px] border-b-2 border-gray-700 placeholder-gray-700"
              />
            </div>
            <div className="mt-[20px]">
              <div>Password:</div>
              <input
                type="password"
                placeholder="Enter your Password"
                className="bg-transparent outline-none w-[220px] border-b-2 border-gray-700 placeholder-gray-700"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-[30px]">
            <div className="border-2 border-gray-700 p-1 pr-2 w-[80px] rounded-xl h-[35px] flex items-center justify-center text-white bg-black">
              <button>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
