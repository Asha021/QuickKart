import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const initialWishlist = [
  { id: 1, name: "Accesories", price: "₹15,999", img: "/acc.jpeg" },
  { id: 2, name: "Saree", price: "₹2,499", img: "/cloth/indian/img10.jpeg" },
  {
    id: 3,
    name: "Lehnga Dress",
    price: "₹55,999",
    img: "/cloth/indian/img1.jpeg",
  },
];

const Wishlist = () => {
  const navigate = useNavigate()
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className=" bg-gray-100">
      <div className="py-20 pt-30 mx-2 md:mx-20 flex justify-center min-h-screen dark:bg-gray-900">
        <div className="w-full bg-white shadow-lg rounded-lg py-6 px-2 sm:px-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-2xl font-bold border-b pb-3">My Wishlist</h2>

          {wishlist.length === 0 ? (
            <p className="text-center text-gray-500 mt-5">
              Your wishlist is empty.
            </p>
          ) : (
            <div className="grid grid-cols-2 w-full lg:grid-cols-3 gap-2 sm:gap-6 mt-6">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-all dark:bg-gray-700"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-auto object-cover rounded-lg mb-4"
                  />
                  <div className="">
                    <p className="font-semibold text-lg">{item.name}</p>
                    <div className="flex gap-2">
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.price}
                      </p>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-500 hover:text-red-700 transition-all"
                      >
                        <FaHeart size={20} />
                      </button>
                    </div>
                    <div className="mt-4 sm:flex gap-3 items-center">
                      <button  onClick={()=>navigate("/cart/items",{state:item})} className="bg-red-800 w-full text-white sm:px-4 py-2 rounded-md flex items-center gap-2 justify-center hover:bg-red-900 transition-all">
                        <FaShoppingCart className="hidden sm:block" /> Add to
                        Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
// import React, { useState } from "react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";

// const initialWishlist = [
//   { id: 1, name: "Accessories", price: "₹15,999", img: "/acc.jpeg" },
//   { id: 2, name: "Saree", price: "₹2,499", img: "/cloth/indian/img10.jpeg" },
//   { id: 3, name: "Lehnga Dress", price: "₹55,999", img: "/cloth/indian/img1.jpeg" },
// ];

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState(initialWishlist);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//    <div className="bg-gray-100 pt-30">
//      <div className=" mx-20 min-h-screen flex justify-center dark:bg-gray-900">
//       <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg py-6 px-4 sm:px-6 dark:bg-gray-800 dark:text-white">
//         <h2 className="text-2xl font-bold border-b pb-3">My Wishlist</h2>

//         {wishlist.length === 0 ? (
//           <p className="text-center text-gray-500 mt-5">Your wishlist is empty.</p>
//         ) : (
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//             {wishlist.map((item) => (
//               <div
//                 key={item.id}
//                 className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-all dark:bg-gray-700"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-40 object-cover rounded-lg mb-4"
//                 />
//                 <div>
//                   <p className="font-semibold text-lg">{item.name}</p>
//                   <div className="flex items-center justify-between mt-2">
//                     <p className="text-gray-600 dark:text-gray-300">{item.price}</p>
//                     <button
//                       onClick={() => removeFromWishlist(item.id)}
//                       className="text-red-500 hover:text-red-700 transition-all"
//                     >
//                       <FaHeart size={20} />
//                     </button>
//                   </div>
//                   <button className="mt-4 w-full bg-red-800 text-white px-4 py-2 rounded-md flex items-center gap-2 justify-center hover:bg-red-900 transition-all">
//                     <FaShoppingCart className="hidden sm:block" /> Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//    </div>
//   );
// };

// export default Wishlist;
