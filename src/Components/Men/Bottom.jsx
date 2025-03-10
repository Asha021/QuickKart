import React from 'react'

const Bottom = () => {
    const data = [
        {img:"/menIndian/ind1.jpeg", title:"Kurta Set", price:1499},
        {img:"/menIndian/ind2.jpg", title:"Trendy Shirt", price:42299},
        {img:"/menIndian/ind3.jpg", title:"Servani", price:21499},
        {img:"/menIndian/ind5.jpg", title:"Basket", price:11499},
        {img:"/menIndian/ind4.jpg", title:"Hoddy", price:22499},
    ]
  return (
    <div>
     <div>
      <div className=' lg:mx-20 mx-10 my-10 '>
      <div className='md:flex md:justify-between items-center nav p-4'>
  <h1 className='font-bold lg:text-4xl text-3xl md:py-0 py-3'>Indain & Festive Wear</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>
      {/* <h1 className=' font-bold text-4xl py-4'>Western Wear</h1> */}
      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
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

export default Bottom
