import React from "react";
import { FaInstagramSquare } from "react-icons/fa"; //instagram icon
import { FaFacebook } from "react-icons/fa";//facebook
import { FaTwitter } from "react-icons/fa"; //twitter
import { IoLogoYoutube } from "react-icons/io";//youtube
const Bottom = () => {
  return (
    <div>
      <div className="bg-red-300 text-gray-800 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div>
            {/* about section & social platforms */}
            <h3 className="text-xl font-bold mb-4">About QuickKart</h3>
            <p className="text-sm leading-6">
              QuickKart is your one-stop place for the latest trends for men,
              women, and kids. Shop now and enjoy exclusive offers!
            </p>
            <div className="flex gap-5 mt-3">
              <i className="text-2xl cursor-pointer "><FaFacebook /></i>
              <i className="text-2xl cursor-pointer "><FaInstagramSquare /></i>
              <i className="text-2xl cursor-pointer "><FaTwitter /></i>
              <i className="text-2xl cursor-pointer "><IoLogoYoutube /></i>
            </div>
          </div>

            {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kids
                </a>
              </li>
            </ul>
          </div>
            {/* Contact section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Email: quick@quickkart.com</p>
            <p className="text-sm">Phone: +91 7676543210</p>
            <p className="text-sm">Address: 123 Street, City, India</p>
          </div>
        </div>

        <div className="text-center border-gray-700 border-t mt-3 pt-4 text-sm">
          2025 QuickKart. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Bottom;
