import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slide = () => {
  const [slide, setSlide] = useState(0);

  const imgs = [
    { names: "John Doe", review: "/a3-1.jpg" },
    { names: "Jane Smith", review: "https://tse3.mm.bing.net/th?id=OIP.BJCe-jcOGmwdJqWrPAYoegHaE7&pid=Api&P=0&h=180" },
    { names: "Mark Wilson", review: "/a3-1.jpg" },
    { names: "Lisa Adams", review: "https://tse3.mm.bing.net/th?id=OIP.BJCe-jcOGmwdJqWrPAYoegHaE7&pid=Api&P=0&h=180" },
    { names: "Chris Evans", review: "/a3-1.jpg" },
  ];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % imgs.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <div>
      <div className="flex mt-14 items-center justify-center h-70 mx-10 ">
        <FaChevronLeft 
          className="text-3xl cursor-pointer text-blue-600" 
          onClick={prevSlide} 
        />

        {/* <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full "> */}
          <img src={imgs[slide].review} alt='img' className="w-full mx-3 h-70 rounded-lg" />
          {/* <h4 className="mt-4 font-bold text-xl">{imgs[slide].names}</h4> */}
        {/* </div> */}

        <FaChevronRight 
          className="text-3xl cursor-pointer  text-blue-600" 
          onClick={nextSlide} 
        />
      </div>
    </div>
  );
};

export default Slide;
