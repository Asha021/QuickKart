import React from "react";

const HomeDecor = () => {
  return (
    <div>
      <div class="mx-20 mt-4">
        <h2 class="text-4xl py-4 font-bold mx-5">New In Home</h2>

        <div class="grid grid-cols-3 gap-5">
          <div>
            <div
              style={{
                backgroundImage: `url(decor/cusion.jpeg)`,
                backgroundSize: "cover",
                height: "350px",
                width: "400px",
                cursor:"pointer"
              }}
            >
              <h2 className=" px-5 text-white text-3xl font pt-70">Cousions</h2>
            </div>
          </div>

          <div class="row-span-2 gap-1 flex flex-col">
            <div
              style={{
                backgroundImage: `url(decor/dinning.jpeg)`,
                backgroundSize: "cover",
                height: "172px",
                width: "400px",
                cursor:"pointer"
              }}
            >
              <h2 className=" px-5 text-white text-2xl font p-30 text-gary-900">
                Wallpapers
              </h2>
            </div>
            <div
              style={{
                backgroundImage: `url(decor/first.jpeg)`,
                backgroundSize: "cover",
                height: "175px",
                width: "400px",
                cursor:"pointer"
              }}
            >
              <h2 className=" px-5 text-white text-2xl font p-30">Lamps</h2>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(decor/ofa.jpeg)`,
              backgroundSize: "cover",
              height: "350px",
              width: "400px",
              cursor:"pointer"
            }}
          >
            <h2 className=" px-5 text-white text-3xl font pt-70">
              Sofa & Decor
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDecor;
