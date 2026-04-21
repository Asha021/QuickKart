import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaCaretRight, FaAngleDown } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Login from "./Form/Login";
import { useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [bridalOpen, setBridalOpen] = useState(false);

  const { totalamount, totalcount } = useSelector((state) => state.cart);

  const opens = () => {
    setOpen(!open);
  };
  
  const opensBridal = () => {
    setBridalOpen(!open);
  };

  return (
    <div className="fixed w-full border-b border-gray-200 nav bg-white z-50">
      <marquee className="py-1 bg-[#903233] text-white grid grid-cols-2">
        {" "}
        Flat upto 50% Off on All Products! Shop Now!
      </marquee>

      <header className="flex justify-between items-center px-3 py-2 ">
        <div className="gap-6  items-center flex">
          <h1 className="text-2xl px-5 md:text-3xl font-bold text-[#903233] ">
            QuickKart
          </h1>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-7  md:space-x-4 items-center">
            <Link
              to="/"
              className="text-gray-700  hover:text-[#903233]"
            >
              HOME
            </Link>
            <Link
              to="/new/trends"
              className="text-gray-700  hover:text-[#903233]"
            >
              New Arrivals
            </Link>
            {/* <Link to="/Women/new/trendy/fashion" className="text-gray-700 hover:text-[#903233]"><FaCaretRight />Clothing</Link> */}
            <Link
              onMouseEnter={opens}
              to="/Women/new/trendy/fashion"
              className="text-gray-700 flex items-center hover:text-[#903233] gap-1"
            >
              Clothing
              <i>
                <FaAngleDown size={13} />
              </i>
            </Link>
            <div className="  md:absolute md:top-23 md:ml-20  ">
              {open && (
                <div
                  onMouseLeave={() => setOpen(false)}
                  className="grid grid-cols-2 px-10 gap-30 p-5 bg-gray-100"
                >
                  <div>
                    <h2 className="nav font-bold pb-2">DAYWEAR</h2>
                    <ul className="cur text-gray-700 border-r pr-15 ">
                      <Link
                        className="hover:underline"
                        to="/traditional/wear/cloths"
                      >
                        Indian Wear
                      </Link>
                      <br />
                      <Link
                        className="hover:underline"
                        to="/western/wear/cloths"
                      >
                        Western Wear
                      </Link>
                      <br />
                      <Link className="hover:underline" to="/shop/saree">
                        Saree
                      </Link>
                      <br />
                      <Link
                        className="hover:underline"
                        to="/trendy/kurti/kurta-sets"
                      >
                        Kurti
                      </Link>
                      <br />
                      <Link className="hover:underline" to="/trendy/dresses">
                        Dresses
                      </Link>
                    </ul>
                  </div>
                  <div className="">
                    <h2 className="nav font-bold pb-2 ">NIghtWear</h2>
                    <ul className="cur text-gray-700 ">
                      <Link className="hover:underline" to="/nightware/shorts">
                        Shorts
                      </Link>
                      <br />
                      <Link className="hover:underline" to="/nightware/maxi">
                        Maxi
                      </Link>
                      <br />
                      <Link className="hover:underline" to="#">
                        T-shirt Pajama
                      </Link>
                      <br />
                      <Link className="hover:underline" to="#">
                        Night Dress
                      </Link>
                      <br />
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Link
              onMouseEnter={opensBridal}
              to="/Women/new/trendy/fashion"
              className="text-gray-700 flex items-center hover:text-[#903233] gap-1"
            >
              Bridal
              <i>
                <FaAngleDown size={13} />
              </i>
            </Link>
            <div className=" absolute top-23 ">
              {bridalOpen && (
                <div
                  onMouseLeave={() => setBridalOpen(false)}
                  className=" ml-40 p-5 bg-gray-100"
                >
                  <div className="">
                    <h2 className="nav font-bold pb-2">BRIDAL COLLECTION</h2>
                    <div className="flex gap-10">
                      <ul className="cur text-gray-700 ">
                        <Link className="hover:underline" to="#">
                          Wedding Dresses
                        </Link>
                        <br />
                        <Link className="hover:underline" to="#">
                          Lehnga
                        </Link>
                        <br />
                        <Link className="hover:underline" to="#">
                          PartyWear Dress
                        </Link>
                        <br />
                        <Link className="hover:underline" to="#">
                          Ready to Wear Dresses
                        </Link>
                        <br />
                      </ul>
                      <ul className="cur text-gray-700 px-10 border-l">
                        <Link className="hover:underline" to="#">
                          Wedding Guests Wear
                        </Link>
                        <br />
                        <Link className="hover:underline" to="#">
                          Gowns
                        </Link>
                        <br />
                        <Link className="hover:underline" to="#">
                          Sarees
                        </Link>
                        <br />
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex space-x-7  md:space-x-4 items-center">
          <div className="reletive">
            <CiSearch
              size={26}
              className=" absolute p-1 top-12 text-gray-500"
            />
            <input
              type="text"
              className="bg-gray-200 p-1 indent-4 px-3"
              placeholder="search for Products.."
            />
          </div>

          <Login />
          <Link
            to="/cart/items"
            className="relative text-2xl text-gray-700 hover:text-[#903233]"
          >
            {/* Cart Count Badge */}
           
              <span className="absolute -right-1 -top-2 bg-[#903233] text-white text-xs px-1 rounded-full">
                {totalcount}
              </span>
       
            <IoCartOutline />
          </Link>
          {/* <Link
            to="/cart/items"
            className="relative text-2xl text-gray-700 hover:text-[#903233]"
          >
          
            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-2 bg-[#903233] text-white text-xs px-1 rounded-full">
                {cartItems.length}
              </span>
            )}
            <IoCartOutline />
          </Link> */}

        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <AiOutlineClose /> :<AiOutlineMenu /> }
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-20 sm:top-21 left-full sm:w-3xs w-40  bg-[#903233] text-white transition-transform duration-300 ${
          menu ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <nav className="flex flex-col ">
          <Link
            to="/"
            className="  hover:text-[#903233] border-b pl-2 border-gray-100 w-full  py-3"
          >
            HOME
          </Link>

          <Link
            onMouseEnter={opens}
            to="/Women/new/trendy/fashion"
            className="  py-3 flex items-center pl-2 hover:text-[#903233] gap-1"
          >
            Clothing
            <i>
              <FaAngleDown size={13} />
            </i>
          </Link>
          <div className="pl-2 text-white">
            {open && (
              <div
                onMouseLeave={() => setOpen(false)}
                className="grid grid-cols-1 "
              >
                <div className="">
                  <h2 className="nav font-bold text-white pb-2">DAYWEAR</h2>
                  <ul className="cur  border-r pr-15  text-white">
                    <Link
                      className="hover:underline"
                      to="/traditional/wear/cloths"
                    >
                      Indian Wear
                    </Link>
                    <br />
                    <Link className="hover:underline" to="/western/wear/cloths">
                      Western Wear
                    </Link>
                    <br />
                    <Link className="hover:underline" to="/shop/saree">
                      Saree
                    </Link>
                    <br />
                    <Link
                      className="hover:underline"
                      to="/trendy/kurti/kurta-sets"
                    >
                      Kurti
                    </Link>
                    <br />
                    <Link className="hover:underline" to="/trendy/dresses">
                      Dresses
                    </Link>
                  </ul>{" "}
                </div>
                <div className="">
                  <h2 className="nav font-bold pb-2 pt-2 text-white">
                    NIghtWear
                  </h2>
                  <ul className="cur text-gray-700 ">
                    <Link className="hover:underline text-white" to="#">
                      Shorts
                    </Link>
                    <br />
                    <Link
                      to="/nightware/maxi"
                      className="hover:underline text-white"
                    >
                      Maxi
                    </Link>
                    <br />
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/new/trends"
            className="  hover:text-[#903233] pl-2 border-t border-b border-gray-100 w-full  py-3"
          >
            New Arrivals
          </Link>
          <Link
            onMouseEnter={opensBridal}
            to="/Women/new/trendy/fashion"
            className="pl-2 flex  text-center py-3 items-center hover:text-[#903233] gap-1"
          >
            Bridal
            <i>
              <FaAngleDown size={13} />
            </i>
          </Link>
          <div className="pl-2 ">
            {bridalOpen && (
              <div onMouseLeave={() => setBridalOpen(false)} className=" ">
                <div className="">
                  <h2 className="nav font-bold pb-2 w-full ">
                    BRIDAL COLLECTION
                  </h2>
                  <div className="flex gap-10">
                    <ul className="cur text-gray-700 ">
                      <Link className="hover:underline text-white" to="#">
                        Wedding Dresses
                      </Link>
                      <br />
                      <Link className="hover:underline text-white" to="#">
                        Lehnga
                      </Link>
                      <br />
                      <Link className="hover:underline text-white" to="#">
                        PartyWear Dress
                      </Link>
                      <br />
                      <Link className="hover:underline text-white" to="#">
                        Ready to Wear Dresses
                      </Link>
                      <br />
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Login />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
