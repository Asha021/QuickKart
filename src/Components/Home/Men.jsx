import React from 'react'

const Men = () => {
    const data = [
        {
          img: "boys/boy1.jpeg",
           tilte:"Shirts"
        },
        {
            img: "boys/forml.jpeg",
             tilte:"Formal Wear"
          
          },
          {
            img: "boys/kurta.jpeg",
             tilte:"Kurta Set"
          },
          {
            img: "boys/court.jpeg",
             tilte:"Court-Pant"
          }
       
      ];
  return (
    <div>
      <div className="lg:mx-20  mx-10 mt-4">
        <h2 className="text-4xl py-4 font-bold mx-5">Men</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {data.map((key) => (
            <div>
            <div
              style={{
                backgroundImage: `url(${key.img})`,
                backgroundSize: "cover",
                height:"300px",
                backgroundPosition:"center",
                // width:"300px",
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
  )
}

export default Men
