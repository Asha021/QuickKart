import React from 'react'
// import PriceNav from './PriceNav'
import ClothCompo from './ClothCompo'

const Home = () => {
  return (
    <div>
     <div className="relative">
  <div className="relative  w-full h-[300px] bg-black">
    <img
      src="/cloth/head/img1.jpeg"
      alt="img"
      className="absolute hidden sm:block top-0 left-0 h-full object-cover opacity-70"
    />
    <img
      src="/cloth/indian/img2.jpeg"
      alt="img"
      className="absolute sm:hidden top-0 left-0 w-full h-full object-cover opacity-70"
    />
    <div   className="text-white top-30 max-w-lg absolute mx-10 z-10 p-5 rounded-lg">
      <h2 data-aos="fade-down" data-aos-duration="1500"  className="text-2xl md:text-4xl font-bold">
        Traditional Indian Wear for Every Occasion <br /> Explore Now
      </h2>
    </div>
  </div>
</div>
    {/* <PriceNav /> */}
    <ClothCompo />
    </div>
  )
}

export default Home
