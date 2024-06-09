import React from "react";
// import svg from "../assets/Icons/menu.svg";

const navBar = ["work", "about", "news", "thinking", "careers", "contact"];
function Hero() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute px-24 py-14   flex items-center justify-between w-full z-10">
        <h1 className="font-FoBold text-white  font-bold text-[2rem] ">
          BASIC/DEPT
        </h1>
        <ul className="font-FoMed text-[1.1 rem] text-white  flex gap-24">
          {navBar.map((item) => (
            <li key={item} className=" uppercase ">
              {item}{" "}
            </li>
          ))}
        </ul>
        <svg className="h-[3rem]  w-[3rem] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Menu">
            <path fill="none" d="M0 0h48v48H0z"></path>
            <path
              d="M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
              fill="#ffffff"
              class="color000000 svgShape"
            ></path>
          </svg>
        </svg>
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
