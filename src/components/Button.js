import React from "react";

function Button({ text }) {
  return (
    <button className=" uppercase border-[2px] relative before:bg-priamryDark before:h-full before:w-full before:content-[''] before:absolute before:left-0 overflow-hidden before:z-[-10]  before:origin-bottom before:top-[100%] hover:before:top-0 hover:text-white   before:transition-all  before:duration-200 transition-all font-semibold border-priamryDark px-8 py-[5px] rounded-3xl ">
      {text}
    </button>
  );
}

export default Button;
