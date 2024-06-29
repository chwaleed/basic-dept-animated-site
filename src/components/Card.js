"use client";
import React, { useState } from "react";
import Image from "next/image";

function Card(props) {
  const [isVideo, setIsVideo] = useState(false);
  if (props?.type == "video") {
    setIsVideo(true);
  }
  return (
    <div className="group  flex-1  inline-block">
      <div className="  w-[35rem]   overflow-hidden relative">
        {isVideo ? (
          <video
            className=" relative z-20 w-full  transition-all  scale-105 group-hover:scale-100"
            autoPlay
            loop
            muted
          >
            <source src="/CardVideo.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src={props.path}
            className=" relative z-20  transition-all  scale-105 group-hover:scale-100"
            objectFit="cover"
            alt="Card Image"
          />
        )}
      </div>
      <h1 className=" group-hover:underline    uppercase font-semibold  text-[2rem]">
        {props.title}
      </h1>
      <p className="uppercase w-[50%]">{props.text}</p>
    </div>
  );
}

export default Card;
