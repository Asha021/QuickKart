import React from 'react'

const Jwellary = () => {
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
        <div>
      <div className='mx-20  my-10 '>
      <div className='flex justify-between items-center p-4'>
  <h1 className='font-bold text-4xl'>Jewellery</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>
      {/* <h1 className=' font-bold text-4xl py-4'></h1> */}
      <div className='flex  gap-4'>
        {data.map((item, index) => (
            <div key={index} className='border border-gray-200 p-4'>
                <img src={item.img} alt="img" className='w-32 hover:scale-105 h-44 object-cover' />
                <div className='text-center '>
                {/* <div className='fle border'> */}
                <h3>{item.title}</h3>
                <strong className=' py-1'>₹{item.price}</strong><br />
                <button className='but2'>Buy Now</button>
                {/* </div> */}
                </div>
            </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Jwellary
