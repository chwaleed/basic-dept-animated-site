"use client";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Cursoal() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDown(true);
      setStartX(e.pageX - ref.current.offsetLeft);
      setScrollLeft(ref.current.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDown(false);
    };

    const handleMouseUp = () => {
      setIsDown(false);
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 3;
      ref.current.scrollLeft = scrollLeft - walk;
    };

    const slider = ref.current;
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listeners on component unmount
    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDown, startX, scrollLeft]);

  return (
    <div className="bg-priamryDark  font-FoMed h-screen w-screen">
      <div className="flex px-[5.5rem]  text-primaryPink py-[3.5rem]  bg-blue-900  justify-between ">
        <div className="flex font-semibold before:content-[''] before:w-[0.7rem] before:h-[0.7rem] before:rounded-[50%] before:mt-1  before:bg-primaryPink text-[1rem] ">
          <h1 className="ml-[2.2rem] leading-tight">
            (5)INTERNAL WORKS <br /> ©24 c/o BASIC/DEPT
          </h1>
          <h1 className=" ml-[3.8rem] leading-tight">
            A COLLECTION OF INTERNAL PROJECTS AND INITIATIVES UNDER THE
            <br />
            BASIC/DEPT BRAND.
          </h1>
        </div>
        <AiOutlineCloseCircle className="text-[3rem] text-primaryPink" />
      </div>
      <div
        ref={ref}
        className="flex bg-red-200 pointer-events-none overflow-hidden text-[30rem] gap-[4rem]"
      >
        <ol></ol>
      </div>
    </div>
  );
}

export default Cursoal;
