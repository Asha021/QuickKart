import React from 'react'

const Off = () => {
  return (
    <div>
      <div className='flex mx-20 gap-5'>
        <div 
       
        style={{
            backgroundImage: "url(/decor/cusion.jpeg)",
            backgroundSize: "cover",
            height:"400px",
            width:"600px",
            cursor:"pointer"
        }}
        ><span  className='py-60 ml-20 font  text-5xl flex text-white ' >25% OFF <br/>Buy Now </span></div>
        <div
        style={{
            backgroundImage: "url(/decor/first.jpeg)",
            backgroundSize: "cover",
            height:"400px",
            width:"600px",
            cursor:"pointer"
        }}
        ><span  className='py-60 ml-20 font  text-5xl flex text-white ' >50% OFF <br /> Buy Now </span></div>
      </div>
    </div>
  )
}

export default Off
