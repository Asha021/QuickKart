import React from 'react'
import Men from '../../Home/Men'
import PriceNav from './PriceNav'

const Home = () => {
  return (
    <div>
     <div className="relative">
  <div className="relative w-full h-[300px] ">
    <img
      src="/270px/img2.jpeg"
      alt="img"
      className="absolute sm:block hidden top-0 left-0 w-full h-full object-cover"
    />
    <img
      src="/500pxPics/men6.jpg"
      alt="img"
      className="absolute sm:hidden top-0 left-0 w-full h-full object-cover"
    />
    <div className="text-white top-30 max-w-lg absolute mx-10 z-10 p-5 rounded-lg">
      <h2 className="text-lg md:text-3xl font-bold">
        Traditional Indian Wear for Every Occasion <br /> Explore Now
      </h2>
    </div>
  </div>
</div>
    <PriceNav />
    {/* <SizeNav /> */}
    </div>
  )
}

export default Home
