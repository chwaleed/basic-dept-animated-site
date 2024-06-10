"use client";
import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
const navBar = ["work", "about", "news", "thinking", "careers", "contact"];
function Hero() {
  const navRef = React.useRef(null);
  const [mouseX, setMouseX] = useState(400); // Initial x position
  const [mouseY, setMouseY] = useState(400); // Initial y position
  const [showDefaultCursor, setShowDefaultCursor] = useState(false);

  useEffect(() => {
    setMouseX(window.innerWidth / 2);
    setMouseY(window.innerHeight / 2);
    if (!showDefaultCursor) {
      const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [showDefaultCursor]);

  const centerDiv = () => {
    setMouseX(window.innerWidth / 2);
    setMouseY(window.innerHeight / 2);
  };

  const handleNavEnter = () => {
    setMouseX(window.innerWidth / 2);
    setMouseY(window.innerHeight / 2);
    setShowDefaultCursor(true);
  };

  const handleNavLeave = () => {
    setShowDefaultCursor(false);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        ref={navRef}
        onMouseEnter={handleNavEnter}
        onMouseLeave={handleNavLeave}
        className="fixed px-24 py-14   flex items-center justify-between w-full z-10"
      >
        <h1 className="font-FoBold text-white  font-bold text-[2rem] ">
          BASIC/DEPT
        </h1>
        <ul className="font-FoMed text-[1.1rem] text-white  flex gap-24">
          {navBar.map((item) => (
            <a
              key={item}
              className={`uppercase relative before:origin-right hover:before:origin-left before:scale-0  before:absolute  before:content-['']
                    before:h-[2px] before:bg-white before:bottom-[3px] before:w-full before:transition before:ease-in-out
                     hover:before:scale-100 before:duration-[0.4s]
                    `}
            >
              {item}{" "}
            </a>
          ))}
        </ul>
        <svg className="h-[3rem]  w-[3rem] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Menu">
            <path fill="none" d="M0 0h48v48H0z"></path>
            <path
              d="M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
              fill="#ffffff"
            ></path>
          </svg>
        </svg>
      </div>
      <div
        onMouseLeave={centerDiv}
        className="relative  transition duration-200  w-full h-full"
      >
        <video
          className="  z-0 top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/2nd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            top: `${mouseY - 70}px`,
            left: `${mouseX - 70}px`,
          }}
          className={`absolute transition duration-500 cursor-none text-center leading-tight font-FoBold text-white  bottom-0`}
        >
          <div className="bg-white mb-2 flex text-black uppercase justify-center items-center text-center leading-tight font-FoBold w-[9rem] h-[9rem] rounded-[50%]">
            Watch <br /> Reel
          </div>
          BASIC/DEPT <br /> 2010
        </div>
      </div>
    </div>
  );
}

export default Hero;
