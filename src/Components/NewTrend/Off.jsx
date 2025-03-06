import React from 'react';

const Off = () => {
  return (
    <div className=' md:mx-20 mx-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
        <div 
          style={{
            backgroundImage: "url(/decor/cusion.jpeg)",
            backgroundSize: "cover",
            height: "300px",
            cursor: "pointer",
          }}
          className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
        >
          <span>25% OFF<br/>Buy Now</span>
        </div>
        <div
          style={{
            backgroundImage: "url(/decor/first.jpeg)",
            backgroundSize: "cover",
            height: "300px",
            cursor: "pointer",
          }}
          className='flex items-center justify-center text-white md:text-4xl lg:text-5xl text-3xl font-bold'
        >
          <span>50% OFF<br/>Buy Now</span>
        </div>
      </div>
    </div>
  );
};

export default Off;
