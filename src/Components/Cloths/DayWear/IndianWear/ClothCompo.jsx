import React,{useState} from "react";
import PriceNav from "./PriceNav";
import { useNavigate } from "react-router-dom";

const ClothCompo = () => {
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate()
  const data = [
    {id:1,  img: "/cloth/indian/img1.jpeg", title: "BodyCon Dress",sub:"A stylish and comfortable bodycon dress perfect for any occasion.", price: 999,navigate:"/shop/now" ,colors: ["pink", "yellow", "black"], 
      sizes: ["XS","S","M", "L", "XL"]},
    {id:2,  img: "/cloth/indian/img2.jpeg", title: "Floral Dress", price: 599 ,navigate:"/shop/now" ,colors: [,"Red", "yellow", "black"], 
      sizes: ["M", "L", "XL"] },
    {id:3,  img: "/cloth/indian/mg3.jpeg", title: "Short Dress", price: 299 ,navigate:"/shop/now" ,colors: ["Purple", "yellow", "black"], 
      sizes: ["S","M", "L", "XL"] },
    {id:4,  img: "/cloth/indian/mg4.jpeg", title: "Skirts", price: 1599,navigate:"/shop/now" ,colors: ["Orange", "yellow", "black"], 
      sizes: ["M", "L", "XL"]  },
    {id:5,  img: "/cloth/indian/img1.jpeg", title: "Shirts", price: 699,navigate:"/shop/now" ,colors: ["pink", "yellow", "black","Red"], 
      sizes: ["S","M", "L", "XL"]  },
    {id:6,  img: "/cloth/indian/img5.jpeg", title: "Wool", price: 1999 ,navigate:"/shop/now" ,colors: ["silver", "yellow", "black"], 
      sizes: ["S","M", "L", "XL"] },
    {id:7,  img: "/cloth/indian/mg4.jpeg", title: "Trending Cloths", price: 899,navigate:"/shop/now" ,colors: ["pink", "yellow", "black"], 
      sizes: ["XS","S","M", "L", "XL"]  },
    {id:8,  img: "/cloth/indian/img1.jpeg", title: "BodyCon Dress", price: 999 ,navigate:"/shop/now" ,colors: ["red", "yellow", "black"], 
      sizes: ["M", "L", "XL"] },
    {id:9,  img: "/cloth/indian/img2.jpeg", title: "Floral Dress", price: 599 ,navigate:"/shop/now" ,colors: ["pink", "yellow", "black"], 
      sizes: ["XS","S","M", "L", "XL"] },
    {id:10,  img: "/cloth/indian/mg3.jpeg", title: "Short Dress", price: 299 ,navigate:"/shop/now" ,colors: ["pink", "yellow", "black"], 
      sizes: ["M", "L", "XL"] },
  ];
  
  return (
  <div>
      <div className="lg:flex">
    <PriceNav data={data} setFilteredData={setFilteredData}  />
      {/* <Link></Link> */}
      <div className="mx-5  my-8 mt-2">
        <div className="flex justify-between pb-1">
          <h1 className=" font-bold text-2xl lg:w-3xl py-1 pb-4 ">Indian Wear</h1>

          {/* <button className="hover:bg-red-900 hover:text-white text-lg rounded-xl border border-red-900 px-8  transition duration-300">
            See more
          </button> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
         
          {(filteredData.length > 0 ? filteredData : data).map((item, index) => (
            <div key={index} onClick={() => navigate(item.navigate, { state: item })} className="border text-center border-gray-200 cursor-pointer p-4">
              <img src={item.img} alt="img" className="scaleImg" />
              <h3 className="pt-1">{item.title}</h3>
              <strong className="text-red-700 py-1">₹{item.price}</strong>
            </div>
          ))}

        </div>
      </div>
    </div>
  </div>
  );
};

export default ClothCompo;
