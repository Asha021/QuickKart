// import React, { useState } from "react";

// const ordersData = [
//   { id: "#12345", product: "Smartphone", price: "₹15,999", status: "Shipped", date: "21 Mar 2025" },
//   { id: "#12346", product: "Wireless Earbuds", price: "₹2,499", status: "Delivered", date: "19 Mar 2025" },
//   { id: "#12347", product: "Laptop", price: "₹55,999", status: "Pending", date: "18 Mar 2025" },
// ];

// const Orders = () => {
//   const [orders, setOrders] = useState(ordersData);

//   return (
//     <div className="py-20 pt-30 flex justify-center">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-xl font-bold border-b pb-3">My Orders</h2>
//         <div className="gap-2 flex">
//             <span>All</span>
//             <span>Ordered</span>
//             <span>Shipped</span>
//             <span>Delivered</span>
//             <span>Cancelled</span>
//             <span>Exchnage</span>
//             <span>Return</span>
//             <span>Others</span>
//         </div>
//         {orders.length === 0 ? (
//           <p className="text-center text-gray-500 mt-5">No orders placed yet.</p>
//         ) : (
//           <div className="mt-4 space-y-4">
//             {orders.map((order) => (
//               <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
//                 <div>
//                   <p className="font-semibold">{order.product}</p>
//                   <p className="text-gray-600 text-sm">Order ID: {order.id}</p>
//                   <p className="text-gray-400 text-xs">Placed on: {order.date}</p>
//                 </div>
//                 <div>
//                   <p className="font-bold">{order.price}</p>
//                   <span
//                     className={`px-2 py-1 text-xs font-medium rounded ${
//                       order.status === "Shipped" ? "bg-blue-100 text-blue-600" :
//                       order.status === "Delivered" ? "bg-green-100 text-green-600" :
//                       "bg-yellow-100 text-yellow-600"
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Orders;
import React, { useState } from "react";

const ordersData = [
  { id: "#12345", product: "Smartphone", price: "₹15,999", status: "Shipped", date: "21 Mar 2025" },
  { id: "#12346", product: "Wireless Earbuds", price: "₹2,499", status: "Delivered", date: "19 Mar 2025" },
  { id: "#12347", product: "Laptop", price: "₹55,999", status: "Pending", date: "18 Mar 2025" },
];

const statusColors = {
  Shipped: "bg-blue-100 text-blue-600",
  Delivered: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Cancelled: "bg-red-100 text-red-600",
  Exchange: "bg-purple-100 text-purple-600",
  Return: "bg-gray-100 text-gray-600",
};

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All" ? orders : orders.filter((order) => order.status === filter);

  return (
    <div className="py-20 pt-30 flex justify-center bg-gray-100 min-h-screen dark:bg-gray-900">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-bold border-b pb-3">My Orders</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["All", "Shipped", "Delivered", "Pending", "Cancelled", "Exchange", "Return"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 text-sm rounded-full border ${
                  filter === status
                    ? "bg-red-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                } transition-all`}
              >
                {status}
              </button>
            )
          )}
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <p className="text-center text-gray-500 mt-5">No orders found.</p>
        ) : (
          <div className="mt-6 space-y-4">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all dark:border-gray-700"
              >
                <div>
                  <p className="font-semibold text-lg">{order.product}</p>
                  <p className="text-gray-600 text-sm dark:text-gray-300">Order ID: {order.id}</p>
                  <p className="text-gray-400 text-xs">Placed on: {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{order.price}</p>
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
