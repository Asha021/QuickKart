import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { FaEye } from "react-icons/fa"; //show
import { FaEyeSlash } from "react-icons/fa"; //hide

const Schema = z.object({
  mail: z.string().min(1, "Email is required").email("Invaild email format"),
  pass: z
    .string()
    .min(1, "Password is requird")
    .min(6, "Password at least must be 6 characters")
    .max(10, "Password must not exceed 10 characters")
    .regex(/[a-z]/, "Password must conatine at least one lowercase letter")
    .regex(/[A-Z]/, "Password must conatine at least one Uppercase letter")
    .regex(/[1-10]/, "Password must conatine at least one number")
    .regex(/[\W_]/, "Password must conatine at least one special letter"),
});

const SignIn = () => {
  const location = useLocation();
  const name = location.state || {};

  const navigate = useNavigate();
  const [mail, setmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({});
  const [show,setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = Schema.safeParse({ mail, pass });
    if (!result.success) {
      const data = result.error.format();

      setError({
        mail: data.mail?._errors[0] || "",
        pass: data.pass?._errors[0] || "",
      });
      return;
    }
    setError({});
    navigate("/");
    localStorage.setItem("userName", name);
    localStorage.setItem("mail", mail);
    console.log("succesfull signin", mail, pass);
  };

  return (
    <div>
      {/* <h2 className="text-2xl pt-20 font-bold mb-4">Welcome {userName ? userName : "User"}!</h2> */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24 py-10">
        <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl">
          <img
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            src="form.png"
            alt="Login Illustration"
            className="w-96 object-cover hidden md:block"
          />
          <div className="p-8 w-full md:w-96 flex flex-col items-center  m-5 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4  w-full">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email <i className="text-red-500 font-bold">*</i>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={mail}
                  onChange={(e) => setmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {error.mail && (
                  <p className="text-red-700 text-sm">{error.mail}</p>
                )}
              </div>
              <div>
                <label htmlFor="pass" className="block text-gray-700">
                  Password<i className="text-red-500 font-bold">*</i>
                </label>
              <div className="border flex rounded items-center relative focus-within:ring-2 focus-within:ring-blue-500">
              <input
                  id="pass"
                  type={show?"text":"password"}
                  name="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full  px-4 py-2  focus:outline-none "
                />
                
          
                <span onClick={() => setShow(!show)} className="px-3">
                  {show ? <FaEye /> : <FaEyeSlash />}{" "}
                </span>
              
              </div>
              {error.pass && (
                  <p className="text-red-700 text-sm">{error.pass}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
              
            </form>
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </p>
            {/* <div className="w-full flex justify-end">
              <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">
                Forgot Password?
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
