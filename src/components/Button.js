"use client";
import React, { useState } from "react";

function Button({ text, pink }) {
  // const [isPink, setIsPink] = useState(pink);
  return (
    <button
      className={` uppercase border-[2px]  relative   ${
        pink
          ? "before:bg-primaryPink hover:text-black border-primaryPink text-primaryPink"
          : "before:bg-priamryDark hover:text-white border-priamryDark text-priamryDark "
      }  before:h-full before:w-full before:content-[''] before:absolute before:left-0 overflow-hidden before:z-[-10] z-10 before:transition-top   before:origin-bottom before:top-[100%] hover:before:top-0    before:transition-all  before:duration-200 transition-all font-semibold  px-8 py-[5px] rounded-3xl `}
    >
      {text}
    </button>
  );
}

export default Button;
