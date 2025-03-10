import React from 'react';

const Best = () => {
    const bestSellers = [
        { img: "/new/tshirt.jpeg", title: "Hair Growth Oil", price: 1200 },
        { img: "/new/tshirt.jpeg", title: "Hydrating Shampoo", price: 900 },
        { img: "/new/tshirt.jpeg", title: "Repair Conditioner", price: 1100 },
        { img: "/new/tshirt.jpeg", title: "Scalp Serum", price: 1500 },
    ];

    return (
        <div className='bg-gray-100 flex justify-center items-center'>
            <div className="lg:mx-20 mx-10 w-full my-10  ">
                <header className=" mb-7 nav">
                    <h1 className="lg:text-4xl text-3xl  font-bold text-gray-800">Best Seller Products</h1>
                    <p className="text-lg text-gray-600 mt-2">Explore our products</p>
                </header>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {bestSellers.map((item, index) => (
                        <div key={index} className='cursor-pointer rounded-lg overflow-hidden shadow-md transform transition duration-700 hover:scale-105'>
                            <img src={item.img} alt={item.title} className='w-full h-64 object-cover' />
                            <div className=' py-3 text-center'>
                                <h2 className='text-xl font-bold mb-1 text-gray-800'>{item.title}</h2>
                                <p className='text-lg text-red-600 font-semibold mb-1'>₹{item.price}</p>
                                <button className='bg-red-800 text-white py-2 px-6 rounded-lg hover:bg-red-900 transition'>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Best;
