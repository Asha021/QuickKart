import React from 'react'

const Offers = () => {
  return (
    <div>
      <div className=' lg:mx-20 mx-10'>
      <h1 className='lg:text-4xl text-3xl font-bold py-4'>Offers Of The Day</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      <div
       data-aos="flip-left" 
        style={{
          backgroundImage: "url(/500pxPics/men.jpg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>25% OFF<br/>Buy Now</span>
      </div>
      <div
       data-aos="flip-left"
        style={{
          backgroundImage: "url(/500pxPics/men2.jpg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>50% OFF<br/>Buy Now</span>
      </div>
      <div
       data-aos="flip-left" 
        style={{
          backgroundImage: "url(/500pxPics/men3.jpg)",
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
  <div className=' lg:mx-20 mx-10'>
      <h1 className='lg:text-4xl text-3xl font-bold py-4'>New Collection</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      <div
       data-aos="flip-left" 
        style={{
          backgroundImage: "url(/500pxPics/men4.jpg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>25% OFF<br/>Buy Now</span>
      </div>
      <div
       data-aos="flip-left"
        style={{
          backgroundImage: "url(/500pxPics/men5.jpg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>50% OFF<br/>Buy Now</span>
      </div>
      <div
       data-aos="flip-left" 
        style={{
          backgroundImage: "url(/500pxPics/men6.jpg)",
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

export default Offers
