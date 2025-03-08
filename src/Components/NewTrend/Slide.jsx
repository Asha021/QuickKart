import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slide = () => {
  const [slide, setSlide] = useState(0);

  const imgs = [
    { names: "Grab The Best Deals ", review: "/270px/img1.jpeg" },
    { names: "Summer Offers Buy Now", review: "/270px/mg5.jpeg" },
    { names: "New Arrivals", review: "/270px/img2.jpeg" },
    // { names: "Grab Best Deals On Jwellary", review: "/270px/img3.jpeg" },
    { names: "Buy & Get 50% Off", review: "/270px/img4.jpeg" },
  ];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % imgs.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <div className='lg:mb-20 mb-14'>
      <div className="flex mt-14 items-center justify-center h-70 mx-5 lg:mx-10 ">
        <FaChevronLeft 
          className="text-3xl cursor-pointer text-blue-600" 
          onClick={prevSlide} 
        />

        <div className="bg-white mt-10 relative rounded-lg  h-[270px]  shadow-lg text-center w-full ">
          <img src={imgs[slide].review} alt='img' className="w-full top-0 left-0 absolute h-[270px] rounded-lg" />
          <h4 className="mt-4 font-bold absolute  text-white text-3xl max-w-xl lg:text-5xl py-20 mx-5 lg:mx-0 lg:p-20">{imgs[slide].names}</h4> 
        </div>

        <FaChevronRight 
          className="text-3xl cursor-pointer  text-blue-600" 
          onClick={nextSlide} 
        />
      </div>
    </div>
  );
};

export default Slide;
