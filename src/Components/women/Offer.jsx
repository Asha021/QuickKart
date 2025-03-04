import React from 'react'

const Offer = () => {
  return (
    <div>
      <div className='flex mx-20  gap-2'>
        <div 
        style={{
            backgroundImage: "url(/girls/wool.jpeg)",
            backgroundSize: "cover",
            height:"400px",
            width:"400px",
            cursor:"pointer"
        }}
        ><span  className='py-60 ml-20 font  text-5xl flex text-white ' >25% OFF <br/>Buy Now </span></div>
        <div
        style={{
            backgroundImage: "url(/girls/hat.jpeg)",
            backgroundSize: "cover",
            height:"400px",
            width:"400px",
            cursor:"pointer"
        }}
        ><span  className='py-60 ml-20 font  text-5xl flex text-white ' >50% OFF <br /> Buy Now </span></div>
         <div
        style={{
            backgroundImage: "url(/girls/fashon.jpeg)",
            backgroundSize: "cover",
            height:"400px",
            width:"400px",
            cursor:"pointer"
        }}
        ><span  className='py-60 ml-20 font  text-5xl flex text-white ' >50% OFF <br /> Buy Now </span></div>
      </div>
     
      </div>
 
  )
}

export default Offer
