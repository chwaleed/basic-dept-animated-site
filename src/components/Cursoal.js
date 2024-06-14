"use client";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import menu1 from "../assets/Icons/menu1.webp";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function Cursoal() {
  const control = useAnimation();
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const handleMouseDown = (e) => {
      setIsDown(true);
      setStartX(e.pageX - ref.current.offsetLeft);
      setScrollLeft(ref.current.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDown(false);
    };

    const handleMouseUp = () => {
      setIsDown(false);
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 3;
      ref.current.scrollLeft = scrollLeft - walk;
    };

    const slider = ref.current;
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listeners on component unmount
    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDown, startX, scrollLeft]);

  console.log(hover);
  const variants = {
    animate: {
      transition: {
        duration: 0.75,
      },
    },
  };
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="bg-priamryDark  font-FoMed h-screen w-screen">
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
      <div
        ref={ref}
        className="flex flex-1  flex-nowrap bg-slate-500 overflow-hidden    "
      >
        {items.map((items, index) => (
          <div
            key={index}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className=" bg-priamryDark mt-2   before:content-[''] before:text-white before:flex before:items-end overflow-hidden  before:absolute before:left-0 before:w-[2px] before:bg-primaryPink before:z-10 before:h-[29rem] flex min-w-[30rem] h-[27rem]  items-center relative  flex-col "
          >
            <div className="w-[28rem]  transition duration-400 overflow-hidden pointer-events-none relative h-[22rem]">
              <Image
                src={menu1}
                fill={true}
                alt="1st Menu Image"
                style={{
                  objectFit: "cover",
                  transform: hover ? "scale(1)" : "scale(1.1)",
                  transition: "transform 0.4s ease",
                }}
              />
            </div>

            <motion.div
              layout
              className="absolute pointer-events-none bottom-0  bg-priamryDark py-[1rem] w-full "
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
              {hover && (
                <motion.div
                  layout="preserve-aspect"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="text-primaryPink  z-10 bg-priamryDark   px-7  pt-[2rem]  flex flex-col gap-[2rem]"
                >
                  <p>
                    Our prodcast series garneriing 45,000+ listens per episode
                    providing candid converstion around variouos industries
                    related topics.
                  </p>
                  <h1 className=" underline">Explore Brandbeats</h1>
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursoal;
