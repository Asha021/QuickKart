
import React from 'react'

const TopOffer = () => {
    const data = [
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Dress", price:"60-70% Off"},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Kids Dresses", price:"Under ₹399"},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"SuitCases", price:"min 70% Off"},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Watch", price:"60-70% Off"},
        // {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Vivo-S20", price:11499},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Shoes", price:"60-70% Off"},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Shirt", price:14199}
    ]
  return (
    <div>
      <div className='mx-20 my-10'>
      <h1 className=' font-bold text-4xl py-4'>Top Offers</h1>
      <div className='flex  gap-2'>
        {data.map((item, index) => (
            <div key={index} className='p-4  w-96 border border-gray-200'>
                <img src={item.img} alt="img" className='w-32 hover:scale-105 h-44 object-cover' />
                <div className='text-center'>
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default TopOffer
