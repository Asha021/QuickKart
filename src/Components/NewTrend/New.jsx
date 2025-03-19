import React from "react";
import Offers from "./Offers";
import Deal from "./Deal";
import TopOffer from "./TopOffer";
import Off from "./Off";
import { useNavigate } from "react-router-dom";


const New = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start bg-black">
          <img
            src="/hat.jpeg"
            alt="img"
            className="absolute sm:block hidden top-0 left-0 w-full h-full opacity-80"
          />
            <img
            src="/cloth/western/img6.jpeg"
            alt="img"
            className="absolute sm:hidden top-0 left-0 w-full h-full opacity-80 "
          />
          <div  data-aos="fade-down" data-aos-duration="1500"  className="relative nav  p-10  mx-5 max-w-xl text-white space-y-5">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
            New Arrivals
            </h1>
            <h2 className="text-lg   md:text-2xl font-light">
            Explore Now
            </h2>
            <div className="">
              <button  onClick={()=>navigate("/traditional/wear/cloths")} className="bg-red-800  lg:px-8 lg:py-4  px-6 py-3 rounded  font-medium hover:bg-red-900 transition">
                Shop Now
              </button>
              
            </div>
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
