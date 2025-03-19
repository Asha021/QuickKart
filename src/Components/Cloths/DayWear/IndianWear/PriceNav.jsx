import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const PriceNav = ({ data, setFilteredData }) => {
  const prices = [299, 699, 999, 1999, 2999, '4999 & above'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'Brown', 'Grey', 'Orange', 'Pink', 'Purple', 'White', 'Silver', 'Red'];

  const [showPrices, setShowPrices] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const filterByPrice = (price) => {
    let filtered = data.filter(item => item.price <= (typeof price === 'number' ? price : 4999));
    setFilteredData(filtered);
    setShowPrices(false);
  };

  const filterBySize = (size) => {
    let filtered = data.filter(item => item.sizes?.some(s => s.toLowerCase() === size.toLowerCase()));
    setFilteredData(filtered);
    setShowSizes(false);
  };
  
  const filterByColor = (color) => {
    let filtered = data.filter(item => item.colors?.some(c => c.toLowerCase() === color.toLowerCase()));
    setFilteredData(filtered);
    setShowColors(false);
  };

  return (
    <div className='lg:mx-10  lg:w-50 w-full gap-3'>
      <h1 className='lg:px-5 px-2 lg:text-2xl lg:py-5 py-2 text-xl font-bold'>Categories</h1>

      <div className=''>
        {/* Price Filter */}
        <div className="border-t md:px-5 px-3 py-4 w-full md:w-auto border-gray-200">
          <h2 onClick={() => setShowPrices(!showPrices)} className="text-xl font-bold mb-4 flex items-center cursor-pointer">
            Filter by Price <FaAngleDown />
          </h2>
          {showPrices && (
            <ul className="flex gap-2 py-2 overflow-x-auto md:flex lg:flex-wrap lg:overflow-visible">
            {prices.map((price, index) => (
              <li 
                key={index} 
                onClick={() => filterByPrice(price)} 
                className="cursor-pointer border px-5 py-2 rounded hover:text-blue-600 w-full text-center whitespace-nowrap lg:whitespace-break-spaces"
              >
                Under ₹{price}
              </li>
            ))}
          </ul>
          )}
        </div>

        {/* Size Filter */}
        <div className="border-t md:px-5 px-3 py-4 w-full md:w-auto border-gray-200 overflow-x-auto whitespace-nowrap">
          <h2 onClick={() => setShowSizes(!showSizes)} className="text-xl font-bold mb-4 flex items-center cursor-pointer">
            Filter by Size <FaAngleDown />
          </h2>
          {showSizes && (
            <ul className="flex gap-2 py-2 overflow-x-auto md:flex lg:flex-wrap lg:overflow-visible">
            {sizes.map((size, index) => (
              <li 
                key={index} 
                onClick={() => filterBySize(size)} 
                className="cursor-pointer border px-5 py-2 rounded hover:text-blue-600 w-full text-center whitespace-nowrap"
              >
                {size}
              </li>
            ))}
          </ul>
          
          )}
        </div>

        {/* Color Filter */}
        <div className="border-t md:px-5 px-3 py-4 w-full md:w-auto border-gray-200 overflow-x-auto whitespace-nowrap">
          <h2 onClick={() => setShowColors(!showColors)} className="text-xl font-bold mb-4 flex items-center cursor-pointer">
            Filter by Color <FaAngleDown />
          </h2>
          {showColors && (
  <ul className="flex gap-2 py-2  overflow-x-auto md:flex lg:flex-wrap lg:overflow-visible">
    {colors.map((color, index) => (
      <li key={index} className="flex items-center w-full border gap-2 cursor-pointer px-5 py-2 rounded">
        <span style={{ backgroundColor: color }} className="w-4 h-4 lg:mr-5 rounded-full border"></span>
        {color}
      </li>
    ))}
  </ul>
)}

        </div>
      </div>
    </div>
  );
};

export default PriceNav;
