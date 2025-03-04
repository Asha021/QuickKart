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
      <h1 className=' font-bold text-4xl py-4'>Jewellery</h1>
      <div className='flex  gap-4'>
        {data.map((item, index) => (
            <div key={index} className='border border-gray-200 p-4'>
                <img src={item.img} alt="img" className='w-32 hover:scale-105 h-44 object-cover' />
                <div className='text-center '>
                {/* <div className='fle border'> */}
                <h3>{item.title}</h3>
                <strong className=' py-1'>₹{item.price}</strong><br />
                <button className='p-1 hover:shadow-lg shadow-gray-500  rounded  text-white bg-blue-500 hover:bg-blue-700'>Buy Now</button>
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
