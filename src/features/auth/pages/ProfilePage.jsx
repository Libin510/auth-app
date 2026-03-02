import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { logout } from "../authSlice";
import { Search, Plus } from "lucide-react";
const ProfilePage = () => {
  const { currentUser, loginHistory } = useAppSelector((state) => state.auth);

  console.log(loginHistory);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const sidebarData = [
    { name: "Home", path: "home" },
    { name: "Entities", path: "entities" },
    { name: "Reporting", path: "reporting" },
    { name: "Billing", path: "billing" },
    { name: "VAT Checker", path: "vat-checker" },
    { name: "Users", path: "log" },
  ];

  // Extract correct child path
  const pathParts = location.pathname.split("/");
  const currentPath = pathParts[2] || "home";

  const formattedPath =
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#EDFAF6] to-[#E1F4FE] text-gray-800 flex flex-col">
        <div className="px-6 py-5 text-xl font-semibold ">
          generate<span className="font-light">.TAX</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarData.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${
                  isActive ? "bg-[#41AAAF] font-semibold text-black" : "hover:bg-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-teal-600 text-sm">
          © 2026 generate.TAX
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <p className="text-lg font-semibold text-gray-700">
            {formattedPath} / {currentUser?.name}
          </p>

          

          

          <div className="flex items-center justify-between p-4">
            {/* Search Bar */}
            <div className="relative w-80">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 
                 text-sm outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* New Entity Button */}
            <div
              className="ml-4 flex items-center gap-2 px-5 py-2 rounded-full 
               bg-[#41AAAF] text-white text-sm font-medium
               hover:bg-teal-600 transition duration-200 shadow-sm"
            >
              <Plus size={16} />
              New Entity
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
