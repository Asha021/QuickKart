import React from 'react';
import { useNavigate } from 'react-router-dom';

const Off = () => {
  const navigate = useNavigate()
  return (
    <div className=' lg:mx-20 mx-5 sm:mx-10'>
      <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 '>
        <div 
        onClick={()=>navigate("/trendy/dresses")}
        data-aos="zoom-in-up"
          style={{
            backgroundImage: "url(/cloth/western/img1.jpeg)",
            backgroundSize: "cover",
            height: "300px",
            cursor: "pointer",
          }}
          className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
        >
          <span>25% OFF<br/>Buy Now</span>
        </div>
        <div
        onClick={()=>navigate("/trendy/dresses")}
        data-aos="zoom-in-up"
          style={{
            backgroundImage: "url(/cloth/western/img3.jpeg)",
            backgroundSize: "cover",
            height: "300px",
            cursor: "pointer",
          }}
          className='flex items-center  justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
        >
          <span>50% OFF<br/>Buy Now</span>
        </div>
      </div>
    </div>
  );
};

export default Off;
