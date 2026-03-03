import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { login } from "../authThunks";
import { useNavigate, Link } from "react-router-dom";
import generateTaxLogo from "../../../assets/generateTAX-logo.png";
import xeroLogo from "../../../assets/xeroLogo.png";
import googleLogo from "../../../assets/google.png";
import { EyeOff } from "lucide-react";
const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login(form));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#EAF6F7] flex items-center justify-center">
      <div className="w-full max-w-md bg-transparent px-6">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1 text-lg font-semibold">
            <img
              src={generateTaxLogo}
              alt="Logo"
              className="w-52 h-12 object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-gray-700 text-2xl mb-6">
          Welcome to <span className="font-bold ">generate.TAX</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3  bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <span className="absolute right-3 top-3 text-gray-400 text-sm cursor-pointer">
              <EyeOff />
            </span>
          </div>

          <div className="flex justify-end text-sm text-gray-600">
            <span className="cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#41AAAF] text-white py-3 rounded-full hover:bg-teal-600 transition"
          >
            Login
          </button>
          <label className="flex justify-center gap-2">
            <input type="checkbox" className="accent-teal-500" />
            Remember me
          </label>
        </form>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="px-3 text-gray-600 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center  gap-3 
             bg-[#D2EDEF] hover:bg-teal-100 
             text-gray-800 font-medium 
             py-3 px-4 rounded-[50px] 
             transition-all duration-200 
             shadow-sm hover:shadow-md
             focus:outline-none focus:ring-2 "
          >
            <div className="bg-white rounded-full p-2 shadow-sm">
              <img
                src={xeroLogo}
                alt="Xero logo"
                className="h-5 w-5 object-contain"
              />
            </div>

            <span className="tracking-wide mx-auto font-bold">
              Continue with Xero
            </span>
          </button>

          <button
            type="button"
            className="w-full flex items-center  gap-3 
             bg-[#D2EDEF] hover:bg-teal-100 
             text-gray-800 font-medium 
             py-3 px-4 rounded-[50px] 
             transition-all duration-200 
             shadow-sm hover:shadow-md
             focus:outline-none focus:ring-2 "
          >
            <div className="bg-white rounded-full p-2 shadow-sm">
              <img
                src={googleLogo}
                alt="Google logo"
                className="h-5 w-5 object-contain"
              />
            </div>

            <span className="tracking-wide mx-auto font-bold">
              Continue with Google
            </span>
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-black font-bold mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="underline ">
            <span className="text-black font-normal underline">
              Register with Email
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
