import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { register } from "../authThunks";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(register(form));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/");
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
          Create your <span className="font-semibold">generate.TAX</span> account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600 transition"
          >
            Register
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

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Already have an account?{" "}
          <Link to="/" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;