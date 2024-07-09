import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import google from "@/assets/10.webp";
import Image from "next/image";
import kfc from "@/assets/kfc.webp";
import wil from "@/assets/wil.webp";
import circ from "@/assets/11.webp";
import pat from "@/assets/pat.webp";

const CarouselText = [
  {
    img: google,
    title: "google",
    text: "  Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership ",
  },
  {
    img: kfc,
    title: "kfc",
    text: "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership ",
  },
  {
    img: wil,
    title: "Wilson",
    text: "A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study ",
  },
  {
    img: circ,
    title: "AT&T",
    text: "Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services ",
  },
  {
    img: pat,
    title: "Patagonia",
    text: "Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study ",
  },
];

function Part4() {
  const [leaveScreen, setLeaveScreen] = useState(true);
  const [mouseX, setMouseX] = useState(1600);
  const [mouseY, setMouseY] = useState(600);
  const [linkHover, setLinkHover] = useState(false);
  useEffect(() => {
    setMouseX(1600);
    setMouseY(600);
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
    <div className="mt-32 mb-[10rem] pl-[5%]  overflow-hidden">
      <h1 className="text-priamryDark text-[3rem] font-bold  leading-[120%]">
        FEATURED
        <br /> ENGAGEMENTS
      </h1>
      <div
        className="relative  cursor-non"
        onMouseEnter={() => setLeaveScreen(false)}
        onMouseLeave={() => setLeaveScreen(true)}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="overflow-x-visible cursor-non mb-24 mt-[8rem] "
        >
          <CarouselContent className="  gap-40 mr-32">
            {CarouselText.map((item, index) => (
              <CarouselItem
                className="max-w-[30rem]  "
                key={`${index}_Carsoal`}
              >
                <div className=" w-[29.9rem] h-full select-none   text-priamryDark">
                  <Image
                    src={item.img}
                    className="max-h-[3rem] w-auto"
                    alt="Google"
                  />
                  <hr className="bg-priamryDark w-[1.5rem] ml-1 mt-3 h-[3px]" />
                  <div className="mt-20">
                    <h2 className=" uppercase text-[2rem] font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-[1.3rem] font-semibold mt-7">
                      {item.text}
                      <a
                        onMouseEnter={() => setLinkHover(true)}
                        onMouseLeave={() => setLinkHover(false)}
                        className="underline cursor-pointer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div
          style={
            leaveScreen
              ? {
                  left: `${mouseX - 175}px`,
                  top: `${mouseY - 510}px`,
                  transition: "left 0.2s ease-out, top 0.2s ease-out",
                }
              : {
                  left: `${mouseX - 175}px`,
                  top: `${mouseY - 510}px`,
                }
          }
          className={` ${
            linkHover ? " opacity-50 " : ""
          } absolute  bg-primaryPink z-50 pointer-events-none  rounded-[50%] w-[9rem] h-[9rem]  text-priamryDark font-FoMed font-semibold flex justify-center items-center`}
        >
          {linkHover ? "" : "DRAG"}
        </div>
      </div>
    </div>
  );
}

export default Part4;
