import React from 'react'

const Girls = () => {
    const data = [
        {img:"/kid/child.jpeg", title:"Boys", price:11499},
        {img:"/kid/child.jpeg", title:"Girls", price:42299},
        {img:"/kid/child.jpeg", title:"Infant", price:21499},
        {img:"/kid/child.jpeg", title:"Accessories", price:22499},
        // {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Vivo-S20", price:11499},
       
    ]
  return (
    <div>
      <div className="lg:mx-20  mx-10 mt-4 mb-14">
        <h2 className="text-4xl py-4 font-bold">Categories</h2>
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
