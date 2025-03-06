import React from "react";

const Women = () => {
  const data = [
    {
      img: "girls/baech.jpeg",
      tilte:"Beach Dresses"
    },
    {
      img: "girls/fashon.jpeg",
      tilte:"Western Cloths"
    },
    {
      img: "girls/hat.jpeg",
      tilte:"Trendy Dresses"
    },
    {
      img: "girls/wool.jpeg",
      tilte:"Woolen"
    },
  ];
  return (
    <div className=" ">
      <div className="lg:mx-20  mx-10 mt-4">
        <h2 className="text-4xl py-4 font-bold mx-5">Women</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
          {data.map((key, index) => (
            <div key={index} className="w-full">
              <div
                style={{
                  backgroundImage: `url(${key.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                  cursor: "pointer",
                }}
                className="flex items-end p-5 text-white text-2xl font-bold"
              >
                <h2>{key.tilte}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
