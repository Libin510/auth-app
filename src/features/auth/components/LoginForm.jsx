import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { login } from "../authThunks";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="min-h-screen bg-[#c9d6d8] flex items-center justify-center">
      <div className="w-full max-w-md bg-transparent px-6">
        
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1 text-lg font-semibold">
            <span className="bg-white px-2 py-1 rounded text-gray-700">
              generate
            </span>
            <span className="bg-teal-500 text-white px-3 py-1 rounded">
              TAX
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-gray-700 mb-6">
          Welcome to <span className="font-semibold">generate.TAX</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <span className="absolute right-3 top-3 text-gray-400 text-sm cursor-pointer">
              👁
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-teal-500" />
              Remember me
            </label>
            <span className="cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600 transition"
          >
            Login
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">
            {error}
          </p>
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
            className="w-full bg-teal-100 text-gray-700 py-3 rounded-full hover:bg-teal-200 transition"
          >
            Continue with XERO
          </button>

          <button
            type="button"
            className="w-full bg-teal-100 text-gray-700 py-3 rounded-full hover:bg-teal-200 transition"
          >
            Continue with Google
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="underline">
            Register with Email
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;