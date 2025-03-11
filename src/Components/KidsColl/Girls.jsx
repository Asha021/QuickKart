import React from 'react'

const Girls = () => {
    const data = [
        {img:"/kid2/img1.jpeg", title:"Boys", price:11499},
        {img:"/kid2/gilr1.jpeg", title:"Girls", price:42299},
        {img:"/kid2/infant.jpeg", title:"Infant", price:21499},
        {img:"/acc.jpeg", title:"Accessories", price:22499},   
    ]
  return (
    <div>
      <div className="lg:mx-20  mx-10 mt-4 mb-14">
        <h2 className="text-4xl py-4 font-bold nav">Categories</h2>
        <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-1 ">
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
              <div className=" px-5 text-white text-3xl lg:text-4xl font pt-55">
              <h2>{key.title}</h2>
              </div>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Girls
