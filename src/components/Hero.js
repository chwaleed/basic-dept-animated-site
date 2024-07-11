"use client";
import React, { useEffect, useState, useContext } from "react";
import { menuContaxt } from "./pages/MainPage";
import Cursoal from "./Cursoal";

const navBar = ["work", "about", "news", "thinking", "careers", "contact"];

function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [leaveScreen, setLeaveScreen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const { menuChange, menuOpen, heroInView, isInView } =
    useContext(menuContaxt);

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logic for navbar visibility
  const showNavbar = scrollPosition < 100 || heroInView;

  useEffect(() => {
    setMouseX(window.innerWidth / 2);
    setMouseY(window.innerHeight / 2);
    if (!leaveScreen) {
      const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [leaveScreen]);

  return (
    <div
      className={` relative ${
        isInView
          ? "bg-priamryDark text-[#f4f4f4]"
          : "bg-[#f4f4f4] text-priamryDark"
      }   h-screen w-screen overflow-hidden `}
    >
      <div className="bg-inherit">
        {showNavbar && (
          <div
            className={`fixed px-24 py-14  animated-background  flex items-center ${
              heroInView ? "text-white" : "bg-inherit"
            } justify-between w-full z-50`}
          >
            <h1 className="font-FoBold   font-bold text-[2rem] ">BASIC/DEPT</h1>
            <ul className="font-FoMed text-[1.1rem]   flex gap-24">
              {navBar.map((item) => (
                <a
                  key={item}
                  className={`uppercase relative before:origin-right hover:before:origin-left before:scale-0  before:absolute  before:content-['']
                    before:h-[2px] before:bg-white before:bottom-[3px] before:w-full before:transition before:ease-in-out
                     hover:before:scale-100 before:duration-[0.8s]
                    `}
                >
                  {item}{" "}
                </a>
              ))}
            </ul>
            <svg onClick={menuChange} className="h-[3rem]  w-[3rem] ">
              <path d="M4 12h36" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M4 24h36" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M4 36h36" stroke="#ffffff" strokeWidth="2" fill="none" />
            </svg>
          </div>
        )}
        <div
          onMouseEnter={() => setLeaveScreen(false)}
          onMouseLeave={() => setLeaveScreen(true)}
          className=" relative cursor-none   transition duration-200  w-full h-full"
        >
          <video
            className="  z-0 top-0 left-0 w-screen h-screen object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/2nd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            style={
              leaveScreen
                ? {
                    left: `${mouseX - 80}px`,
                    top: `${mouseY - 50}px`,
                    transition: "left 0.2s ease-out, top 0.2s ease-out",
                  }
                : {
                    left: `${mouseX - 80}px`,
                    top: `${mouseY - 50}px`,
                  }
            }
            className={`absolute text-center  pointer-events-none leading-tight font-FoBold text-white  bottom-0`}
          >
            <div className="bg-white mb-2 flex text-black uppercase justify-center items-center text-center leading-tight font-FoBold w-[9rem] h-[9rem] rounded-[50%]">
              Watch <br /> Reel
            </div>
            BASIC/DEPT <br /> 2010
          </div>
        </div>
      </div>
      {menuOpen && <Cursoal />}
    </div>
  );
}

export default Hero;
