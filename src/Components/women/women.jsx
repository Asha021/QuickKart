import React from 'react'
import TopWear from './TopWear'
import Jwellary from './Jwellary'
import BootomWear from './BootomWear'
import Offer from './Offer'
import Slide from '../NewTrend/slide'

const women = () => {
  return (
    <div>
       <div className="h-screen">
        <div className="relative h-screen w-full flex items-center justify-start bg-black">
          <img
            src="/a2-1.jpg"
            alt="img"
            className="absolute hidden sm:block top-0 left-0 w-full h-full opacity-90 "
          />
          <img
            src="/500pxPics/girl2.jpg"
            alt="img"
            className="absolute top-0 sm:hidden left-0 w-full h-full opacity-90 "
          />
          <div  data-aos="fade-down" data-aos-duration="1500"  className="relative nav p-10  mx-5 max-w-xl text-white space-y-5">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
            Empower Your Style 
            </h1>
            <h2 className="text-lg  md:text-2xl font-light">
            Fashion for Every Woman | Exoplor fashion
            </h2>
            <div className="">
              <button className="bg-red-800 lg:px-8 lg:py-4  px-6 py-3 rounded  font-medium hover:bg-red-900 transition">
                Shop Now
              </button>
              
            </div>
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
