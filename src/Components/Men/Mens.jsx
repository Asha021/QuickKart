import React from 'react'
import Sport from './Sport'
import Indian from './Indian'
import Offers from './Offers'
import Bottom from './Bottom'

const Mens = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start">
          <img
            src="/Men.jpeg"
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
      <Sport />
      <Bottom />
      <Offers />
      <Indian />
    </div>
  )
}

export default Mens
