import React from "react";
import Offers from "./Offers";
import Deal from "./Deal";
import TopOffer from "./TopOffer";
import Off from "./Off";


const New = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start">
          <img
            src="/hat.jpeg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full  "
          />
          <div className="relative bg-opacity-50 p-10 rounded-lg max-w-xl text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Take advantage of great deals
            </h1>
            <h2 className="text-2xl  mb-5">
              on smartphones! & <br /> another Offers
            </h2>
            <button className="mainbut">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Offers />
      <Deal />
      <Off />
      {/* <Slide /> */}
      <TopOffer />
    </div>
  );
};

export default New;
