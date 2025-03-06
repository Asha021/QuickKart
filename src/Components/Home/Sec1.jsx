import React from "react";
import Women from "./Women";
import Men from "./Men";
import HomeDecor from "./HomeDecor";
import Kids from "./Kids";

const Sec1 = () => {
  return (
    <div >
      <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start">
          <img
            src="/a4-2.jpg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full  "
          />
          <div className="relative bg-opacity-50 p-10 rounded-lg mx-5 max-w-xl text-white">
            <h1 className="text-3xl mb-5 md:text-4xl lg:text-5xl">
            Soaking in the serene warmth of the winter sun
            </h1>
            <button className="p-3 px-5 bg-red-900 hover:bg-red-950 border">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Women />
      <Men />
      <HomeDecor />
      <Kids />
    </div>
  );
};

export default Sec1;
