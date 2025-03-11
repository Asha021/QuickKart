import React from 'react'

const GirlSec = () => {
    const data = [
        {img:"/kid2/girl3.jpeg",  price:1499},
        {img:"/kid2/girl4.jpeg",  price:499},
        {img:"/kid2/girl6.jpeg", price:2499},
        {img:"/kid2/gilr1.jpeg", price:1499},
        {img:"/kidCombo/img5.jpeg", price:3499},
       
    ]
  return (
    <div>
      <div>
      <div className='lg:mx-20 mx-10 my-5 '>
      <div className='md:flex md:justify-between items-center nav p-4'>
  <h1 className='font-bold lg:text-4xl text-3xl md:py-0 py-3'>Girls Section</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {data.map((item, index) => (
            <div key={index} className='border  border-gray-200 p-4'>
                <img src={item.img} alt="img" className='scaleImg ' />
                <div className='text-center '>
              
                {/* <h3>{item.title}</h3> */}
                <strong className=' py-1'>₹{item.price}</strong><br />
                <button className='bg-[#903233] text-white px-4 py-2 rounded hover:bg-[#7a2a2a]'>Buy Now</button>
                
                </div>
            </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default GirlSec
