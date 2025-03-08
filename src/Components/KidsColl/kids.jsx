import React from 'react'
import Girls from './Girls'
import Boy from './Boy'
import Best from './Best'
import GirlSec from './GirlSec'
import SizeChart from './SizeChart'

const kids = () => {
  return (
    <div>
       <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start bg-black/60">
          <img
            src="/a4-2.jpg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full  opacity-75"
          />
          <div  data-aos="fade-down" data-aos-duration="1500"  className="relative  p-10  mx-5 max-w-xl text-white space-y-5">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
            Bright Colors, Happy Hearts
            </h1>
            <h2 className="text-lg  md:text-2xl font-light">
            Kids' Collection Inside! <br /> Explore Now
            </h2>
            <div className="">
              <button className="bg-red-800 lg:px-8 lg:py-4  px-6 py-3 rounded  hover:border font-medium hover:bg-red-900 transition">
                Shop Now
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <Girls />
      <Boy />
      <Best />
      <GirlSec />
      <SizeChart />
    </div>
  )
}

export default kids
