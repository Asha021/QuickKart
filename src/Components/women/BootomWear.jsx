import React from 'react'

const BootomWear = () => {
    const data = [
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:399},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:599},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:299},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:199},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:999},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:899},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:999},
    ]
  return (
    <div>
       <div className='lg:mx-20 mx-10 my-10'>
      <div className='md:flex md:justify-between items-center p-4'>
  <h1 className='font-bold lg:text-4xl text-3xl md:py-0 py-3 '>Bottom Wear</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4'>
          {data.map((item, index) => (
              <div key={index} className='border border-gray-300 p-4'>
                  <img src={item.img} alt="img"  className="scaleImg " />

                  <div className='text-center h-auto mt-2 '>
                      <h3 className='font-medium text-lg'>{item.title}</h3>
                     <div className=''>
                     <strong className='block my-1 text-lg text-red-700 '>₹{item.price}</strong>
                     {/* <button className='but2'>Buy Now</button> */}
                     <button className='bg-[#903233] text-white px-4 py-2 rounded hover:bg-[#7a2a2a]'>Buy Now</button>
                      </div>                  </div>
              </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default BootomWear
