import React, { useState} from "react";
import { FaUserCircle, FaEdit, FaCamera } from "react-icons/fa";

const Profile = () => {
  const name = localStorage.getItem("userName") || "not_added";
  const email = localStorage.getItem("mail") || "not_added";
  const [mobile,setMobile]=useState('not_added')
  const [gender,setGender]=useState('not_added')
  const [dob,setDOB]=useState('not_added')
  const [altMob,setAltMob]=useState('not_added')
  const [input,setInput]=useState(false)
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || "");

 const handleImageUpload=(e)=>{
  const file = e.target.files[0];
  if (file) {
    const reader= URL.createObjectURL(file);
    setProfilePic(reader)
    // localStorage.setItem("profilePic",reader)
  }
 }

 const edit=()=>{
  setInput(!input)
 }
 
  return (
  <div className="bg-gray-50">
     <div className=" pb-20 pt-30">
     <div className="  px-2 min-h-screen sm:flex items-center justify-center">
      <div className="sm:max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Profile Header */}
        <div className="sm:flex sm:flex-col  border-b pb-4">

          <div className="relative">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border"
              />
              
            ) : (
              <FaUserCircle size={96} className="text-gray-400" />
            )}
            <label className="absolute bottom-0 left-15 bg-blue-500 text-white p-1 rounded-full cursor-pointer hover:bg-blue-600">
              <FaCamera size={16} />
              <input type="file" className="hidden"  onChange={handleImageUpload} />
            </label>
          </div>

          <h2 className="text-xl font-semibold mt-3">Hello, {name}</h2>
          <p className="text-gray-600">QuickKart-Customer</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-bold border-b pb-2">Profile Details</h2>
          <div className="text-lg space-y-4  text-gray-700">
            <div className="sm:flex gap-30">
              <p className="font-semibold">Full Name:</p>
              <p>{name}</p>
            </div>
            <div className="sm:flex gap-30">
              <p className="font-semibold">E-mail Id:</p>
              <p className="">{email}</p>
            </div>
            <div className="sm:flex  gap-20">
              <p className="font-semibold">Mobile Number:</p>
              <p className="text-gray-500 ">{input?<input className="border indent-3 text-md " type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)}  />:mobile}</p>
            </div>
            <div className="sm:flex  gap-37">
              <p className="font-semibold ">Gender:</p>
              {/* <p className="text-gray-500">{input?<input className="border indent-3 text-md " type="text" value={gender} onChange={(e)=>setGender(e.target.value)}  />:(<p>{gender}</p>)}</p> */}
              {input ? (
    <select
      className="border p-1  rounded"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
    >
      <option value="not_added" disabled>Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  ) : (
    <p className="text-gray-500">{gender}</p>
  )}
            </div>
            <div className="sm:flex  gap-23">
              <p className="font-semibold">Date of Birth:</p>
              <p className="text-gray-500 ">{input?<input className="border indent-3 text-md " type="date" value={dob} onChange={(e)=>setDOB(e.target.value)}  />:dob}</p>
            </div>
            <div  className="sm:flex  gap-17">
             <p className="font-semibold">Alternate Mobile:</p>
             <p className="text-gray-500">{input?<input className="border indent-3 text-md " type="text" value={altMob} onChange={(e)=>setAltMob(e.target.value)}  />:altMob}</p>
           </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6 text-center">
          <button onClick={edit}  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <FaEdit />{input?"Save":"Edit Profile"}
          </button>
        </div>
      </div>
    </div>
   </div>
  </div>
  );
};

export default Profile;
