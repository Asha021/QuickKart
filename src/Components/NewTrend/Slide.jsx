import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slide = () => {
  const [slide, setSlide] = useState(0);

  const imgs = [
    { names: "Grab The Best Deals ", img: "/270px/img1.jpeg" ,img2:"/200small/img1.jpeg"},
    { names: "Summer Offers Buy Now", img: "/270px/mg5.jpeg",img2:"/200small/img2.jpeg" },
    { names: "New Arrivals", img: "/270px/img2.jpeg" ,img2:"/200small/img3.jpeg"},
  ];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % imgs.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <div className='lg:mb-20 mb-14'>
      <div className="flex mt-14 items-center justify-center h-70 md:mx-5 lg:mx-10 ">
        <FaChevronLeft 
          className="text-3xl cursor-pointer text-blue-600" 
          onClick={prevSlide} 
        />

        <div className="relative rounded-lg  h-[270px]  shadow-lg text-center w-full bg-black">
          <img  data-aos="fade-right" src={imgs[slide].img} alt='img' className="w-full hidden sm:block top-0 left-0 absolute h-[270px] rounded-lg opacity-55" />
          <img  data-aos="fade-right" src={imgs[slide].img2} alt='img' className="w-full sm:hidden top-0 left-0 absolute h-[270px] rounded-lg  opacity-80" />
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
