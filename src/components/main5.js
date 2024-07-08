import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card1 from "@/assets/Card1.webp";
import Image from "next/image";

function Part5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 }); // 60% in view

  return (
    <motion.div className=" bg-priamryDark relative h-[150vh]  mb-[50vh]">
      <div className="flex px-[5%] relative  bg-red-50 items-center">
        <h1 className="flex-1 text-[7rem] sticky   leading-[100%] text-primaryPink font-bold">
          BASIC/DEPT® <br />
          HELPS <br />
          BRANDS ● CONNECT W/ <br />
          CULTURE
        </h1>
        <Image src={Card1} className="flex-1 h-[90vh]" alt="Card Image" />
      </div>
    </motion.div>
  );
}

export default Part5;
