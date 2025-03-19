import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopOffer = () => {
  const navigate = useNavigate()
    const data = [
        {img:"/girls/hat.jpeg", title:"Dress", price:"60-70% Off"},
        {img:"/cloth/western/img2.jpeg", title:"BodyCon Dresses", price:"Under ₹399"},
        {img:"/girlBott/bott2.jpg", title:"Bottom Wear", price:"min 70% Off"},
        {img:"/girlBott/dress3.jpg", title:"Skirts", price:"60-70% Off"},
        {img:"/girlBott/dress4.jpg", title:"Shirts", price:"60-70% Off"},
        {img:"/girlBott/dress8.jpeg", title:"Long Dresses", price:"₹14199"}
    ]
  return (
    <div>
      <div className='lg:mx-20 mx-1 sm:mx-10 mb-10 '>
      <div className='md:flex md:justify-between nav items-center p-4'>
  <h1 className='font-bold md:text-4xl text-3xl md:py-0 py-2'>Top Offers</h1>
  <button onClick={()=>navigate("/western/wear/cloths")} className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
  </div>
      
      <div className='grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-4'>
        {data.map((item, index) => (
            <div onClick={()=>navigate("/western/wear/cloths")}  key={index} className='p-4 border cursor-pointer border-gray-200 shadow-md'>
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
