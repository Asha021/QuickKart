import React from 'react'

const Best = () => {
   
  return (
    <div>
      <div className='lg:mx-20 mx-10'>
      <h1 className='lg:text-4xl text-3xl font-bold py-4 nav'>Combos</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      <div
       data-aos="flip-up"
        style={{
          backgroundImage: "url(/kidCombo/img1.jpeg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>25% OFF<br/>Buy Now</span>
      </div>
      <div
        data-aos="flip-up"
        style={{
          backgroundImage: "url(/kidCombo/img2.jpeg)",
          backgroundSize: "cover",
          height: "300px",
          cursor: "pointer",
        }}
        className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
      >
        <span className='mt-30'>50% OFF<br/>Buy Now</span>
      </div>
      <div
       data-aos="flip-up"
        style={{
          backgroundImage: "url(/kidCombo/img4.jpeg)",
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
