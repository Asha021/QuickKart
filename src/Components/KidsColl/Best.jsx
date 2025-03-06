import React from 'react'

const Best = () => {
    const data = [
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Vivo", price:999},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Samsung", price:4299},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Oppo", price:1499},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Mi", price:2299},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Vivo-S20", price:499},
       
    ]
  return (
    <div>
      <div className='lg:mx-20 mx-10'>
      <h1 className='lg:text-4xl text-3xl font-bold py-4'>Combos</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      <div 
        style={{
          backgroundImage: "url(/girls/wool.jpeg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>25% OFF<br/>Buy Now</span>
      </div>
      <div
        style={{
          backgroundImage: "url(/girls/hat.jpeg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>50% OFF<br/>Buy Now</span>
      </div>
      <div 
        style={{
          backgroundImage: "url(/girls/fashon.jpeg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>25% OFF<br/>Buy Now</span>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Best
