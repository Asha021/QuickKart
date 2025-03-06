import React from 'react'

const TopOffer = () => {
    const data = [
        {img:"/girls/hat.jpeg", title:"Dress", price:"60-70% Off"},
        {img:"/kid/girl1.jpeg", title:"Kids Dresses", price:"Under ₹399"},
        {img:"/new/bag.jpeg", title:"SuitCases", price:"min 70% Off"},
        {img:"/new/watch2.jpeg", title:"Watch", price:"60-70% Off"},
        {img:"/new/shoes2.jpeg", title:"Shoes", price:"60-70% Off"},
        {img:"/new/shirt/shirt1.jpeg", title:"Shirt", price:"₹14199"}
    ]
  return (
    <div>
      <div className='lg:mx-20 mx-10 my-10'>
      <div className='md:flex md:justify-between items-center p-4'>
  <h1 className='font-bold text-4xl md:py-0 py-2'>Top Offers</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
  </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4'>
        {data.map((item, index) => (
            <div key={index} className='p-4 border border-gray-200 rounded-lg shadow-md'>
                <img src={item.img} alt="img" className='w-full h-44 object-cover hover:scale-105 transition duration-300' />
                <div className='text-center mt-2'>
                <h3 className='font-semibold text-lg'>{item.title}</h3>
                <strong className='text-red-700 text-lg'>{item.price}</strong>
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default TopOffer
