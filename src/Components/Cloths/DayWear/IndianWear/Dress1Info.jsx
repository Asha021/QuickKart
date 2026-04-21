import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ClothCompo from './ClothCompo';
import ReletedPro from './ReletedPro';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../features/cart/cartSlice';

const Dress1Info = () => {
    const navigate = useNavigate('')
    const location = useLocation();
    const item = location.state || {}; 
    const [quantity, setQuantity] = useState(1);
    const colors = ["red", "blue", "green", "yellow"];
    const sizes = ["S", "M", "L", "XL"];
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const dispatch = useDispatch();
   
const handleAdd = () => {
        console.log("Button Clicked!"); // Pehle ye check karein
        if (item && item.id) {
            dispatch(addToCart(item));
            console.log("Data sent to Redux:", item);
        } else {
            console.log("Error: Item ya Item ID missing hai!", item);
        }
    };
    
    return (
        <div className="pt-30 mx-20 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Left Side - Image */}
                <div>
                    <img src={item.img} alt="img" className="w-full rounded-lg shadow-lg" />
                </div>

                {/* Right Side - Details */}
                <div>
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="text-gray-600 mt-2">A stylish and comfortable {item.title} perfect for any occasion.</p>
                    
                    {/* Price */}
                    <h2 className="text-xl text-red-600 font-semibold mt-2">₹{item.price}</h2>
                    
                    {/* Color Selection */}
                    <div className="mt-3">
                        <h3 className="font-semibold">Select Color:</h3>
                        <div className="flex gap-2 mt-1">
                            {item.colors?.map((color) => (
                                <button 
                                    key={color} 
                                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`} 
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mt-3">
                        <h3 className="font-semibold">Select Size:</h3>
                        <div className="flex gap-2 mt-1">
                            {item.sizes?.map((size) => (
                                <button 
                                    key={size} 
                                    className={`px-4 py-1 border rounded-md ${selectedSize === size ? 'bg-gray-800 text-white' : 'bg-gray-200'}`} 
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="mt-3">
                        <h3 className="font-semibold">Quantity:</h3>
                        <input 
                            type="number" 
                            className="border px-3 py-1 rounded-md w-16 mt-1"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="mt-5 flex gap-3">
                        <button  onClick={handleAdd} className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">Add to Cart</button>
                        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Footer - Cloth Information */}
            <div className="mt-10 p-5 bg-gray-100 rounded-md">
                <h3 className="text-xl font-semibold">About This {item.title}</h3>
                <p className="text-gray-600 mt-2">
                    This {item.title} is made with high-quality fabric to ensure maximum comfort and durability. 
                    It is perfect for casual outings, parties, and even formal occasions. The premium stitching and elegant design 
                    make it a must-have in your wardrobe. Available in multiple colors and sizes, it suits all body types and styles.
                </p>

                <h3 className="text-lg font-semibold mt-3">Product Details:</h3>
                <ul className="list-disc ml-5 text-gray-700">
                    <li>Material: Premium Cotton Blend</li>
                    <li>Fit: Regular Fit</li>
                    <li>Pattern: Solid / Printed (Varies by color)</li>
                    <li>Wash Care: Machine wash / Hand wash recommended</li>
                    <li>Best for: Casual, Party, and Formal Wear</li>
                </ul>
            </div>
            <h2 className='py-10 font-black text-2xl'>More Releted  Products</h2>
            <ReletedPro item={item} />
        </div>
    );
}

export default Dress1Info;
