import { useState } from "react";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa"; //show
import { FaEyeSlash } from "react-icons/fa"; //hide

const Schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(5, "Name must be at least 5 characters"),
  mail: z.string().min(1, "Email is required").email("Invalid email format"),
  pass: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password at least must be 6 characters")
    .max(10, "Password must not exceed 10 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
});

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [cinPass, setCinPass] = useState("");
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [cinPassshow, setCinPassShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = Schema.safeParse({ name, mail, pass,cinPass });

    if (!result.success) {
      const errorMessages = result.error.format();
      setErrors({
        name: errorMessages.name?._errors[0] || "",
        mail: errorMessages.mail?._errors[0] || "",
        pass: errorMessages.pass?._errors[0] || "",
        cinPass: errorMessages.cinPass?._errors[0] || "",
      });
      return;
    }

    setErrors({});
    navigate("/signin", { state: name });
    console.log("Form submitted successfully", { name, mail, pass });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-30 py-10">
      <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl">
        <img
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-delay="300"
          src="form.png"
          alt="Signup Illustration"
          className="w-96 ml-2 p-7 object-cover hidden md:block"
        />
        <div className="p-6 w-full md:w-96 flex flex-col items-center m-5 rounded shadow">
          <h2 className="text-2xl  font-bold mb-3 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-2 w-full">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {<p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email<i className="text-red-500 font-bold">*</i>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.mail && (
                <p className="text-red-500 text-sm">{errors.mail}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password<i className="text-red-500 font-bold">*</i>
              </label>
             <div className="flex items-center  border rounded-md focus-within:ring-2 focus-within:ring-blue-400">
             <input
                id="password"
                type={show ? "text" : "password"}
                name="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-4 py-2 focus:outline-none "
              />
              
             
                <button type="button" onClick={() => setShow(!show)} className="px-3">
                  {show ? <FaEye /> : <FaEyeSlash />}{" "}
                </button>
             </div>
          
                {errors.pass && (
                <p className="text-red-500 text-sm">{errors.pass}</p>
              )}
            </div>

            <div>
              <label htmlFor="pass" className="block text-gray-700">
                Cinfirm Password<i className="text-red-500 font-bold">*</i>
              </label>
                <div className=" relative flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-400">
                <input
                id="pass"
                type={cinPassshow? "text" : "password"}
                name="pass"
                value={cinPass}
                onChange={(e) => setCinPass(e.target.value)}
                className="w-full px-4 py-2 focus:outline-none "
              />
                <span  onClick={() => setCinPassShow(!cinPassshow)} className="px-3">
                  {cinPassshow ? <FaEye /> : <FaEyeSlash />}{" "}
                </span>
          
                </div>
                {errors.pass && (
                <p className="text-red-500 text-sm">{errors.cinPass}</p>
              )}
            </div>


            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// import { useEffect, useState } from "react";
// import { z } from "zod";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye } from "react-icons/fa"; //show
// import { FaEyeSlash } from "react-icons/fa"; //hide
// import axios from "axios";

// const Schema = z.object({
//   name: z
//     .string()
//     .min(1, "Name is required")
//     .min(5, "Name must be at least 5 characters"),
//   mail: z.string().min(1, "Email is required").email("Invalid email format"),
//   pass: z
//     .string()
//     .min(1, "Password is required")
//     .min(6, "Password at least must be 6 characters")
//     .max(10, "Password must not exceed 10 characters")
//     .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .regex(/[a-z]/, "Password must contain at least one lowercase letter")
//     .regex(/[0-9]/, "Password must contain at least one number")
//     .regex(/[\W_]/, "Password must contain at least one special character"),
// });

// const Signup = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [mail, setMail] = useState("");
//   const [pass, setPass] = useState("");
//   const [cinPass, setCinPass] = useState("");
//   const [errors, setErrors] = useState({});
//   const [show, setShow] = useState(false);
//   const [cinPassshow, setCinPassShow] = useState(false);

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     const result = Schema.safeParse({ name, mail, pass,cinPass });

//     if (!result.success) {
//       const errorMessages = result.error.format();
//       setErrors({
//         name: errorMessages.name?._errors[0] || "",
//         mail: errorMessages.mail?._errors[0] || "",
//         pass: errorMessages.pass?._errors[0] || "",
//         cinPass: errorMessages.cinPass?._errors[0] || "",
//       });
//       return;
//     }
//      try {
  
//       const resp = await axios.post("https://reqres.in/api/users",name,mail,pass,cinPass);
//       console.warn(resp.data)

//      } catch (error) {
//        console.error("error",error.message)
//        console.error("error",error.response.status)
//        console.error("error",error.response.data)
//      }

//     setErrors({});
//     navigate("/signin", { state: name });
//     console.log("Form submitted successfully", { name, mail, pass });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-30 py-10">
//       <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl">
//         <img
//           data-aos="fade-right"
//           data-aos-easing="ease-in"
//           data-aos-delay="300"
//           src="form.png"
//           alt="Signup Illustration"
//           className="w-96 ml-2 p-7 object-cover hidden md:block"
//         />
//         <div className="p-6 w-full md:w-96 flex flex-col items-center m-5 rounded shadow">
//           <h2 className="text-2xl  font-bold mb-3 text-center">Sign Up</h2>
//           <form onSubmit={handleSubmit} className="space-y-2 w-full">
//             <div>
//               <label htmlFor="name" className="block text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               {<p className="text-red-500 text-sm">{errors.name}</p>}
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-gray-700">
//                 Email<i className="text-red-500 font-bold">*</i>
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={mail}
//                 onChange={(e) => setMail(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               {errors.mail && (
//                 <p className="text-red-500 text-sm">{errors.mail}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-gray-700">
//                 Password<i className="text-red-500 font-bold">*</i>
//               </label>
//              <div className="flex items-center  border rounded-md focus-within:ring-2 focus-within:ring-blue-400">
//              <input
//                 id="password"
//                 type={show ? "text" : "password"}
//                 name="password"
//                 value={pass}
//                 onChange={(e) => setPass(e.target.value)}
//                 className="w-full px-4 py-2 focus:outline-none "
//               />
              
             
//                 <button type="button" onClick={() => setShow(!show)} className="px-3">
//                   {show ? <FaEye /> : <FaEyeSlash />}{" "}
//                 </button>
//              </div>
          
//                 {errors.pass && (
//                 <p className="text-red-500 text-sm">{errors.pass}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="pass" className="block text-gray-700">
//                 Cinfirm Password<i className="text-red-500 font-bold">*</i>
//               </label>
//                 <div className=" relative flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-400">
//                 <input
//                 id="pass"
//                 type={cinPassshow? "text" : "password"}
//                 name="pass"
//                 value={cinPass}
//                 onChange={(e) => setCinPass(e.target.value)}
//                 className="w-full px-4 py-2 focus:outline-none "
//               />
//                 <span  onClick={() => setCinPassShow(!cinPassshow)} className="px-3">
//                   {cinPassshow ? <FaEye /> : <FaEyeSlash />}{" "}
//                 </span>
          
//                 </div>
//                 {errors.pass && (
//                 <p className="text-red-500 text-sm">{errors.cinPass}</p>
//               )}
//             </div>


//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//             >
//               Sign Up
//             </button>
//           </form>
//           <p className="text-center text-gray-600 mt-4">
//             Already have an account?{" "}
//             <Link to="/signin" className="text-blue-500">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
