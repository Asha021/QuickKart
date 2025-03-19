import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ReletedPro = ({item}) => {
    const navigate = useNavigate()
    // const location = useLocation();
    // const item = location.state || {};
  console.log(item);
  
    const data = [
      { img: "/500pxPics/girl.jpg", title: "BodyCon Dress",sub:"A stylish and comfortable bodycon dress perfect for any occasion.",colors: ["pink", "yellow", "black"], 
        sizes: ["XS","S","M", "L", "XL"]},
      { img: "/girlBott/dress8.jpeg", title: "Floral Dress", price: 599 ,navigate:"/shop/now" ,sub:"A stylish and comfortable Floral Dressperfect for any occasion.",colors: [,"Red", "yellow", "black"], 
        sizes: ["M", "L", "XL"] },
      { img: "/girlBott/dress2.jpg", title: "Short Dress", price: 299 ,navigate:"/shop/now" ,sub:"A stylish and comfortable Short Dressperfect for any occasion.",colors: ["Purple", "yellow", "black"], 
        sizes: ["S","M", "L", "XL"] },
      { img: "/girlBott/dress3.jpg", title: "Skirts", price: 1599,navigate:"/shop/now" ,sub:"A stylish and comfortable Skirts perfect for any occasion.",colors: ["Orange", "yellow", "black"], 
        sizes: ["M", "L", "XL"]  },
      { img: "/girlBott/dress4.jpg", title: "Shirts", price: 699,navigate:"/shop/now" ,sub:"A stylish and comfortable Shirts perfect for any occasion.",colors: ["pink", "yellow", "black","Red"], 
        sizes: ["S","M", "L", "XL"]  },
      { img: "/girlBott/dress5.jpg", title: "Wool", price: 1999 ,navigate:"/shop/now" ,sub:"A stylish and comfortable Wool perfect for any occasion.",colors: ["silver", "yellow", "black"], 
        sizes: ["S","M", "L", "XL"] },
      { img: "/girlBott/dress6.jpg", title: "Trending Cloths", price: 899,navigate:"/shop/now" ,sub:"A stylish and comfortable Trending Cloths perfect for any occasion.",colors: ["pink", "yellow", "black"], 
        sizes: ["XS","S","M", "L", "XL"]  },
      { img: "/500pxPics/girl.jpg", title: "BodyCon Dress", price: 999 ,navigate:"/shop/now" ,sub:"A stylish and comfortable bodycon dress perfect for any occasion.",colors: ["red", "yellow", "black"], 
        sizes: ["M", "L", "XL"] },
      { img: "/girlBott/dress8.jpeg", title: "Floral Dress", price: 599 ,navigate:"/shop/now" ,sub:"A stylish and comfortable Floral Dress perfect for any occasion.",colors: ["pink", "yellow", "black"], 
        sizes: ["XS","S","M", "L", "XL"] },
      { img: "/girlBott/dress2.jpg", title: "Short Dress", price: 299 ,navigate:"/shop/now" ,sub:"A stylish and comfortable Short Dress perfect for any occasion.",colors: ["pink", "yellow", "black"], 
        sizes: ["M", "L", "XL"] },
    ];
  return (
    <div>
       <div className="mx-5  my-8 mt-2">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {data.map((item, index) => (
            <div
            onClick={() => navigate(item.navigate, { state: item })}
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
              
                <h3>{item.title}</h3>
                <strong className="text-red-700 py-1">₹{item.price}</strong>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReletedPro
