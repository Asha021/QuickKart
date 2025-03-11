import React from 'react'

const Face = () => {
    const data = [
        { img: "https://i5.walmartimages.com/seo/Bath-Body-Works-Ultra-Shea-Body-Cream-Sun-Ripened-Raspberry-8-Ounce_f0ad0922-e935-4ee0-89ce-3eaf94e5d42d.b41c9e6b68932a1c10d73d050184ff00.png", title: "Cleansing", step: "1"},
        { img: "https://img.freepik.com/premium-photo/collection-bath-body-products-including-bottle-brand-lily_902639-37018.jpg", title: "Moisturising", step: "2"},
        { img: "https://s3.amazonaws.com/images.ecwid.com/images/58565678/2300617938.jpg", title: "Fragrence", step: "3"},
    ];
  return (
    <div className='py-10 bg-red-50 border-b border-gray-200  '>
        <div className='  flex justify-center items-center'>
            <div className="lg:mr-20 w-full mx-10 max-w-7xl  ">
              
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                <header className="text-center md:mt-20">
                    <h1 className="lg:text-4xl text-3xl font-bold text-gray-800 nav pb-5">Bath & Body Washes</h1>
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
      
    </div>
  )
}

export default Face
