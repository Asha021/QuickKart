import React from 'react'
import Sport from './Sport'
import Indian from './Indian'
import Offers from './Offers'
import Bottom from './Bottom'

const Mens = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start bg-black/60">
          <img
            src="/Men.jpeg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full  opacity-75"
          />
          <div  data-aos="fade-down" data-aos-duration="1500"  className="relative  p-10  mx-5 max-w-xl text-white space-y-5">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
            From Casual Cool to Classic Sharp 
            </h1>
            <h2 className="text-lg  md:text-2xl font-light">
            Find Your Best Fit
            </h2>
            <div className="">
              <button className="bg-red-800 lg:px-8 lg:py-4  px-6 py-3 rounded  hover:border font-medium hover:bg-red-900 transition">
                Shop Now
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <Sport />
      <Bottom />
      <Offers />
      <Indian />
    </div>
  )
}

export default Mens
