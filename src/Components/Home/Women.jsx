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
    <div>
      <div className="mx-20 mt-4">
        <h2 className="text-4xl py-4 font-bold mx-5">Women</h2>
        <div className="flex gap-0 ">
          {data.map((key) => (
            <div>
              <div
                style={{
                  backgroundImage: `url(${key.img})`,
                  backgroundSize: "cover",
                  height:"300px",
                  width:"300px",
                  cursor:"pointer"
                }}
              >
               <div className=" px-5 text-white text-2xl font pt-64">
               <h2>{key.tilte}</h2>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
