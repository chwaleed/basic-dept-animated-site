"use client";
import React, { useState } from "react";
import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import video from "../../videos/CardVideo.mp4";

function Card(props) {
  return (
    <div className="group  flex-1  inline-block">
      <div className="  w-[38rem]   overflow-hidden relative">
        {props.type == "video" ? (
          <BackgroundVideo src={video}> </BackgroundVideo>
        ) : (
          <Image
            src={props.path}
            className=" relative z-20  transition-all  scale-105 group-hover:scale-100"
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
