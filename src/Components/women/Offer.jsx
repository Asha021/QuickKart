import React from 'react'

const Offer = () => {
  return (
    <div className='lg:mx-20 mx-5'>
      <h1 className='lg:text-4xl text-3xl font-bold md:py-4 nav'>Best Offers</h1>
    <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      <div 
      data-aos="flip-down"
        style={{
          backgroundImage: "url(/500pxPics/girl.jpg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>25% OFF<br/>Buy Now</span>
      </div>
      <div
      data-aos="flip-down" 
        style={{
          backgroundImage: "url(/500pxPics/girl2.jpg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>50% OFF<br/>Buy Now</span>
      </div>
      <div 
      data-aos="flip-down"
        style={{
          backgroundImage: "url(/500pxPics/girl3.jpg)",
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
  )
}

export default Offer
