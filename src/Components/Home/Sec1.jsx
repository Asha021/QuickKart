import React from "react";
import Women from "./Women";
import Men from "./Men";
import HomeDecor from "./HomeDecor";
import Kids from "./Kids";

const Sec1 = () => {
  return (
    <div >
      <div className="h-screen">
      <div  className="h-full"  style={{
                 backgroundImage: `url(a4-2.jpg)`,
                 backgroundSize: "cover"
               }}
             >
             <div  className="py-90 ml-20 font  text-5xl text-white">
             <h1>Shok in the winter sun</h1>
             <h2 className="mb-10">Shop Now</h2>
             <button className="p-2  bg-red-900 hover:bg-red-950 border">Submit</button>
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
