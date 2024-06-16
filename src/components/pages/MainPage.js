"use client";
import React from "react";
import Hero from "../Hero";
import { createContext, useContext, useState } from "react";

export const menuContaxt = createContext();

// Define a component to manage the menu state
function MenuProvider({ children }) {
  const [menuOpen, setOpenMenu] = useState(false);

  const menuChange = () => {
    setOpenMenu(!menuOpen);
  };

  return (
    <menuContaxt.Provider value={{ setOpenMenu, menuOpen, menuChange }}>
      {children}
    </menuContaxt.Provider>
  );
}

function MainPage() {
  const { setOpenMenu, menuChange, menuOpen } = useContext(menuContaxt);
  return (
    <menuContaxt.Provider value={{ setOpenMenu, menuOpen, menuChange }}>
      <div className="overflow-x-hidden">
        <Hero />
        {/* <Cursoal /> */}
      </div>
    </menuContaxt.Provider>
  );
}

export default MainPage;
