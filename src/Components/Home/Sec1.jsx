import React from "react";
import Women from "./Women";
import Men from "./Men";
import HomeDecor from "./HomeDecor";
import Kids from "./Kids";

const Sec1 = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="relative w-full h-full flex items-center justify-start bg-black/60">
          <img
            src="/a4-2.jpg"
            alt="img"
            className="absolute sm:block hidden w-full h-full  opacity-80"
          />
          <img
            src="/500pxPics/girl.jpg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full  opacity-80 sm:hidden"
          />
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="relative nav  p-10  mx-5 max-w-xl text-white space-y-5"
          >
            <h1 className="text-4xl   md:text-5xl lg:text-6xl font-bold leading-tight ">
              Your Style, Your Way
            </h1>
            <h2 className="text-lg   md:text-2xl font-light">
              Trendy Picks & Timeless Pieces <br /> Explore Now
            </h2>
            <div className="">
              <button className="bg-red-800   lg:px-8 lg:py-4  px-6 py-3 rounded  hover: font-medium hover:bg-red-900 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Women />
      <Men />
      <Kids />
      <HomeDecor />
    </div>
  );
};

export default Sec1;
