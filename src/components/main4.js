import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Part4() {
  return (
    <div className="mt-32 mb-[10rem] px-[5%]">
      <h1 className="text-priamryDark text-[3rem] font-bold  leading-[120%]">
        FEATURED
        <br /> ENGAGEMENTS
      </h1>
      <Carousel className="overflow-x-visible mt-[8rem]">
        <CarouselContent className=" mr-[5rem]  ">
          <CarouselItem>
            <div className=" w-[28rem]  bg-pink-100 text-priamryDark">
              <h1 className="text-priamryDark text-[3rem] font-semibold">
                Google
              </h1>
              <hr className="bg-priamryDark w-[1.5rem] ml-1 mt-3 h-[3px]" />
              <div className="mt-20">
                <h2 className=" uppercase text-[2rem] font-semibold">Google</h2>
                <p className="text-[1.2rem] font-semibold mt-7">
                  Our embedded partnership with Google is as deep as it gets.
                  We’re the lead creative agency for Google Store and provide
                  strategy, design, and prototyping to other divisions. Learn
                  more about our partnership{" "}
                  <a className="underline cursor-pointer">here</a>.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Part4;
