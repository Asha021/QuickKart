import React from 'react'

const TopWear = () => {
    const data = [
        {img:"/girlBott/dress.jpg",title:"BodyCon Dress",price:999},
        {img:"/girlBott/dress8.jpeg",title:"Floral Dress",price:599},
        {img:"/girlBott/dress2.jpg",title:"Short Dress",price:299},
        {img:"/girlBott/dress3.jpg",title:"Skirts",price:1599},
        {img:"/girlBott/dress4.jpg",title:"Shirts",price:699},
        {img:"/girlBott/dress5.jpg",title:"Wool",price:1999},
        {img:"/girlBott/dress6.jpg",title:"Trending Cloths",price:899},
    ]
  return (
    <div>
      <div>
      <div className='lg:mx-20 mx-10 my-10 '>
      <div className='md:flex md:justify-between items-center p-4'>
  <h1 className='font-bold lg:text-4xl text-3xl md:py-0 py-3'>Western Wear</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>
      {/* <h1 className=' font-bold text-4xl py-4'>Western Wear</h1> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4'>
        {data.map((item, index) => (
            <div key={index} className='border  border-gray-200 p-4'>
                <img src={item.img} alt="img" className='scaleImg ' />
                <div className='text-center '>
                {/* <div className='fle border'> */}
                <h3>{item.title}</h3>
                <strong className=' py-1'>₹{item.price}</strong><br />
                <button className='bg-[#903233] text-white px-4 py-2 rounded hover:bg-[#7a2a2a]'>Buy Now</button>
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
