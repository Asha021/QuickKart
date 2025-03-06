import React from 'react'

const Kids = () => {
    const data = [
        {
          img: "kid/girl1.jpeg",
          tilte:"Baby Girl"
        },
        {
            img: "kid/girl2.jpeg",
            tilte:"Infant Girls"
          },
          {
            img: "kid/child.jpeg",
            tilte:"Girl & Boys Collection"
          },
          {
            img: "kid/girl3.jpeg",
            tilte:"New Wear"
          }
       
      ];
  return (
    <div>
       <div className="lg:mx-20  mx-10 mt-4 mb-14">
        <h2 className="text-4xl py-4 font-bold mx-5">Kids</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
          {data.map((key) => (
             <div>
             <div
               style={{
                 backgroundImage: `url(${key.img})`,
                 backgroundSize: "cover",
                 height:"300px",
                 backgroundPosition:"center",
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

export default Kids
