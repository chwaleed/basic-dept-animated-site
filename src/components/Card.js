import React from "react";
import Card1 from "@/assets/Card1.webp";
import Card2 from "@/assets/Card1.webp";
import Image from "next/image";

function Card() {
  return (
    <div className="flex-1   w-full">
      <div className=" w-[40rem]  overflow-hidden relative">
        <Image
          src={Card1}
          className=" relative z-20   overflow-hidden bg-yellow-600  transition-all  scale-105 hover:scale-100"
          objectFit="cover"
          alt="Card Image"
        />
      </div>
      <h1 className="    uppercase font-semibold  text-[2rem]">patagonia</h1>
      <p>An eCommerce experience driven by Patagonia’s brand mission</p>
    </div>
  );
}

export default Card;
