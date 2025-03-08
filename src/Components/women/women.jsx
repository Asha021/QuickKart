import React from 'react'
import TopWear from './TopWear'
import Jwellary from './Jwellary'
import BootomWear from './BootomWear'
import Offer from './Offer'
import Slide from '../NewTrend/slide'

const women = () => {
  return (
    <div>
       <div>
     </div>
       <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start">
          <img
            src="/a2-1.jpg"
            alt="img"
            className="absolute top-0 left-0 w-full h-full  "
          />
          <div className="relative bg-opacity-50  p-10 rounded-lg max-w-xl text-white">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl">
            Empower Your Beauty
            </h1>
            <h2 className="text-3xl mt-5 mb-5">
            <h2 className="">Be Bold. Be Beautiful. Be You.</h2>
            </h2>
            <button className="mainbut">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <TopWear />
      <Jwellary />
      <Slide />
      <Offer />
      <BootomWear />
    </div>
  )
}

export default women
