import React from 'react'
import PriceNav from '../IndianWear/PriceNav';
const Dress = () => {
    const data = [
        { img: "/girlBott/dress2.jpg", title: "Short Dress", price: 299 },
        { img: "/500pxPics/girl.jpg", title: "BodyCon Dress", price: 999 },
        { img: "/girlBott/dress8.jpeg", title: "Floral Dress", price: 599 },
        { img: "/girlBott/dress2.jpg", title: "Short Dress", price: 299 },
        { img: "/girlBott/dress3.jpg", title: "Skirts", price: 1599 },
        { img: "/girlBott/dress4.jpg", title: "Shirts", price: 699 },
        { img: "/girlBott/dress5.jpg", title: "Wool", price: 1999 },
        { img: "/girlBott/dress6.jpg", title: "Trending Cloths", price: 899 },
        { img: "/500pxPics/girl.jpg", title: "BodyCon Dress", price: 999 },
        { img: "/girlBott/dress8.jpeg", title: "Floral Dress", price: 599 },
      ];
  return (
    <div>
          <div className="relative">
  <div className="relative w-full h-[300px] ">
    <img
      src="/270px/img2.jpeg"
      alt="img"
      className="absolute sm:block hidden top-0 left-0 w-full h-full object-cover"
    />
    <img
      src="/500pxPics/men6.jpg"
      alt="img"
      className="absolute sm:hidden top-0 left-0 w-full h-full object-cover"
    />
    <div className="text-white top-30 max-w-lg absolute mx-10 z-10 p-5 rounded-lg">
      <h2 className="text-lg md:text-3xl font-bold">
        Wardrobe Essentials: Western Clothing Must-Haves <br /> Explore Now
      </h2>
    </div>
  </div>
</div>
<div className="flex">
      <PriceNav />
      {/* <Link></Link> */}
      <div className="mx-5  my-8 mt-2">
        <div className="flex justify-between pb-1">
          <h1 className=" font-bold text-3xl py-1 pb-4 ">Western Wear</h1>

          <button className="hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8  transition duration-300">
            See more
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {data.map((item, index) => (
            <div
              onClick={() => useNavigate("")}
              key={index}
              className="border cursor-pointer  border-gray-200 p-4"
            >
              <img
                data-aos="zoom-out"
                src={item.img}
                alt="img"
                className="scaleImg "
              />
              <div className="text-center ">
                {/* <div className='fle border'> */}
                <div className="flex text-center items-center justify-center gap-1 py-2">
                  <h3 className="rounded-full border bg-red-600 items-center text-center w-3 h-3">
                    {item.color}
                  </h3>
                  <h3 className="rounded-full border bg-green-600 items-center text-center w-3 h-3">
                    {item.color}
                  </h3>
                  <h3 className="rounded-full border bg-yellow-600 items-center text-center w-3 h-3">
                    {item.color}
                  </h3>
                </div>
                <h3>{item.title}</h3>
                <strong className="text-red-700 py-1">₹{item.price}</strong>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dress
