"use client";
import React from "react";
import Hero from "../Hero";
import { createContext, useContext, useState } from "react";
import Part2 from "../main2";
import Main3 from "../main3";
import Part4 from "../main4";
import Part5 from "../main5";

export const menuContaxt = createContext();

function MenuProvider() {}

function MainPage() {
  const [menuOpen, setOpenMenu] = useState(false);
  const menuChange = () => {
    setOpenMenu(!menuOpen);
  };
  return (
    <menuContaxt.Provider value={{ menuOpen, menuChange }}>
      <div className=" ">
        {/* <Hero />
        <Part2 />
        <Main3 />
        <Part4 /> */}
        <Part5 />
      </div>
    </menuContaxt.Provider>
  );
}

export default MainPage;
