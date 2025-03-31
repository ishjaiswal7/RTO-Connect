import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Calling the login function from authService
      const res = await login(formData);

      localStorage.setItem("token", res.token);
      localStorage.setItem("userId", res.user._id);
      console.log("User ID:", res.user._id); // Debugging line
      localStorage.setItem("role", res.user.role);
      localStorage.setItem("email", res.user.email);
      localStorage.setItem("name", res.user.name);
      
      // Redirect user based on role
        if (res.user.role === "user") {
            navigate("/user-home");
        } else {
            navigate("/admin-home");
        }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎊
        </h3>

        <form onSubmit={handleSubmit} className="py-4 md:py-0">
          <div className="mb-5">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required 
            />
          </div>

          <div className="mb-5">
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required 
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? <Link to='/register' className="text-primaryColor font-medium ml-1">Register</Link>
          </p>
        </form>
        {message && <p>{message}</p>}
      </div>
    </section>
  )
};

export default Login;