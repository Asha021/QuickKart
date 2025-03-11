import React from 'react';

const Hair = () => {
    const data = [
        { img: "https://images-na.ssl-images-amazon.com/images/I/41GGpuOBdLL.jpg", title: "Oiling", step: "1"},
        { img: "https://www.newbeauty.com/wp-content/uploads/2022/03/hair-hero.png", title: "Cleansing", step: "2"},
        { img: "http://www.vaibhavstores.in/storage/blog/19/featured-image.jpeg", title: "Conditioning", step: "3"},
    ];

    return (
        <div className=' bg-red-50 border-b border-gray-200 py-10 flex justify-center items-center'>
            <div className="lg:mr-20 w-full mx-10 max-w-7xl  ">
              
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                <header className="text-center md:mt-20">
                    <h1 className="lg:text-4xl text-3xl font-bold text-gray-800 pb-5 nav">Hair Care Products</h1>
                   
                </header>
                    {data.map((item, index) => (
                        <div key={index}  data-aos="flip-up" className='cursor-pointer overflow-hidden hover:shadow-gray-400 shadow-md '>
                            <img src={item.img} alt={item.title} className='w-full h-64 object-cover' />
                            <div className='p-1 bg-gray-100 text-center'>
                                <h2 className='text-2xl font-bold mb-2 text-gray-800'>Step {item.step}</h2>
                                <p className='text-xl text-gray-700 mb-4'>{item.title}</p>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hair;
