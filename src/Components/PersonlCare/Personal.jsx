import React from 'react'
import SelfCare from './SelfCare'
import Hair from './Hair'
import Face from './Face'
import Best from './Best'
const Personal = () => {
  return (
    <div>
       <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start ">
          <img
            src="/makup.jpeg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div  data-aos="fade-down" data-aos-duration="1500"  className="relative nav  p-10  mx-5 max-w-xl text-white space-y-5">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
            Bold Looks, Smooth Feels 
            </h1>
            <h2 className="text-lg  md:text-2xl font-light">
            Grooming for OurSelf | Look Good, Feel Great 
            </h2>
            <div className="">
              <button className="bg-red-800 lg:px-8 lg:py-4  px-6 py-3 rounded  hover:border font-medium hover:bg-red-900 transition">
                Shop Now
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <SelfCare />
      <Hair />
      <Face />
      <Best />
    </div>
  )
}

export default Personal
