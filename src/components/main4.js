import React from "react";
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
  return (
    <div className="mt-32 mb-[10rem] px-[5%]">
      <h1 className="text-priamryDark text-[3rem] font-bold  leading-[120%]">
        FEATURED
        <br /> ENGAGEMENTS
      </h1>
      <Carousel className="overflow-x-visible mt-[8rem] ">
        <CarouselContent className="gap-10">
          {CarouselText.map((item, index) => (
            <CarouselItem className="max-w-[30rem] " key={`${index}_Carsoal`}>
              <div className=" w-[28rem] h-full    text-priamryDark">
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
                  <p className="text-[1.2rem] font-semibold mt-7">
                    {item.text}
                    <a className="underline cursor-pointer">here</a>.
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Part4;
