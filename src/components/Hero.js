import React from "react";

const navBar = ["work", "about", "news", "thinking", "careers", "contact"];
function Hero() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute bg-white flex items-center justify-between w-full z-10">
        <h1 className="font-FoBold  font-bold text-[2rem] ">BASIC/DEPT</h1>
        <ul className="font-Reg  flex gap-10">
          {navBar.map((item) => (
            <li key={item} className=" uppercase ">
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>

      <video
        className="absolute z-0 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/2nd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Hero;
