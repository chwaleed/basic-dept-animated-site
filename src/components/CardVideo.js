import React from "react";

function CardVideo() {
  return (
    <video
      className=" relative z-20 w-full  transition-all  scale-105 group-hover:scale-100"
      autoPlay
      loop
      muted
    >
      <source src="./CardVideo.mp4" type="video/mp4" />
    </video>
  );
}

export default CardVideo;
