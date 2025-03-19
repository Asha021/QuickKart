import React,{useState} from "react";
// import PriceNav from "./PriceNav";
import { useNavigate } from "react-router-dom";
import PriceNav from "../IndianWear/PriceNav";

const Saree = () => {
    const [filteredData, setFilteredData] = useState([]);
     const navigate = useNavigate()

    const data = [
      { img: "/cloth/indian/img5.jpeg", title: "BodyCon Dress",sub:"A stylish and comfortable bodycon dress perfect for any occasion.", price: 999,navigate:"/shop/now" ,colors: ["pink", "yellow", "black"], 
        sizes: ["XS","S","M", "L", "XL"]},
      { img: "/cloth/indian/img7.jpeg", title: "Floral Dress", price: 599 ,navigate:"/shop/now" ,colors: [,"Red", "yellow", "black"], 
        sizes: ["M", "L", "XL"] },
      { img: "/cloth/indian/g6.jpeg", title: "Short Dress", price: 299 ,navigate:"/shop/now" ,colors: ["Purple", "yellow", "black"], 
        sizes: ["S","M", "L", "XL"] },
      { img: "/cloth/indian/img10.jpeg", title: "Skirts", price: 1599,navigate:"/shop/now" ,colors: ["Orange", "yellow", "black"], 
        sizes: ["M", "L", "XL"]  },
      { img: "/cloth/indian/g6.jpeg", title: "Shirts", price: 699,navigate:"/shop/now" ,colors: ["pink", "yellow", "black","Red"], 
        sizes: ["S","M", "L", "XL"]  },
      { img: "/cloth/indian/img5.jpeg", title: "Wool", price: 1999 ,navigate:"/shop/now" ,colors: ["silver", "yellow", "black"], 
        sizes: ["S","M", "L", "XL"] },
      { img: "/cloth/indian/img10.jpeg", title: "Trending Cloths", price: 899,navigate:"/shop/now" ,colors: ["pink", "yellow", "black"], 
        sizes: ["XS","S","M", "L", "XL"]  },
      { img: "/cloth/indian/g6.jpeg", title: "BodyCon Dress", price: 999 ,navigate:"/shop/now" ,colors: ["red", "yellow", "black"], 
        sizes: ["M", "L", "XL"] },
      { img: "/cloth/indian/img7.jpeg", title: "Floral Dress", price: 599 ,navigate:"/shop/now" ,colors: ["pink", "yellow", "black"], 
        sizes: ["XS","S","M", "L", "XL"] },
      { img: "/cloth/indian/img5.jpeg", title: "Short Dress", price: 299 ,navigate:"/shop/now" ,colors: ["pink", "yellow", "black"], 
        sizes: ["M", "L", "XL"] },
    ];
  return (
    <div>
          <div className="relative">
  <div className="relative w-full h-[300px] ">
    <img
      src="/cloth/head/img1.jpeg"
      alt="img"
      className="absolute sm:block hidden top-0 left-0 w-full h-full object-cover"
    />
    <img
      src="/cloth/indian/g6.jpeg"
      alt="img"
      className="absolute sm:hidden top-0 left-0 w-full h-full object-cover"
    />
    <div className="text-white top-30 max-w-lg absolute mx-10 z-10 p-5 rounded-lg">
      <h2 className="text-lg md:text-3xl font-bold">
      Saree Styles for Every Occasion: From Casual to Grand Celebrations
      </h2>
    </div>
  </div>
</div>
<div>
<div className="lg:flex">
      <PriceNav  data={data} setFilteredData={setFilteredData}/>
      {/* <Link></Link> */}
      <div className="mx-5  my-8 mt-2">
        <div className="flex justify-between pb-1">
          <h1 className=" font-bold text-2xl lg:text-3xl py-1 pb-4 ">Saree Collection</h1>

        
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
        {(filteredData.length > 0 ? filteredData : data).map((item, index) => (
            <div key={index} onClick={() => navigate(item.navigate, { state: item })} className="border text-center border-gray-200 cursor-pointer p-4">
              <img src={item.img} alt="img" className="scaleImg " />
              <h3 className="pt-1">{item.title}</h3>
              <strong className="text-red-700 py-1">₹{item.price}</strong>
            </div>
          ))}
       </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default Saree
