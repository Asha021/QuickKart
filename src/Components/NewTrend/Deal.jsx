import React from 'react'
import { useNavigate } from 'react-router-dom'

const Deal = () => {
  const navigate = useNavigate()
    const data = [
        {img:"/cloth/western/img1.jpeg", title:"Trendy Dresses", price:1499},
        {img:"/cloth/western/img2.jpeg", title:"BodyCon Dresses", price:1299},
        {img:"/cloth/western/img3.jpeg", title:"Floral Dress", price:1499},
        {img:"/cloth/western/img4.jpeg", title:"Western Dresses", price:1199},
        {img:"/cloth/western/img5.jpeg", title:"One Peice Dress", price:1099},
    ]
  return (
    <div className=''>
      <div className='lg:mx-20 mx-1 sm:mx-10 my-2 mb-10  md:my-10'>
      
      <div className='md:flex md:justify-between items-center p-4'>
  <h1 className='font-bold text-3xl md:text-4xl md:py-0 py-2 nav'>Best Deals on Dresses</h1>
  <button onClick={()=>navigate("/trendy/dresses")}  className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>
      <div className='grid lg:grid-cols-4 xl:grid-cols-5  grid-cols-2  md:grid-cols-3   gap-4'>
        {data.map((item, index) => (
            <div key={index} onClick={()=>navigate("/trendy/dresses")}   className='p-4 cursor-pointer border border-gray-200'>
                <img src={item.img} alt='img' className='scaleImg' />
                <div className='text-center mt-2'>
                <h3 className='font-medium text-lg'>{item.title}</h3>
                <strong className='block my-1 text-lg text-red-700 '>₹{item.price}</strong>
                {/* <button className='bg-[#903233] text-white px-4 py-2 rounded hover:bg-[#7a2a2a]'>Buy Now</button> */}
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Deal
