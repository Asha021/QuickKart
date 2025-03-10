import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full border-b border-gray-200 nav bg-white z-50">
      <marquee className="py-1 bg-[#903233] text-white grid grid-cols-2"> Flat upto 50% Off on All Products! Shop Now!</marquee>

      <header className="flex justify-between items-center p-3 px-5">
        <h1 className="text-2xl md:text-3xl font-bold text-[#903233] cursor-pointer" onClick={() => navigate("/")}>
          QuickKart
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-7  md:space-x-4 items-center">
          <Link to="/new/trends" className="text-gray-700 hover:text-[#903233]">New Arrivals</Link>
          <Link to="/Women/new/trendy/fashion" className="text-gray-700 hover:text-[#903233]">Women</Link>
          <Link to="/mens/section" className="text-gray-700 hover:text-[#903233]">Men</Link>
          <Link to="/kids/wear/collection" className="text-gray-700 hover:text-[#903233]">Kids</Link>
          <Link to="/personal/care/products" className="text-gray-700 hover:text-[#903233]">Personal Care</Link>
          {/* <Link to="/sale/new/collection" className="text-gray-700 hover:text-[#903233]">Sale</Link> */}
          <div className='reletive'>
          <CiSearch size={26} className=' absolute p-1 top-12 text-gray-500' />
          <input  type="text" className='bg-gray-200 p-1 indent-4 px-3' placeholder='search for Products..'/>
          </div>
          <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><IoCartOutline /></Link>
          <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><FaRegHeart /></Link>
          <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><CiUser /></Link>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-20 left-0 w-full bg-[#903233] text-white transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="flex flex-col items-center space-y-4 py-5">
          <Link to="/new/trends" className="hover:text-gray-300" onClick={() => setOpen(false)}>New Arrivals</Link>
          <Link to="/Women/new/trendy/fashion" className="hover:text-gray-300" onClick={() => setOpen(false)}>Women</Link>
          <Link to="/mens/section" className="hover:text-gray-300" onClick={() => setOpen(false)}>Men</Link>
          <Link to="/kids/wear/collection" className="hover:text-gray-300" onClick={() => setOpen(false)}>Kids</Link>
          <Link to="/personal/care/products" className="hover:text-gray-300" onClick={() => setOpen(false)}>Personal Care</Link>
          {/* <Link to="/sale/new/collection" className="hover:text-gray-300" onClick={() => setOpen(false)}>Sale</Link> */}
          <div className="flex space-x-5 text-2xl">
            <Link to="#" className="hover:text-gray-300"><IoCartOutline /></Link>
            <Link to="#" className="hover:text-gray-300"><FaRegHeart /></Link>
            <Link to="#" className="hover:text-gray-300"><CiUser /></Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
