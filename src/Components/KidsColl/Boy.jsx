import React from 'react'

const Boy = () => {
    const data = [
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Vivo", price:11499},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Samsung", price:42299},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Oppo", price:21499},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Mi", price:22499},
        {img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/i/-original-imah4kfuzzxz6tvn.jpeg?q=70", title:"Vivo-S20", price:11499},
       
    ]
  return (
    <div>
      <div className='mx-20 my-10'>
      <h1 className=' font-bold text-4xl py-4'>Boys Section</h1>
      <div className='flex  gap-10'>
        {data.map((item, index) => (
            <div key={index} className='p-4 border border-gray-200 w-50'>
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

export default Boy
