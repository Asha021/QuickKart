import React from 'react'

const Sport = () => {
    const data = [
        {img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/s/s/s-tblhn-dp4-d144-tripr-original-imah8896zhqufmqy.jpeg?q=70", title:"T-shirt", price:499},
        {img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/s/s/s-tblhn-dp4-d144-tripr-original-imah8896zhqufmqy.jpeg?q=70", title:"Shoes", price:499},
        {img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/s/s/s-tblhn-dp4-d144-tripr-original-imah8896zhqufmqy.jpeg?q=70", title:"Saree", price:499},
        {img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/s/s/s-tblhn-dp4-d144-tripr-original-imah8896zhqufmqy.jpeg?q=70", title:"Night dress", price:499},
        {img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/s/s/s-tblhn-dp4-d144-tripr-original-imah8896zhqufmqy.jpeg?q=70", title:"Watch", price:499},
        {img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/s/s/s-tblhn-dp4-d144-tripr-original-imah8896zhqufmqy.jpeg?q=70", title:"Shoes", price:499},
        {img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/s/s/s-tblhn-dp4-d144-tripr-original-imah8896zhqufmqy.jpeg?q=70", title:"Pant", price:499}
    ]
  return (
    <div>
        <div>
      <div className='lg:mx-20 mx-10 mt-3 '>
      <div className='md:flex md:justify-between items-center p-4'>
  <h1 className='font-bold lg:text-4xl text-3xl md:py-0 py-3'>Sports Wear</h1>
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

export default Sport
