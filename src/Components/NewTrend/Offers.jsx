import React from 'react'
import { useNavigate } from 'react-router-dom'

const Offers = () => {
  const navigate = useNavigate()

    const data = [
        {img:"/cloth/indian/img10.jpeg", title:"Saree", price:499 , navigate:"/traditional/wear/cloths"},
        {img:"/cloth/indian/img1.jpeg", title:"Dress", price:499, navigate:"/traditional/wear/cloths"},
        {img:"/new/saree.jpeg", title:"Saree", price:499, navigate:"/traditional/wear/cloths"},
        {img:"/new/nyt.jpeg", title:"Night dress", price:499, navigate:"/nightware/shorts"},
        {img:"/cloth/indian/img7.jpeg", title:"Saree", price:499, navigate:"/traditional/wear/cloths"},
        {img:"/cloth/indian/img1.jpeg", title:"Dress", price:499, navigate:"/traditional/wear/cloths"},
        // {img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/s/s/s-tblhn-dp4-d144-tripr-original-imah8896zhqufmqy.jpeg?q=70", title:"Pant", price:499}
    ]
  return (
    <div className=''>
      <div className='lg:mx-20 mx-1 sm:mx-10 md:my-10'>
      <div className='md:flex md:justify-between items-center p-4 nav'>
  <h1 className='font-bold md:text-4xl text-3xl md:py-0 py-3'>499 Only</h1>
  <button onClick={()=>navigate("/traditional/wear/cloths")} className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>

        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 lg:gap-4 '>
          {data.map((item, index) => (
              <div onClick={()=>navigate(item.navigate)} key={index} className='border cursor-pointer border-gray-300 p-4'>
                  <img src={item.img} alt="img"  className="scaleImg " />

                  <div className='text-center h-auto mt-2 '>
                      <h3 className='font-medium text-lg'>{item.title}</h3>
                     <div className=''>
                     <strong className='block my-1 text-lg text-red-700 '>₹{item.price}</strong>
                      {/* <button className='bg-[#903233] text-white px-4 py-2 rounded hover:bg-[#7a2a2a]'>Buy Now</button> */}
                      </div>                  </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Offers
