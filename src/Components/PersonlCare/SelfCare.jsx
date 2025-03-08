import React from 'react';

const SelftCare = () => {
    const data = [
        { img: "/new/tshirt.jpeg", title: "Cleansing", step: "1" },
        { img: "/new/tshirt.jpeg", title: "Toning", step: "2" },
        { img: "/new/tshirt.jpeg", title: "Moisturizing", step: "3" },
        { img: "/new/tshirt.jpeg", title: "Sun Protection", step: "4" },
    ];

    return (
        <div className='bg-gray-100 py-14 flex justify-center items-center'>
            <div className="lg:mx-20 w-full mx-10">
                <header className="lg:mb-8 mb-4">
                    <h1 className="lg:text-4xl text-3xl  font-bold mb-2">Skincare Routine</h1>
                    <p className="text-lg text-gray-600">Your daily guide to glowing skin</p>
                </header>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {data.map((item, index) => (
                        <div key={index} className='shadow-md cursor-pointer hover:shadow-gray-500 rounded-lg overflow-hidden '>
                            <img src={item.img} alt="Skincare step" className='w-full h-60 object-cover' />
                            <div className='p-2 text-center bg-gray-50'>
                                <h2 className='text-2xl font-bold mb-2'>Step {item.step}</h2>
                                <p className='text-lg text-gray-700'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelftCare;
