import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card1 from "@/assets/Card1.webp";
import Image from "next/image";
import Button from "./Button";

function Part5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 }); // 60% in view

  return (
    <motion.div className=" bg-priamryDark  h-[300vh] mb-[50vh]">
      <div className=" px-[5%]    mx-auto relative   h-[120vh] ">
        <div className=" sticky top-[7rem] inline-block">
          <h1 className="text-[8rem] text-primaryPink  leading-[100%]  font-bold ">
            BASIC/DEPT® <br />
            HELPS <br />
            BRANDS ●<br />
            CONNECT W/ <br />
            CULTURE
          </h1>
          <h1 className="text-primaryPink text-[1.3rem] mt-[1.6rem]">
            ADWEEK <span className="font-bold">AGENCY SPOTLIGHT</span>
          </h1>
          <Button text={"About us"} />
        </div>
        <div className=" w-[45%] ml-32  inline    absolute    h-[120vh]">
          <Image
            src={Card1}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Part5;
