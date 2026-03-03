import { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { Phone, Globe, Clock, Building } from "lucide-react";

const LoginHistoryTable = () => {
  const { loginHistory, currentUser } = useAppSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-gray-50 min-h-screen">
      {/* ================= LEFT PROFILE CARD ================= */}
      {currentUser && (
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-100">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile"
              className="h-[150px] w-[150px] rounded-full object-cover -mt-12"
            />

            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {currentUser.firstName}
            </h2>

            <span className="text-xs bg-[#058181] text-white px-3 py-1 rounded-sm mt-2">
              FREE TRIAL
            </span>

            <p className="text-gray-500 text-sm mt-2">{currentUser.email}</p>

            <span className="text-xs bg-[#E9F6F7] text-black px-3 py-1 rounded-sm mt-2">
              Owner
            </span>
          </div>

          <div className="my-6 border-t border-gray-200" />

          <div className="space-y-4 text-left text-sm">
            <div className="flex items-center gap-3">
              <Building size={16} className="text-gray-400" />
              <div>
                <p className="text-gray-400 text-xs">Company</p>
                <p className="text-gray-700 font-medium">
                  {currentUser.companyName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gray-400" />
              <div>
                <p className="text-gray-400 text-xs">Phone</p>
                <p className="text-gray-700 font-medium">{currentUser.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={16} className="text-gray-400" />
              <div>
                <p className="text-gray-400 text-xs">Website</p>
                <p className="text-gray-700 font-medium">www.whitespace.mt</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={16} className="text-gray-400" />
              <div>
                <p className="text-gray-400 text-xs">Time Zone</p>
                <p className="text-gray-700 font-medium">GMT+1</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <button className="text-sm bg-[#41AAAF] text-white font-bold px-4 py-2 rounded-[50px] hover:bg-[#046a6a] transition">
              Pricing plan
            </button>
            <button className="text-sm bg-white border border-[#41AAAF] text-[#41AAAF] px-4 py-2 rounded-[50px] font-bold hover:bg-gray-50 transition">
              Edit
            </button>
          </div>
        </div>
      )}

      {/* ================= RIGHT SIDE WITH TABS ================= */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden col-span-3 border border-gray-100">
        {/* Tabs */}
        <div className="flex gap-6 border-b px-8 py-4 border-[#DBEAE3] text-sm font-normal">
          <button
            onClick={() => setActiveTab("account")}
            className={`pb-2 transition ${
              activeTab === "account"
                ? "text-[#058181] border-b-2 border-[#058181]"
                : "text-[#879494]"
            }`}
          >
            Account & Security
          </button>

          <button
            onClick={() => setActiveTab("billing")}
            className={`pb-2 transition ${
              activeTab === "billing"
                ? "text-[#058181] border-b-2 border-[#058181]"
                : "text-[#879494]"
            }`}
          >
            Billing Details
          </button>

          <button
            onClick={() => setActiveTab("login")}
            className={`pb-2 transition ${
              activeTab === "login"
                ? "text-[#058181] border-b-2 border-[#058181]"
                : "text-[#879494]"
            }`}
          >
            Login History
          </button>
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="px-6 py-6">
          {/* ACCOUNT TAB */}
          {activeTab === "account" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Account & Security
              </h3>
              <p className="text-sm text-gray-500">
                Manage your account settings and update password or security
                preferences.
              </p>
            </div>
          )}

          {/* BILLING TAB */}
          {activeTab === "billing" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Billing Details
              </h3>
              <p className="text-sm text-gray-500">
                Your subscription plan and payment information will appear here.
              </p>
            </div>
          )}

          {/* LOGIN HISTORY TAB */}
          {activeTab === "login" && (
            <>
              <div className="flex flex-col gap-1 mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Login History
                </h3>
                <p className="text-xs text-gray-500">
                  Access from a country, ISP or IP address which you don't
                  recognize may indicate that the account has been compromised.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-[#E9F6F7] text-gray-500 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-3 border border-[#DBEAE3]">
                        Login Date
                      </th>
                      <th className="px-6 py-3 border border-[#DBEAE3]">
                        IP Address
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {loginHistory.map((entry, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-gray-800 border border-[#DBEAE3]">
                          {entry.loginTime}
                        </td>
                        <td className="px-6 py-4 text-gray-600 border border-[#DBEAE3]">
                          {entry.ipAddress}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginHistoryTable;
