import React from 'react'
import { useNavigate } from 'react-router-dom'

const Jwellary = () => {
  const navigate = useNavigate()
    const data = [
        {img:"/cloth/indian/img1.jpeg",price:399,title:"Lehnga"},
        {img:"/cloth/indian/img2.jpeg",price:599 ,title:"Dress"},
        {img:"/cloth/indian/mg3.jpeg",price:299 ,title:"Suit-set"},
        {img:"/cloth/indian/mg4.jpeg",price:199 ,title:"Kurti"},
        {img:"/cloth/indian/img1.jpeg",price:999 ,title:"Lehnga"},
        {img:"/cloth/indian/img5.jpeg",price:899 ,title:"Saree"},
        {img:"/cloth/indian/mg4.jpeg",price:999 ,title:"Kurti"},
    ]
  return (
    <div>
       
       <div className='lg:mx-20 sm:mx-10 mx-1 md:my-5'>
      <div className='md:flex md:justify-between items-center p-4'>
  <h1 className='font-bold lg:text-4xl text-3xl md:py-0 py-3 nav'>Indian Wear</h1>
  <button  onClick={()=>navigate("/traditional/wear/cloths")} className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4'>
          {data.map((item, index) => (
              <div onClick={()=>navigate("/traditional/wear/cloths")} key={index} className='border cursor-pointer border-gray-300 p-4'>
                  <img src={item.img} alt="img"  className="scaleImg " />

                  <div className='text-center h-auto mt-2 '>
                      {/* <h3 className='font-medium text-lg'>{item.title}</h3> */}
                     <div className=''>
                     <strong className='block my-1 text-lg text-red-700 '>₹{item.price}</strong>
                     <strong className='block my-1 text-lg  '>{item.title}</strong>
                     {/* <button className='but2'>Buy Now</button> */}
                     {/* <button className='bg-[#903233] text-white px-4 py-2 rounded hover:bg-[#7a2a2a]'>Buy Now</button> */}
                      </div>                  </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jwellary
