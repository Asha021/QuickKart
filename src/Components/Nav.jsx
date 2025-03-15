// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaRegHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { CiSearch } from "react-icons/ci";
// import { CiUser } from "react-icons/ci";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


// const Nav = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed w-full border-b border-gray-200 nav bg-white z-50">
//       <marquee className="py-1 bg-[#903233] text-white grid grid-cols-2"> Flat upto 50% Off on All Products! Shop Now!</marquee>

//       <header className="flex justify-between items-center p-3 px-5">
//         <h1 className="text-2xl md:text-3xl font-bold text-[#903233] cursor-pointer" onClick={() => navigate("/")}>
//           QuickKart
//         </h1>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex space-x-7  md:space-x-4 items-center">
//           <Link to="/new/trends" className="text-gray-700 hover:text-[#903233]">New Arrivals</Link>
//           <Link to="/Women/new/trendy/fashion" className="text-gray-700 hover:text-[#903233]">Women</Link>
//           <Link to="/mens/section" className="text-gray-700 hover:text-[#903233]">Men</Link>
//           <Link to="/kids/wear/collection" className="text-gray-700 hover:text-[#903233]">Kids</Link>
//           <Link to="/personal/care/products" className="text-gray-700 hover:text-[#903233]">Personal Care</Link>
//           {/* <Link to="/sale/new/collection" className="text-gray-700 hover:text-[#903233]">Sale</Link> */}
//           <div className='reletive'>
//           <CiSearch size={26} className=' absolute p-1 top-12 text-gray-500' />
//           <input  type="text" className='bg-gray-200 p-1 indent-4 px-3' placeholder='search for Products..'/>
//           </div>
//           <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><IoCartOutline /></Link>
//           <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><FaRegHeart /></Link>
//           <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><CiUser /></Link>
//         </nav>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
//           {open ? <AiOutlineClose /> : <AiOutlineMenu />}
//         </div>
//       </header>

//       {/* Mobile Navigation */}
//       <div className={`lg:hidden fixed top-20 left-0 w-full bg-[#903233] text-white transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
//         <nav className="flex flex-col items-center space-y-4 py-5">
//           <Link to="/new/trends" className="hover:text-gray-300" onClick={() => setOpen(false)}>New Arrivals</Link>
//           <Link to="/Women/new/trendy/fashion" className="hover:text-gray-300" onClick={() => setOpen(false)}>Women</Link>
//           <Link to="/mens/section" className="hover:text-gray-300" onClick={() => setOpen(false)}>Men</Link>
//           <Link to="/kids/wear/collection" className="hover:text-gray-300" onClick={() => setOpen(false)}>Kids</Link>
//           <Link to="/personal/care/products" className="hover:text-gray-300" onClick={() => setOpen(false)}>Personal Care</Link>
//           {/* <Link to="/sale/new/collection" className="hover:text-gray-300" onClick={() => setOpen(false)}>Sale</Link> */}
//           <div className="flex space-x-5 text-2xl">
//             <Link to="#" className="hover:text-gray-300"><IoCartOutline /></Link>
//             <Link to="#" className="hover:text-gray-300"><FaRegHeart /></Link>
//             <Link to="#" className="hover:text-gray-300"><CiUser /></Link>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Nav;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaCaretRight,FaAngleDown } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Nav = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [bridalOpen, setBridalOpen] = useState(false);

  const opens=()=>{
    setOpen(!open);
  }
  const opensBridal=()=>{
    setBridalOpen(!open);
  }

  return (
    <div className="fixed w-full border-b border-gray-200 nav bg-white z-50">
      <marquee className="py-1 bg-[#903233] text-white grid grid-cols-2"> Flat upto 50% Off on All Products! Shop Now!</marquee>

      <header className="flex justify-between items-center p-3 ">
       <div className='gap-6  items-center flex'>
       <h1 className="text-2xl px-5 md:text-3xl font-bold text-[#903233] cursor-pointer" onClick={() => navigate("/")}>
          QuickKart
        </h1>
        {/* Desktop Navigation */}
        <div className='hidden lg:flex space-x-7  md:space-x-4 items-center'>
        <Link to="/Women/new/trendy/fashion" className="text-gray-700  hover:text-[#903233]">HOME</Link>
        <Link to="/new/trends" className="text-gray-700  hover:text-[#903233]">New Arrivals</Link>
        {/* <Link to="/Women/new/trendy/fashion" className="text-gray-700 hover:text-[#903233]"><FaCaretRight />Clothing</Link> */}
        <Link onMouseEnter={opens} to="/Women/new/trendy/fashion" className="text-gray-700 flex items-center hover:text-[#903233] gap-1">Clothing<i><FaAngleDown size={13} /></i></Link>
         <div className='  md:absolute md:top-23 md:ml-20  '>
         {open && (
         <div onMouseLeave={()=>setOpen(false)}  className='grid grid-cols-2 px-10 gap-30 p-5 bg-gray-100' >
          <div>
            <h2 className='nav font-bold pb-2'>DAYWEAR</h2>
           <ul className='cur text-gray-700 border-r pr-15 '> 
            <Link className='hover:underline' to="/traditional/wear/cloths">Indian Wear</Link><br />
            <Link className='hover:underline' to="#">Western Wear</Link><br />
            <Link className='hover:underline' to="#">Saree</Link><br />
            <Link className='hover:underline' to="#">Kurti</Link><br />
            <Link className='hover:underline' to="#">Dresses</Link>
           </ul>
          </div>
          <div className=''>
         
            <h2 className='nav font-bold pb-2 '>NIghtWear</h2>
            <ul className='cur text-gray-700 '> 
            <Link  className='hover:underline' to="#">Shorts</Link><br />
            <Link  className='hover:underline' to="#">Maxi</Link><br />
            <Link  className='hover:underline' to="#">T-shirt Pajama</Link><br />
            <Link  className='hover:underline' to="#">Night Dress</Link><br />
            </ul>
       
          </div>
         </div>
        )}
         </div>
        <Link onMouseEnter={opensBridal} to="/Women/new/trendy/fashion" className="text-gray-700 flex items-center hover:text-[#903233] gap-1">Bridal<i><FaAngleDown size={13} /></i></Link>
        <div className=' absolute top-23 '>
         {bridalOpen && (
         <div onMouseLeave={()=>setBridalOpen(false)}  className=' ml-40 p-5 bg-gray-100' >
          <div className=''>
            <h2 className='nav font-bold pb-2'>BRIDAL COLLECTION</h2>
         <div className='flex gap-10'>
         <ul className='cur text-gray-700 '> 
            <Link className='hover:underline' to="#">Wedding Dresses</Link><br />
            <Link className='hover:underline' to="#">Lehnga</Link><br />
            <Link className='hover:underline' to="#">PartyWear Dress</Link><br />
            <Link className='hover:underline' to="#">Ready to Wear Dresses</Link><br />   
           </ul>
           <ul className='cur text-gray-700 px-10 border-l'>
           <Link className='hover:underline' to="#">Wedding Guests Wear</Link><br />
            <Link className='hover:underline' to="#">Gowns</Link><br />
            <Link className='hover:underline' to="#">Sarees</Link><br />
           </ul>
         </div>
          </div>
          
         </div>
        )}
         </div>
        <button className="text-gray-700  hover:text-[#903233] nav">Login/Register</button>
        </div>
       </div>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex space-x-7  md:space-x-4 items-center">
      
          <div className='reletive'>
          <CiSearch size={26} className=' absolute p-1 top-12 text-gray-500' />
          <input  type="text" className='bg-gray-200 p-1 indent-4 px-3' placeholder='search for Products..'/>
          </div>
          <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><IoCartOutline /></Link>
          <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><FaRegHeart /></Link>
          {/* <Link to="#" className="text-2xl text-gray-700 hover:text-[#903233]"><CiUser /></Link> */}
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setMenu(!menu)}>
          {menu ?  <AiOutlineMenu />: <AiOutlineClose />}
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-22 sm:top-23 left-full sm:w-3xs w-40  bg-[#903233] text-white transition-transform duration-300 ${menu ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="flex flex-col ">
        <Link to="/Women/new/trendy/fashion" className="  hover:text-[#903233] border-b pl-2 border-gray-100 w-full  py-3">HOME</Link>
       
        <Link onMouseEnter={opens} to="/Women/new/trendy/fashion" className="  py-3 flex items-center pl-2 hover:text-[#903233] gap-1">Clothing<i><FaAngleDown size={13} /></i></Link>
        <div className='pl-2 text-white'>
         {open && (
         <div onMouseLeave={()=>setOpen(false)}  className='grid grid-cols-1 ' >
          <div className='' >
            <h2 className='nav font-bold text-white pb-2'>DAYWEAR</h2>
           <ul className='cur text-gray-700 '> 
            <Link className='hover:underline text-white' to="#">Indian Wear</Link><br />
            <Link className='hover:underline text-white' to="#">Western Wear</Link><br />
            <Link className='hover:underline text-white' to="#">Saree</Link><br />
            {/* <Link className='hover:underline' to="#">Kurti</Link><br />
            <Link className='hover:underline' to="#">Dresses</Link> */}
           </ul>
          </div>
          <div className=''>
         
            <h2 className='nav font-bold pb-2 pt-2 text-white'>NIghtWear</h2>
            <ul className='cur text-gray-700 '> 
            <Link  className='hover:underline text-white' to="#">Shorts</Link><br />
            <Link  className='hover:underline text-white' to="#">Maxi</Link><br />
            {/* <Link  className='hover:underline' to="#">T-shirt Pajama</Link><br />
            <Link  className='hover:underline' to="#">Night Dress</Link><br /> */}
            </ul>
       
          </div>
         </div>
        )}
         </div>
         <Link to="/new/trends" className="  hover:text-[#903233] pl-2 border-t border-b border-gray-100 w-full  py-3">New Arrivals</Link>
        <Link onMouseEnter={opensBridal} to="/Women/new/trendy/fashion" className="pl-2 flex  text-center py-3 items-center hover:text-[#903233] gap-1">Bridal<i><FaAngleDown size={13} /></i></Link>
        <div className='pl-2 '>
         {bridalOpen && (
         <div onMouseLeave={()=>setBridalOpen(false)}  className=' ' >
          <div className=''>
            <h2 className='nav font-bold pb-2 w-full '>BRIDAL COLLECTION</h2>
         <div className='flex gap-10'>
         <ul className='cur text-gray-700 '> 
            <Link className='hover:underline text-white' to="#">Wedding Dresses</Link><br />
            <Link className='hover:underline text-white' to="#">Lehnga</Link><br />
            <Link className='hover:underline text-white' to="#">PartyWear Dress</Link><br />
            <Link className='hover:underline text-white' to="#">Ready to Wear Dresses</Link><br />   
           </ul>
         
         </div>
          </div>
          
         </div>
        )}
         </div>
        <button className="  hover:text-[#903233] border-t border-gray-100 text-start pl-2 py-3">Login/Register</button>
          {/* <Link to="/new/trends" className="hover:text-gray-300" onClick={() => setOpen(false)}>New Arrivals</Link>
          <Link to="/Women/new/trendy/fashion" className="hover:text-gray-300" onClick={() => setOpen(false)}>Women</Link>
          <Link to="/mens/section" className="hover:text-gray-300" onClick={() => setOpen(false)}>Men</Link>
          <Link to="/kids/wear/collection" className="hover:text-gray-300" onClick={() => setOpen(false)}>Kids</Link>
          <Link to="/personal/care/products" className="hover:text-gray-300" onClick={() => setOpen(false)}>Personal Care</Link> */}
          {/* <Link to="/sale/new/collection" className="hover:text-gray-300" onClick={() => setOpen(false)}>Sale</Link> */}
          {/* <div className="flex space-x-5 text-2xl">
            <Link to="#" className="hover:text-gray-300"><IoCartOutline /></Link>
            <Link to="#" className="hover:text-gray-300"><FaRegHeart /></Link>
            <Link to="#" className="hover:text-gray-300"><CiUser /></Link>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

export default Nav;
