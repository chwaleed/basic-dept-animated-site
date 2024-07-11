import React, { useRef, useContext } from "react";
import { motion, useInView } from "framer-motion";
import Card1 from "@/assets/Card1.webp";
import Image from "next/image";
import Button from "./Button";
import { menuContaxt } from "./pages/MainPage";

function Part5() {
  const ref = useRef(null);
  const { isInView } = useContext(menuContaxt);
  return (
    <div className="   py-[2rem] mb-[50vh]">
      <div className=" px-[5%]    mx-auto relative   h-[120vh] ">
        <div
          className={` sticky ${
            isInView ? "text-primaryPink" : " text-priamryDark"
          }  top-[7rem] inline-block`}
        >
          <h1 className="text-[8rem]   leading-[100%]  font-bold ">
            BASIC/DEPT® <br />
            HELPS <br />
            BRANDS ●<br />
            CONNECT W/ <br />
            CULTURE
          </h1>
          <h1 className="text-primaryPink mb-[4rem] text-[1.3rem] mt-[1.6rem]">
            ADWEEK <span className="font-bold">AGENCY SPOTLIGHT</span>
          </h1>

          <Button text={"About us"} pink={true} extra={"mt-[2rem]"} />
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
    </div>
  );
}

export default Part5;
