import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card1 from "@/assets/Card1.webp";
import Image from "next/image";

function Part5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 }); // 60% in view

  return (
    <motion.div className="    h-[300vh] mb-[50vh]">
      <div className=" px-[5%]   mt-5 mx-auto relative  bg-red-50 h-[130vh] ">
        <h1 className="text-[8rem] sticky top-[4rem] inline-flex  leading-[100%] text-primaryPink font-bold bg-black">
          BASIC/DEPT® <br />
          HELPS <br />
          BRANDS ●<br />
          CONNECT W/ <br />
          CULTURE
        </h1>
        <div className=" w-[45%] ml-32  inline    absolute   bg-slate-500 h-[120vh]">
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
