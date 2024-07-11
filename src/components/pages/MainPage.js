"use client";
import React, { useEffect } from "react";
import Hero from "../Hero";
import { createContext, useContext, useState, useRef } from "react";
import Part2 from "../main2";
import Main3 from "../main3";
import Part4 from "../main4";
import Part5 from "../main5";
import { motion, useInView } from "framer-motion";

export const menuContaxt = createContext();

function MenuProvider() {}

function MainPage() {
  const [menuOpen, setOpenMenu] = useState(false);
  // const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-50%",
  });

  const menuChange = () => {
    setOpenMenu(!menuOpen);
  };

  return (
    <menuContaxt.Provider value={{ menuOpen, menuChange, isInView }}>
      <motion.div
        className=" animated-background overflow-clip "
        initial={{ backgroundColor: "#f4f4f4" }}
        animate={
          isInView
            ? { backgroundColor: "#252422" }
            : { backgroundColor: "#f4f4f4" }
        }
        transition={{ duration: 0.5 }} // Add a smooth transition
      >
        <Hero />
        <Part2 />
        <Main3 />
        <Part4 />
        <section ref={ref}>
          <Part5 />
        </section>
      </motion.div>
    </menuContaxt.Provider>
  );
}

export default MainPage;
