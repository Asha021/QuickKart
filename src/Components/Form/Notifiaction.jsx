import React, { useState } from "react";
import { FaBell, FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const notificationData = [
  { id: 1, title: "Order Shipped", message: "Your order has been shipped!", time: "2m ago", read: false },
  { id: 2, title: "New Offer!", message: "Get 20% off on your next purchase.", time: "1h ago", read: false },
  { id: 3, title: "Payment Received", message: "₹1500 has been credited.", time: "3h ago", read: true },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationData);
  const [show,setShow]=useState(false);
  const [selectedNotification, setSelectedNotification] = useState("Click on a notification to view details here.");

  const handleNotificationClick = (notif) => {
    setSelectedNotification(notif.message);
    setNotifications((prev) =>
      prev.map((n) => (n.id === notif.id ? { ...n, read: true } : n))
    );
  };

  return (
  <div className="bg-gray-50  pt-25">
      <div className="min-h-screen md:mx-20 mx-5 flex p-5">
      {/* Sidebar Notifications */}
      <div onClick={()=>setShow(!show)} className={`w-80 sm:block  bg-white shadow-lg p-6 rounded-lg sticky top-5 h-fit sm:bloc ${show?"hidden":"block"} `} >
        <div className="flex  justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold">Notifications</h2>
        </div>

        {notifications.length === 0 ? (
          <p className="text-center text-gray-500 mt-5">No new notifications</p>
        ) : (
          <div className="mt-4 space-y-3">
            {notifications.map((notif,index) => (
              <div
                key={index.id}
                className={`flex items-center p-3 rounded-lg shadow-sm cursor-pointer transition-all ${
                  notif.read ? "bg-gray-100" : "bg-blue-50"
                }`}
                onClick={() => handleNotificationClick(notif)}
              >
                <FaBell className="text-blue-500 mr-3" />
                <div className="flex-1">
                  <p className="font-semibold">{notif.title}</p>
                  <p className="text-sm text-gray-600">{notif.message}</p>
                  <p className="text-xs text-gray-400">{notif.time}</p>
                </div>
                {!notif.read && <FaCheckCircle className="text-green-500" />}

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Side Content */}
      <div className={`flex-1  sm:mx-5 ${show ? "block" : "hidden"} sm:block h-auto p-6 bg-white shadow-lg rounded-lg`} >
      <div className="flex justify-between">
      <h2 className="text-2xl font-bold mb-4">Welcome to QuickKart</h2>
      <button 
       onClick={() => setShow(!show)} 
       className={`text-2xl sm:hidden font-bold mb-4 `}
>
<ImCross />
</button>

      </div>
        <p className="text-gray-600">{selectedNotification}</p>
      </div>
    </div>
  </div>
  );
};

export default Notification;
