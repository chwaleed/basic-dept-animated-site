"use client";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import menu1 from "../assets/Icons/menu1.webp";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Cursoal() {
  const control = useAnimation();
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [leaveScreen, setLeaveScreen] = useState(true);
  const [mouseX, setMouseX] = useState(1370);
  const [mouseY, setMouseY] = useState(400);
  const [linkHover, setLinkHover] = useState(false);

  // const ref = useRef(null);

  // const ref = useRef(null);
  // const scrollSpeedMultiplier = 1.5; // Adjust this for desired scroll speed

  // Smooth Scrolling Function
  // const smoothScroll = (targetScroll) => {
  // const startScroll = ref.current.scrollLeft;
  // const distance = targetScroll - startScroll;
  // const duration = 200; // Adjust for desired scroll duration
  // let startTime = null;

  //   const animateScroll = (timestamp) => {
  //     if (!startTime) {
  //       startTime = timestamp;
  //     }
  //     const progress = (timestamp - startTime) / duration;
  //     ref.current.scrollLeft = startScroll + distance * progress;
  //     if (progress < 1) {
  //       window.requestAnimationFrame(animateScroll);
  //     }
  //   };
  //   window.requestAnimationFrame(animateScroll);
  // };

  // useEffect(() => {
  //   if (!ref.current) return;
  //   const handleMouseDown = (e) => {
  //     setIsDown(true);
  //     setStartX(e.pageX - ref.current.offsetLeft);
  //     setScrollLeft(ref.current.scrollLeft);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsDown(false);
  //   };

  //   const handleMouseUp = () => {
  //     setIsDown(false);
  //   };

  //   const handleMouseMove = (e) => {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - ref.current.offsetLeft;
  //     const walk = (x - startX) * scrollSpeedMultiplier; // Use multiplier
  //     smoothScroll(scrollLeft - walk); // Use smooth scroll function
  //   };

  //   const slider = ref.current;
  //   slider.addEventListener("mousedown", handleMouseDown);
  //   slider.addEventListener("mouseleave", handleMouseLeave);
  //   window.addEventListener("mouseup", handleMouseUp);
  //   slider.addEventListener("mousemove", handleMouseMove);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     slider.removeEventListener("mousedown", handleMouseDown);
  //     slider.removeEventListener("mouseleave", handleMouseLeave);
  //     window.removeEventListener("mouseup", handleMouseUp);
  //     slider.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [isDown, startX, scrollLeft, scrollSpeedMultiplier]);

  //  useEffect(() => {
  //   if (!ref.current) return;
  //   const handleMouseDown = (e) => {
  //     setIsDown(true);
  //     setStartX(e.pageX - ref.current.offsetLeft);
  //     setScrollLeft(ref.current.scrollLeft);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsDown(false);
  //   };

  //   const handleMouseUp = () => {
  //     setIsDown(false);
  //   };

  //   const handleMouseMove = (e) => {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - ref.current.offsetLeft;
  //     const walk = (x - startX) * 0.5;
  //     ref.current.scrollLeft = scrollLeft - walk;
  //   };

  //   const slider = ref.current;
  //   slider.addEventListener("mousedown", handleMouseDown);
  //   slider.addEventListener("mouseleave", handleMouseLeave);
  //   window.addEventListener("mouseup", handleMouseUp);
  //   slider.addEventListener("mousemove", handleMouseMove);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     slider.removeEventListener("mousedown", handleMouseDown);
  //     slider.removeEventListener("mouseleave", handleMouseLeave);
  //     window.removeEventListener("mouseup", handleMouseUp);
  //     slider.removeEventListener("mousemove", handleMouseMove);
  //   };
  //  }, [isDown, startX, scrollLeft]);

  useEffect(() => {
    setMouseX(1370);
    setMouseY(400);
    if (!leaveScreen) {
      const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [leaveScreen]);
  console.log(leaveScreen);

  const variants = {
    animate: {
      transition: {
        duration: 0.75,
      },
    },
  };
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="bg-priamryDark  overflow-x-hidden font-FoMed h-screen w-screen">
      <div className="flex px-[6.2rem]  text-primaryPink py-[3.5rem]  bg-blue-900  justify-between ">
        <div className="flex  before:content-[''] before:w-[0.8rem] before:h-[0.8rem] before:rounded-[50%] before:mt-1  before:bg-primaryPink text-[1rem] ">
          <h1 className="ml-[2.2rem] leading-tight">
            (5)INTERNAL WORKS <br /> ©24 c/o BASIC/DEPT
          </h1>
          <h1 className=" ml-[3.8rem] leading-tight">
            A COLLECTION OF INTERNAL PROJECTS AND INITIATIVES UNDER THE
            <br />
            BASIC/DEPT BRAND.
          </h1>
        </div>
        <AiOutlineCloseCircle className="text-[3rem] text-white" />
      </div>
      <motion.div layout className="relative user-select:none">
        <Carousel>
          <CarouselContent>
            {items.map((items, index) => (
              <CarouselItem
                key={index}
                className=" bg-black mt-2 flex max-w-[30rem] h-[27rem]  items-center relative  flex-col "
              >
                <div
                  key={index}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className=" bg-priamryDark mt-2   before:content-[''] before:text-white before:flex before:items-end overflow-hidden  before:absolute before:left-0 before:w-[1px] before:bg-primaryPink before:z-10 before:h-[29rem] flex min-w-[30rem] h-[27rem]  items-center relative  flex-col "
                >
                  <div className="w-[28rem]  transition duration-400 overflow-hidden  relative h-[22rem]">
                    <Image
                      src={menu1}
                      fill={true}
                      alt="1st Menu Image"
                      style={{
                        pointerEvents: "none",
                        objectFit: "cover",
                        transform:
                          hoverIndex === index ? "scale(1)" : "scale(1.1)",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </div>

                  <motion.div
                    layout
                    className="absolute pointer-events-none bottom-0 select-none bg-priamryDark py-[1rem] w-full "
                  >
                    <motion.div layout="preserve-aspect">
                      <div className=" px-7 text-primaryPink  flex justify-between text-[1.4rem] font-bold">
                        <h1>MOVIES</h1>
                        <h1>2019</h1>
                      </div>
                      <h1 className="text-primaryPink px-7  font-bold text-[1rem]">
                        PRODCAST SERIES
                      </h1>
                    </motion.div>
                    {hoverIndex == index && (
                      <motion.div
                        layout="preserve-aspect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="text-primaryPink  z-10 bg-priamryDark   px-7  pt-[2rem]  flex flex-col gap-[2rem]"
                      >
                        <p>
                          Our prodcast series garneriing 45,000+ listens per
                          episode providing candid converstion around variouos
                          industries related topics.
                        </p>
                        <h1
                          onMouseEnter={() => setLinkHover(true)}
                          onMouseLeave={() => setLinkHover(false)}
                          className=" pointer-events-auto cursor-pointer underline"
                        >
                          Explore Brandbeats
                        </h1>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <motion.div
          style={
            leaveScreen
              ? {
                  left: `${mouseX - 55}px`,
                  top: `${mouseY - 220}px`,
                  transition: "left 0.2s ease-out, top 0.2s ease-out",
                }
              : {
                  left: `${mouseX - 55}px`,
                  top: `${mouseY - 220}px`,
                  // transition: "left 0.2s ease-out, top 0.2s ease-out",
                }
          }
          className={` ${
            linkHover ? " opacity-50 " : ""
          } absolute  bg-primaryPink z-20 pointer-events-none  rounded-[50%] w-[9rem] h-[9rem]  text-priamryDark font-FoMed font-semibold flex justify-center items-center`}
        >
          {linkHover ? "" : "DRAG"}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cursoal;

{
  /* <div
  onMouseEnter={() => setLeaveScreen(false)}
  onMouseLeave={() => setLeaveScreen(true)}
  ref={ref}
  className="flex flex-1    relative user-select:none overflow-y-visible mb no-scrollbar overflow-x-scroll    "
>
  <div className="ml-[5rem] select-none flex  mr-[5rem]"></div>
</div>; */
}
