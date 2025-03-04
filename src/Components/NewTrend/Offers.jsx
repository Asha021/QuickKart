import React from 'react'

const Offers = () => {
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
      <div className='mx-20  my-10 mt-40'>
      <h1 className=' font-bold text-4xl py-4'>499 Only</h1>
      <div className='flex  gap-4'>
        {data.map((item, index) => (
            <div key={index} className='border border-gray-200 p-4'>
                <img src={item.img} alt="img" className='w-32 hover:scale-105 h-44 object-cover' />
                <div className='text-center'>
                <h3>{item.title}</h3>
                <strong>₹{item.price}</strong>
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Offers
