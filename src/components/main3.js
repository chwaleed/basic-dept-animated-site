import React from "react";
import Button from "./Button";
import Card1 from "@/assets/Card1.webp";
import Card2 from "@/assets/Card2.webp";
import Card from "./Card";

function Main3() {
  const cardContent = [
    {
      title: "Patagonia",
      text: "An eCommerce experience driven by Patagonia’s brand mission",
      path: Card1,
      type: "image",
    },
    {
      title: "Wilson",
      text: "A century-old sports brand finding its place in culture",
      path: Card2,
      type: "image",
    },
    {
      title: "Google Store",
      text: "An eCommerce experience helping Google bring its hardware to people across the globe",
      path: Card2,
      type: "video",
    },
  ];

  return (
    <div>
      <div className="flex px-[5%] mt-[5rem]">
        <div className="flex-1 pl-[4rem] ">
          <p className="text-[2.5rem] mb-12 tracking-tight pr-[20%]   leading-snug font-semibold text-priamryDark">
            BASIC/DEPT® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </p>
          <Button text={"See the Work"} />
        </div>
        <div className="flex-1 ">
          <h1 className="text-[18rem] overflow-hidden px-0 py-0 mt-[-6rem]   text-right text-priamryDark flex-1 font-bold">
            B/D&#174;
          </h1>
        </div>
      </div>

      {cardContent.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          text={item.text}
          type={item.type}
          path={item?.path}
        />
      ))}
    </div>
  );
}

export default Main3;
