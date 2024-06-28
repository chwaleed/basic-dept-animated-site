"use client";
import React from "react";
import Hero from "../Hero";
import { createContext, useContext, useState } from "react";
import Part2 from "../main2";
import Main3 from "../main3";

export const menuContaxt = createContext();

function MenuProvider() {}

function MainPage() {
  const [menuOpen, setOpenMenu] = useState(false);
  const menuChange = () => {
    setOpenMenu(!menuOpen);
  };
  return (
    <menuContaxt.Provider value={{ menuOpen, menuChange }}>
      <div className="overflow-hidden">
        <Hero />
        <Part2 />
        <Main3 />
      </div>
      ;
    </menuContaxt.Provider>
  );
}

export default MainPage;
