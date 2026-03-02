import { useAppSelector } from "../../../app/hooks";

const LoginHistoryTable = () => {
  const { loginHistory } = useAppSelector((state) => state.auth);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Login Time</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {loginHistory.map((entry, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="px-6 py-4 text-gray-800">
                  {entry.email}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {entry.loginTime}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default LoginHistoryTable;