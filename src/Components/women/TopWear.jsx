import React from 'react'

const TopWear = () => {
    const data = [
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:999},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:599},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:299},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:1599},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:699},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:1999},
        {img:"/a2-1.jpg",title:"/a2-1.jpg",price:899},
    ]
  return (
    <div>
      <div>
      <div className='mx-20  my-10 '>
      <h1 className=' font-bold text-4xl py-4'>Western Wear</h1>
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

export default TopWear
