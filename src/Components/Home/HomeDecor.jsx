import React from "react";

const HomeDecor = () => {
  return (
    <div className="">
      <div className="mx-10 lg:mx-20 mt-4 ">
        <h2 className="text-4xl py-4 font-bold">New In Home</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-5">
          <div>
            <div
              style={{
                backgroundImage: `url(decor/cusion.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "350px",
                cursor: "pointer",
              }}
              className="flex items-end p-5 text-white text-3xl font-bold"
            >
              <h2>Cushions</h2>
            </div>
          </div>

          <div className="row-span-2 flex flex-col gap-5 md:gap-2 ">
            <div
              style={{
                backgroundImage: `url(decor/dinning.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "172px",
                cursor: "pointer",
              }}
              className="flex items-center p-5 text-white text-2xl font-bold"
            >
              <h2>Wallpapers</h2>
            </div>
            <div
              style={{
                backgroundImage: `url(decor/first.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "172px",
                cursor: "pointer",
              }}
              className="flex items-center p-10 text-white text-2xl font-bold"
            >
              <h2>Lamps</h2>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(decor/ofa.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "350px",
                cursor: "pointer",
              }}
              className="flex items-end p-5 text-white text-3xl font-bold"
            >
              <h2>Sofa & Decor</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDecor;
