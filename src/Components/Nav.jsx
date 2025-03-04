import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa"; //whishlist icon
import { IoCartOutline } from "react-icons/io5"; //cart icon
import { CiUser } from "react-icons/ci"; // user icon

const Nav = () => {
  const navigat = useNavigate()
  return (
    // nav-bar
    <div className ="fixed w-full grid border-b border-gray-200">
        <marquee className ="py-1  bg-[#903233] text-white ">🔥 Flat 50% Off on All Products! Shop Now! 🛒</marquee>
        <header className ="flex  w-full justify-between items-center bg-white p-1 px-5">
            <h1 className ="text-3xl font-bold text-[#903233] cursor-pointer" onClick={()=>navigat("/") }>QuickKart</h1>
            <nav className ="flex space-x-7 items-center">
                {/* links */}
                <Link to="/new/trends" className ="text-gray-700 hover:text-[#903233]">New Arrivals</Link>
                <Link to="/Women/new/trendy/fashion" className ="text-gray-700 hover:text-[#903233]">Women</Link>
                <Link to="#" className ="text-gray-700 hover:text-[#903233]">Men</Link>
                <Link to="#" className ="text-gray-700 hover:text-[#903233]">Kids</Link>
                <Link to="#" className ="text-gray-700 hover:text-[#903233]">Personal Care</Link>
                <Link to="#" className ="text-gray-700 hover:text-[#903233]">Sale</Link>
                <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><IoCartOutline /></Link>
                <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><FaRegHeart /></Link>
                <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><CiUser /></Link>

            </nav>
        </header>
    </div>

  )
}

export default Nav
