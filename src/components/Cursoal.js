"use client";
import React, { useEffect, useState, useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { menuContaxt } from "./pages/MainPage";
import menu1 from "../assets/Icons/menu1.webp";
import menu2 from "../assets/Icons/menu2.webp";
import menu3 from "../assets/Icons/menu3.webp";
import menu4 from "../assets/Icons/menu4.webp";
import menu5 from "../assets/Icons/menu5.webp";

import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Cursoal() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [leaveScreen, setLeaveScreen] = useState(true);
  const [mouseX, setMouseX] = useState(1370);
  const [mouseY, setMouseY] = useState(400);
  const [linkHover, setLinkHover] = useState(false);
  const { menuChange, menuOpen } = useContext(menuContaxt);

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

  const items = [
    {
      title: "B/D JAMS",
      year: "2020",
      span: "IT'S A VIBE",
      text: "A weekly-ish playlist curated by the employees @ BASIC/DEPT",
      link: "Viste the Site",

      img: menu4,
    },
    {
      title: "APPLIED",
      year: "2020",
      span: "THOUGHTS & PERSPECTIVES",
      text: "Our panel series and thought-leadership platfrom where we share perspectives and tasctics realted to strategy, design, and technology.",
      link: "Explore Applied",

      img: menu5,
    },
    {
      title: "MOVIES",
      year: "2019",
      span: "OUR NEW HQ",
      text: "When we moved into our new HQ, we put together a site experience providing an in-depth look into the two-year process imagining, designing, and developing our new office we call home.",
      link: "Viste the Site",

      img: menu2,
    },
    {
      title: "CRAFTED",
      year: "2019",
      span: "CREATIVE COMMUNITY",
      text: "A communal initiative we operate to celebrate diversity and creativity by bringing together people from different backgound and interests.",
      link: "Viste the Site",
      img: menu3,
    },
    {
      title: "BRANDBEASTS",
      year: "2017",
      span: "PODCAST SERIES",
      text: "Our podcast series garnering 45,000+ listens per episode providing candid conversations around various industry realted topics.",
      link: "Explore Brandbeats",
      img: menu1,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-priamryDark  top-0 fixed  z-40  overflow-x-hidden font-FoMed h-screen w-screen"
    >
      <div className="flex px-[6.2rem]  text-primaryPink py-[3.5rem]   justify-between ">
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
        <AiOutlineCloseCircle
          onClick={menuChange}
          className="text-[3rem] text-white"
        />
      </div>
      <motion.div
        initial={{ x: "100vw", width: "0%" }}
        animate={{ x: 0, width: "100%" }}
        transition={{ duration: 1.2, ease: [0.77, 0.0, 0.175, 1.0] }}
        onMouseEnter={() => setLeaveScreen(false)}
        onMouseLeave={() => setLeaveScreen(true)}
        className="relative  user-select:none cursor-none"
      >
        <Carousel className="overflow-x-visible">
          <CarouselContent className="ml-[5rem] mr-[5rem]  ">
            {items.map((items, index) => (
              <CarouselItem
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className=" select-none mt-2 max-w-[30rem] "
              >
                <div className=" bg-priamryDark mt-2   before:content-[''] before:text-white before:flex before:items-end overflow-hidden  before:absolute before:left-0 before:w-[1px] before:bg-primaryPink before:z-10 before:h-[29rem] flex w-[30rem] h-[27rem]  items-center relative  flex-col ">
                  <div className="w-[28rem]  transition duration-400 overflow-hidden  relative h-[20rem]">
                    <Image
                      src={items.img}
                      fill={true}
                      alt="1st Menu Image"
                      style={{
                        pointerEvents: "none",
                        objectFit: "cover",
                        transform:
                          hoverIndex === index ? "scale(1)" : "scale(1.1)",
                        transition: "transform 0.4s ease",
                      }}
                      loading="lazy"
                    />
                  </div>

                  <motion.div
                    layout
                    className="absolute pointer-events-none bottom-0 select-none bg-priamryDark py-[1rem] w-full "
                  >
                    <motion.div layout="preserve-aspect">
                      <div className=" px-7 text-primaryPink  flex justify-between text-[1.4rem] font-bold">
                        <h1>{items.title}</h1>
                        <h1>{items.year} </h1>
                      </div>
                      <h1 className="text-primaryPink px-7  font-bold text-[1rem]">
                        {items.span}
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
                        <p>{items.text}</p>
                        <h1
                          onMouseEnter={() => setLinkHover(true)}
                          onMouseLeave={() => setLinkHover(false)}
                          className=" pointer-events-auto cursor-pointer underline"
                        >
                          {items.link}
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
                }
          }
          className={` ${
            linkHover ? " opacity-50 " : ""
          } absolute  bg-primaryPink z-20 pointer-events-none  rounded-[50%] w-[9rem] h-[9rem]  text-priamryDark font-FoMed font-semibold flex justify-center items-center`}
        >
          {linkHover ? "" : "DRAG"}
        </motion.div>
      </motion.div>
      <div className="flex font-semibold text-gray-500 justify-between px-[5.6rem] mt-[6rem]">
        <h1>BASIC/DEPT,INC</h1>
        <h1>10 - 24</h1>
      </div>
    </motion.div>
  );
}

export default Cursoal;
