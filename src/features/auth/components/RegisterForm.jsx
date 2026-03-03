import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { register } from "../authThunks";
import { useNavigate, Link } from "react-router-dom";
import generateTaxLogo from "../../../assets/generateTAX-logo.png";
import xeroLogo from "../../../assets/xeroLogo.png";
import googleLogo from "../../../assets/google.png";
import { X, ChevronDown } from "lucide-react";

const countriesList = [
  "Malta",
  "Ireland",
  "Sweden",
  "India",
  "Germany",
  "France",
];

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    companyName: "",
    businessType: "",
    businessSize: "",
  });

  const [selected, setSelected] = useState(["Malta", "Ireland", "Sweden"]);
  const [open, setOpen] = useState(false);

  // 🔥 Single reusable handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(register(form));

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  const handleSelect = (country) => {
    if (!selected.includes(country)) {
      setSelected([...selected, country]);
    }
  };

  const removeCountry = (country) => {
    setSelected(selected.filter((item) => item !== country));
  };

  return (
    <div className="min-h-screen bg-[#EAF6F7] flex items-center justify-center">
      <div className="w-full max-w-xl px-6">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src={generateTaxLogo}
            alt="Logo"
            className="w-52 h-12 object-contain mx-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-gray-700 font-normal mb-6 text-2xl">
          Try <span className="font-bold">generate.TAX</span> for{" "}
          <span className="font-bold">free</span>
        </h2>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            className="w-full flex items-center gap-2 bg-[#D2EDEF] 
            text-gray-800 py-2 px-3 rounded-full shadow-sm hover:shadow-md transition"
          >
            <div className="bg-white rounded-full p-2 shadow-sm">
              <img src={xeroLogo} alt="Xero" className="h-3 w-3" />
            </div>
            <span className="mx-auto text-sm font-bold">
              Continue with Xero
            </span>
          </button>

          <button
            type="button"
            className="w-full flex items-center gap-2 bg-[#D2EDEF] 
            text-gray-800 py-2 px-3 rounded-full shadow-sm hover:shadow-md transition"
          >
            <div className="bg-white rounded-full p-2 shadow-sm">
              <img src={googleLogo} alt="Google" className="h-3 w-3" />
            </div>
            <span className="mx-auto text-sm font-bold">
              Continue with Google
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-[#879494]" />
          <span className="px-3 text-gray-600 text-sm">OR</span>
          <div className="flex-grow border-t border-[#879494]" />
        </div>

        <p className="text-center text-gray-700">
          Register with your Email Address
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            {/* Phone */}
            <div className="flex items-center overflow-hidden">
              <select className="bg-white px-4 py-3 border-r border-white">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-3 bg-white "
              />
            </div>

            {/* Country */}
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="">Country</option>
              <option value="india">India</option>
              <option value="united_states">United States</option>
              <option value="united_kingdom">United Kingdom</option>
              <option value="united_arab_emirates">United Arab Emirates</option>
            </select>

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={form.companyName}
              onChange={handleChange}
              className="px-4 py-3 bg-white focus:outline-none focus:ring-2 "
            />

            <select
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              className="bg-white px-4 py-3 focus:outline-none focus:ring-2 "
            >
              <option value="">Select Business Type</option>
              <option value="startup">Startup</option>
              <option value="small_business">Small Business</option>
              <option value="enterprise">Enterprise</option>
              <option value="agency">Agency</option>
            </select>

            <select
              name="businessSize"
              value={form.businessSize}
              onChange={handleChange}
              className="bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="">Select Business Size</option>
              <option value="1-10">1 – 10 Employees</option>
              <option value="11-50">11 – 50 Employees</option>
              <option value="51-200">51 – 200 Employees</option>
              <option value="200+">200+ Employees</option>
            </select>
          </div>

          {/* Multi Select Section */}
          <p className="text-center text-sm mt-4">
            Where do you plan to use generate.TAX?
          </p>

          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-wrap items-center gap-2 bg-white px-3 py-2 cursor-pointer"
            >
              {selected.map((country) => (
                <div
                  key={country}
                  className="flex items-center gap-1 bg-[#FFF5E2] px-2 py-1 rounded-md text-sm"
                >
                  {country}
                  <X
                    size={14}
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCountry(country);
                    }}
                  />
                </div>
              ))}
              <ChevronDown className="ml-auto text-gray-500" size={18} />
            </div>

            {open && (
              <div className="absolute w-full mt-1 bg-white border rounded-md shadow-md z-10">
                {countriesList.map((country) => (
                  <div
                    key={country}
                    onClick={() => handleSelect(country)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-2/3 mx-auto block bg-[#41AAAF] text-white py-3 rounded-full hover:bg-teal-600 transition"
          >
            Sign Up
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}

        <p className="text-center text-sm font-bold text-black mt-6">
          Already have an account?{" "}
          <Link to="/" className="underline font-normal">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
