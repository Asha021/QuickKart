import React from 'react'
import TopWear from './TopWear'
import Jwellary from './Jwellary'
import BootomWear from './BootomWear'
import Offer from './Offer'
import Slide from '../NewTrend/slide'
import { useNavigate } from 'react-router-dom'

const women = () => {
  const navigate = useNavigate()
  return (
    <div>
       <div className="">
        <div className="relative md:h-screen pt-0 w-full flex items-center justify-start bg-black/50">
          <img
            src="/a2-1.jpg"
            alt="img"
            className="absolute pt-20 hidden sm:block top-0 left-0 w-full h-full opacity-80 "
          />
          <img
            src="/200small/img2.jpeg"
            alt="img"
            className="absolute pt-20 top-0 sm:hidden left-0 w-full h-full opacity-80 "
          />
          <div  data-aos="fade-down" data-aos-duration="1500"  className="relative nav p-10 pt-30 mx-5 max-w-xl text-white space-y-5">
            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
            Empower Your Style 
            </h1>
            <h2 className="text-lg  md:text-2xl font-light">
            Fashion for Every Woman | Exoplor fashion
            </h2>
            <div className="">
              <button    onClick={()=>navigate("/western/wear/cloths")} className="bg-red-800 lg:px-8 lg:py-4  px-6 py-3 rounded  font-medium hover:bg-red-900 transition">
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
