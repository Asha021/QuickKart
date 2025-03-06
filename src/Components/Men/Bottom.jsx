import React from 'react'

const Bottom = () => {
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
      <div className='flex justify-between items-center p-4'>
  <h1 className='font-bold text-4xl'>Indian & Festive Wear</h1>
  <button className='hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8 py-2 transition duration-300'>
    See more
  </button>
</div>
      {/* <h1 className=' font-bold text-4xl py-4'></h1> */}
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

export default Bottom
