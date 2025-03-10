import React from 'react'

const Deal = () => {
    const data = [
        {img:"/phone/phone.jpeg", title:"POCO", price:11499},
        {img:"/phone/phone2.jpeg", title:"VIVO", price:42299},
        {img:"/phone/phone3.jpeg", title:"I Phone", price:31499},
        {img:"/phone/phone4.jpeg", title:"Saamsung", price:22499},
        {img:"/phone/phone5.jpeg", title:"Redmi", price:11499},
    ]
  return (
    <div className=''>
      <div className='lg:mx-20 mx-10 my-10'>
      
      <div className='md:flex md:justify-between items-center p-4'>
  <h1 className='font-bold text-4xl md:py-0 py-2 nav'>Best Deals on Smartphones</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>
      <div className='grid lg:grid-cols-4 xl:grid-cols-5  sm:grid-cols-2  md:grid-cols-3  grid-cols-1 gap-4'>
        {data.map((item, index) => (
            <div key={index} className='p-4 border border-gray-200'>
                <img src={item.img} alt='img' className='scaleImg' />
                <div className='text-center mt-2'>
                <h3 className='font-medium text-lg'>{item.title}</h3>
                <strong className='block my-1 text-lg text-red-700 '>₹{item.price}</strong>
                <button className='bg-[#903233] text-white px-4 py-2 rounded hover:bg-[#7a2a2a]'>Buy Now</button>
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Deal
