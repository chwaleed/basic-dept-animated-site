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
            <div className=" w-[35rem]">
              <h1 className="text-priamryDark text-[3rem] font-semibold">
                Google
              </h1>
              <hr className="bg-priamryDark w-[1.5rem] ml-1 mt-3 h-[5px]" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Part4;
