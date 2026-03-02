import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ProfilePage from "../features/auth/pages/ProfilePage";
import LoginData from "../features/auth/pages/LoginData";
import LoginHistoryTable from "../features/auth/components/LoginHistoryTable";

// Example Home component (create properly in your project)
const Home = () => {
  return <div className="text-xl font-semibold">Home</div>;
};
const Entities = () => {
  return <div className="text-xl font-semibold">Entities</div>;
};
const Reporting = () => {
  return <div className="text-xl font-semibold">Reporting</div>;
};
const Billing = () => {
  return <div className="text-xl font-semibold">Billing</div>;
};
const VatChecker = () => {
  return <div className="text-xl font-semibold">VAT Checker</div>;
};


const AppRoutes = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Dashboard Layout */}
      <Route
        path="/profile"
        element={
          isAuthenticated ? (
            <ProfilePage />
          ) : (
            <Navigate to="/" />
          )
        }
      >
        {/* Nested routes */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="entities" element={<Entities />} />
        <Route path="reporting" element={<Reporting />} />
        <Route path="billing" element={<Billing />} />
        <Route path="vat-checker" element={<VatChecker />} />
        <Route path="log" element={<LoginHistoryTable />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;