// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { ImCross } from "react-icons/im";

// const Cart = () => {
//   const location = useLocation();
//   const newItem = location.   state || null;

//   const [cartItems, setCartItems] = useState([]);
//   // Load cart from localStorage only once
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(savedCart);
//   }, []);

//   // Add new item to cart when newItem changes
//   useEffect(() => {
//     if (newItem) {
//       setCartItems((prevCart) => {
//         const updatedCart = [...prevCart, newItem];
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         return updatedCart;
//       });
//     }
//   }, [newItem]);

//   // Remove item from cart
//   const removeItem = (index) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="min-h-screen pt-30 flex justify-center items-center bg-gray-100 p-6">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
//         <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>

//         {cartItems.length > 0 ? (
//           <div className="space-y-4">
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between border-b pb-4"
//               >
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-20 h-20 object-cover rounded-lg border"
//                   />
//                   <div>
//                     <h2 className="text-lg font-semibold">{item.title}</h2>
//                     <p className="text-gray-600">
//                       {item.sub || "No description available"}
//                     </p>
//                     <strong className="text-[#903233]">₹{item.price}</strong>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeItem(index)}
//                   className=" text-gray-500 px-4 py-2 rounded-lg hover:text-[#903233] transition"
//                 >
//                  <ImCross />
//                 </button>
//               </div>
//             ))}
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-4">
//               Proceed to Checkout
//             </button>
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">Your cart is empty</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { removeFromCart } from "../../../../features/cart/cartSlice";
import { useDispatch , useSelector } from "react-redux";

  const Cart = () => {
  const location = useLocation();
  const newItem = location.state || null;

  const [cartItems, setCartItems] = useState([]);
  // Load cart from localStorage only once
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Add new item to cart when newItem changes
  useEffect(() => {
    if (newItem) {
      setCartItems((prevCart) => {
        const updatedCart = [...prevCart, newItem];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  }, [newItem]);

  const dispatch = useDispatch();
  

  const { items, totalamount , totalcount } = useSelector((state)=> state.cart);

 const handleRemove = (id) =>{
  console.log("clicked")
  
    dispatch(removeFromCart(id));
    
    console.log("not removed")
  
 }

  return (
    <div className="min-h-screen pt-30 flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>
        <p className="text-3xl font-bold mb-4 text-center">{`Totalcount: ${totalcount} `}{` TotalAmount: ${totalamount}`}</p>
         
        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">
                      {item.sub || "No description available"}
                    </p>
                    <strong className="text-[#903233]">₹{item.price}</strong>
                  </div>
                </div>
               <button
                  onClick={() => handleRemove(item.id || item.title)} 
                  className="text-gray-500 px-4 py-2 rounded-lg hover:text-[#903233] transition"
                >
                  <ImCross />
                </button>
              </div>
            ))}
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-4">
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty</p>
        )}
    
      </div>
    </div>
  );
};

export default Cart;

// import React from "react";
// import { ImCross } from "react-icons/im";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart } from "../../../../features/cart/cartSlice";

// const Cart = () => {
//   const dispatch = useDispatch();

//   // Redux Store se data nikaalna
//   const { items, totalamount, totalcount } = useSelector((state) => state.cart);

//   const handleRemove = (id) => {
//     console.log("Removing item:", id);
//     dispatch(removeFromCart(id));
//   };

//   return (
//     <div className="min-h-screen pt-30 flex justify-center items-center bg-gray-100 p-6">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
//         <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>
//         <p className="text-xl font-bold mb-4 text-center">
//           {`Items: ${totalcount} | Total: ₹${totalamount}`}
//         </p>

//         {/* Ab hum Redux wale "items" ko map karenge */}
//         {items.length > 0 ? (
//           <div className="space-y-4">
//             {items.map((item, index) => (
//               <div key={item.id || index} className="flex items-center justify-between border-b pb-4">
//                 <div className="flex items-center space-x-4">
//                   <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
//                   <div>
//                     <h2 className="text-lg font-semibold">{item.title}</h2>
//                     <p className="text-gray-600">{item.sub || "No description"}</p>
//                     <strong className="text-[#903233]">₹{item.price}</strong>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(item.id || item.title)}
//                   className="text-gray-500 px-4 py-2 hover:text-red-600 transition"
//                 >
//                   <ImCross />
//                 </button>
//               </div>
//             ))}
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">
//               Proceed to Checkout
//             </button>
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">Your cart is empty</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;