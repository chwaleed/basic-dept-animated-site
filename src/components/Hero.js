import React from "react";
// import vid from "../assets/videos/2nd.mp4";
function Hero() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div>
        <h1 className="font-">BASIC/DEPT</h1>
      </div>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/2nd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Hero;
