"use client";
import React, { useEffect, useState, useRef } from "react";

function Cursoal() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();
  const ref = useRef();

  useEffect(() => {
    window.addEventListener("mousedown", () => {
      setIsDown(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(ref.current.scrollLeft);
    });

    return () => {
      window.removeEventListener("mousedown");
    };
  }, []);

  return (
    <div>
      <div
        ref={ref}
        className="flex  bg-red-200  pointer-events-none  overflow-hidden text-[30rem] gap-[4rem] "
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
