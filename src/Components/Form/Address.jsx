import React, { useState } from "react";
import { FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    state: "",
    district: "",
    type: "Home",
    weekends: "No",
  });

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddress) {
      setAddresses([...addresses, { id: Date.now(), ...newAddress }]);
      setShowForm(false);
      setNewAddress({
        name: "",
        phone: "",
        address: "",
        pincode: "",
        state: "",
        district: "",
        type: "Home",
        weekends: "No",
      });
    }
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="pt-30 px-4 md:px-10">
      <div className="lg:flex min-h-60 lg:mx-20 bg-white shadow-md rounded-lg sm:p-6">
        <div className="rounded-lg lg:min-w-96 shadow sm:px-6 py-3 sm:py-0 mb-10">
          <h2 className="text-2xl font-bold text-gray-700 border-b pb-3">My Addresses</h2>

          <div className="mt-6 space-y-4">
            {addresses.map((addr) => (
              <div key={addr.id} className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center">
                <div className="flex gap-4 sm:gap-7  items-center">
                  <FaMapMarkerAlt className="text-red-700 text-xl" />
                  <div>
                    <h3 className="font-semibold">{addr.name} <span className="text-sm text-gray-500">({addr.type})</span></h3>
                    <p className="text-gray-600">{addr.phone}</p>
                    <p className="text-gray-500">{addr.address}, {addr.district}, {addr.state} - {addr.pincode}</p>
                    {addr.type === "Office" && <p className="text-gray-600">Open on weekends: {addr.weekends}</p>}
                  </div>
                </div>
                <button onClick={() => handleDelete(addr.id)} className="p-2 ml-4 text-gray-800 hover:text-red-800 rounded-md">
                  <RxCross1 size={25} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center border border-transparent">
            <button onClick={() => setShowForm(!showForm)} className="flex sm:mb-5 items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              <FaPlus /> {showForm ? "Close Form" : "Add New Address"}
            </button>
          </div>
        </div>

        {showForm && (
          <div className="border p-4 border-gray-200 bg-white rounded-xl shadow-lg w-full max-w-lg mx-auto mt-6 md:mt-0 md:ml-6">
            <h3 className="text-xl font-bold text-gray-800 mb-5">Add New Address</h3>
            <form onSubmit={handleAddAddress} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={newAddress.name}
                  onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={newAddress.phone}
                  onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  placeholder="House no, Building, Street, Area"
                  value={newAddress.address}
                  onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none h-24"
                  required
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                <input
                  type="text"
                  placeholder="Enter pincode"
                  value={newAddress.pincode}
                  onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* State & District */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    placeholder="Enter state"
                    value={newAddress.state}
                    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                  <input
                    type="text"
                    placeholder="Enter district"
                    value={newAddress.district}
                    onChange={(e) => setNewAddress({ ...newAddress, district: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* Address Type & Available on Weekends */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Type</label>
                  <div className="flex gap-4 py-2">
                    <label className="flex items-center">
                      <input type="radio" name="addressType" value="Home" checked={newAddress.type === "Home"} onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })} className="mr-2" />
                      Home
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="addressType" value="Office" checked={newAddress.type === "Office"} onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })} className="mr-2" />
                      Office
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Available on Weekends</label>
                  <div className="flex gap-4 py-2">
                    <label className="flex items-center">
                      <input type="radio" name="weekends" value="Yes" checked={newAddress.weekends === "Yes"} onChange={(e) => setNewAddress({ ...newAddress,weekends: e.target.value })} className="mr-2" />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="weekends" value="No" checked={newAddress.weekends === "No"} onChange={(e) => setNewAddress({ ...newAddress, weekends: e.target.value })} className="mr-2" />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700">
                Save Address
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Address;
