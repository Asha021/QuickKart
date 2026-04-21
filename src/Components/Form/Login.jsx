import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsBorderStyle } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { GrPowerShutdown } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa6";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storage = localStorage.getItem("userName");
    setUserName(storage);
  });

  return (
    <div className="relative">
      <button
        onClick={() => navigate("/signin")}
        onMouseEnter={() => setShowPopup(true)}
        // onMouseLeave={() => setShowPopup(false)}
        className="flex items-center w-full gap-2  cursor-pointer lg:border border-t lg:border-gray-200 hover:border-[#903233] px-4 py-2 lg:rounded-md"
      >
        <FaUserCircle size={24} color="#903233" className="bg-white" />
        <span>{userName ? userName : "Login"}</span>
      </button>

      {showPopup && (
        <div
          className="absolute top-15 right-0 bg-white shadow-md rounded-md p-4 w-auto lg:w-52"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <div className=" absolute top-0 bg-white left-40 rotate-45  size-4 -translate-x-full  -translate-y-1/2  "></div>
          <p className="text-sm text-gray-700">
            New customer?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              {" "}
              <FaUserCircle size={18} color="#903233" className="bg-white" />
              <Link to="/profile/page" className="hover:text-blue-500">
                My Profile
              </Link>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <FaAddressCard size={18} color="#903233" className="bg-white" />
              <Link to="/user/address" className="hover:text-blue-500">
                Address
              </Link>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <IoNotifications size={18} color="#903233" className="bg-white" />
              <Link to="/notifications" className="hover:text-blue-500">
                Notification
              </Link>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <BsBorderStyle size={18} color="#903233" className="bg-white" />
              <Link to="/orders" className="hover:text-blue-500">
                Orders
              </Link>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <IoMdHeart size={18} color="#903233" className="bg-white" />
              <Link to="/wishlist/items" className="hover:text-blue-500">
                Wishlist
              </Link>
            </li>

            {userName && (
              <li className="flex items-center gap-2">
                {" "}
                <GrPowerShutdown
                  size={18}
                  color="#903233"
                  className="bg-white"
                />
                <a
                  href="#"
                  onClick={() => {
                    localStorage.removeItem("userName"); // ✅ Logout clears username
                    setUserName("")
                  }}
                  className="hover:text-red-500"
                >
                  LogOut
                </a>
              </li>
            )}

          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;
