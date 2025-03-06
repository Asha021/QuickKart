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
        <div className='mx-20  my-10 '>
        <div className='flex justify-between items-center p-4'>
  <h1 className='font-bold text-4xl'>Sports Wear</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>
      {/* <h1 className=' font-bold text-4xl py-4'>Sports Wear</h1> */}
      <div className='flex  gap-4'>
        {data.map((item, index) => (
            <div key={index} className='border border-gray-200 p-4'>
                <img src={item.img} alt="img" className='scaleImg' />
                <div className='text-center'>
                <h3>{item.title}</h3>
                <strong>₹{item.price}</strong><br />
                <button className='but2'>Buy Now</button>
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Sport
