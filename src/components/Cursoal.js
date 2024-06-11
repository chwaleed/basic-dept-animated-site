"use client";
import React, { useEffect, useState, useRef } from "react";

function Cursoal() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const ref = useRef();
  console.log("Off set ", startX), console.log(scrollLeft);

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
    <div>
      <div
        ref={ref}
        className="flex bg-red-200 overflow-hidden text-[30rem] gap-[4rem]"
      >
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <p>Cursoal</p>
        </div>
        <div>
          <p>Cursoal</p>
        </div>
      </div>
    </div>
  );
}

export default Cursoal;
