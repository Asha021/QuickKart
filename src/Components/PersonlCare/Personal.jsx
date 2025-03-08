import React from 'react'
import SelfCare from './SelfCare'
import Hair from './Hair'
import Face from './Face'
import Best from './Best'
const Personal = () => {
  return (
    <div>
       <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start">
          <img
            src="/a4-2.jpg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full  "
          />
          <div className="relative p-10 rounded-lg max-w-lg text-white">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl">
            Glow Inside Out 
            </h1>
            <h2 className="text-2xl  mb-5">
            <h2 className=""> Explore skincare, haircare, and Body Washes essentials tailored for you</h2>
            </h2>
            <button className="mainbut">
            Explore Routines
            </button>
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
