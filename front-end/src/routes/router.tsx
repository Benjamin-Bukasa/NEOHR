import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/userAuthStore";

// Layouts
import AppLayout from "../components/layouts/AppLayout";

// Pages
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Employees from "@/pages/Employees";
import Payroll from "@/pages/Payroll";
import Recruitments from "@/pages/Recruitments";
import Reports from "@/pages/Reports";
import Attendances from "@/pages/Attendances";
import TrainingAndDev from "@/pages/TrainingAndDev";

function RequireAuth() {
  const isAuthed = useAuthStore((s) => s.isAuthenticated); 
  const location = useLocation();

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}

function RedirectIndex() {
  const isAuthed = useAuthStore((s) => s.isAuthenticated); 
  return <Navigate to={isAuthed ? "/dashboard" : "/login"} replace />;
}

export const router = createBrowserRouter([
  { path: "/", element: <RedirectIndex /> },

  // Routes publiques (pas de sidebar)
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  { path: "/forgot-password", element: <ForgotPassword /> },


  // Routes protégées (avec AppLayout + sidebar)
  {
    element: <RequireAuth />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/employees", element: <Employees /> },
          { path: "/timeattendances", element: <Attendances /> },
          { path: "/payrolls", element: <Payroll /> },
          { path: "/recruitments", element: <Recruitments /> },
          { path: "/trainings", element: <TrainingAndDev /> },
          { path: "/reports", element: <Reports /> },
          { path: "/settings", element: <Settings /> },
        ],
      },
    ],
  },

  // Fallback
  { path: "*", element: <Navigate to="/" replace /> },
]);
