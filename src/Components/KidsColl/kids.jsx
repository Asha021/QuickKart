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
        <div className="relative h-screen w-full flex items-center justify-start">
          <img
            src="/a4-2.jpg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full  "
          />
          <div className="relative bg-opacity-50 p-10 rounded-lg max-w-xl text-white">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl">
            Take advantage of great deals
            </h1>
            <h2 className="text-2xl  mb-5">
            <h2 className=""> on smartphones! & <br />another Offers</h2>
            </h2>
            <button className="p-2 bg-red-900 hover:bg-red-950 border">
              Shop Now
            </button>
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
