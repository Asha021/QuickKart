import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const PriceNav = () => {
  const prices = [299, 499, 699, 999, 1299, 1599, 1999, 2999, '4999 & above'];
  const sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL'];
  const color = ['Black','Brown','Grey','Khaki','Nude','MultiColor','Marron','Olive','Orange','Pink','Purple','Skin','White','Silver','Red'];

  const [showPrices, setShowPrices] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [colors,setColor] = useState(false);

  return (
    <div className='mx-10 w-64 '>
      {/* Price Filter */}
      <h1 className='px-5 text-2xl py-5  font-bold'>Categories</h1>
      <div className="px-5 py-4 border-t  border-gray-200">
        <h2 onClick={() => setShowPrices(!showPrices)} className="text-xl font-bold mb-4 flex items-center cursor-pointer">
          Filter by Price <FaAngleDown />
        </h2>
        {showPrices && (
          <ul className='space-y-3'>
            {prices.map((price, index) => (
              <li key={index} className="cursor-pointer border px-2 rounded-2xl py-3 hover:text-blue-600">
                Under ₹{price}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Size Filter */}
      <div className="w-64  px-5 py-2 border-t border-gray-200 ">
        <h2 onClick={() => setShowSizes(!showSizes)} className="text-xl font-bold mb-4 flex items-center cursor-pointer">
          Filter by Size <FaAngleDown />
        </h2>
        {showSizes && (
          <ul className='space-y-3'>
            {sizes.map((size, index) => (
              <li key={index} className="cursor-pointer border px-2 rounded-2xl py-3 hover:text-blue-600">
                {size}
              </li>
            ))}
          </ul>
        )}
      </div>

       {/* Color Filter*/}
       <div className="w-64  px-5 py-2 border-t border-gray-200 ">
        <h2 onClick={() => setColor(!colors)} className=" text-xl font-bold mb-4 flex items-center cursor-pointer">
          Filter by Color <FaAngleDown />
        </h2>
        {colors && (
          <ul className='space-y-3'>
            {color.map((color, index) => (
              <li key={index} className="cursor-pointer border px-2 rounded-2xl py-3 hover:text-blue-600">
                {color}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PriceNav;
