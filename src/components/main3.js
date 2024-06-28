import React from "react";
import Button from "./Button";

function Main3() {
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
    </div>
  );
}

export default Main3;
