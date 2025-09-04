import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/userAuthStore";
import AppLayout from "../components/layouts/AppLayout";

// Pages
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";

function RequireAuth() {
  const isAuthed = useAuthStore((s) => s.isAuthenticated); // ✅ pas de ()
  const location = useLocation();

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}

function RedirectIndex() {
  const isAuthed = useAuthStore((s) => s.isAuthenticated); // ✅ pas de ()
  return <Navigate to={!isAuthed ? "/dashboard" : "/login"} replace />;
}

export const router = createBrowserRouter([
  { path: "/", element: <RedirectIndex /> },

  // Routes publiques (pas de sidebar)
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
//   { path: "/dashboard", element: <Dashboard /> },

  // Routes protégées (avec AppLayout + sidebar)
  {
    element: <RequireAuth />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/settings", element: <Settings /> },
        ],
      },
    ],
  },

  // Fallback
  { path: "*", element: <Navigate to="/" replace /> },
]);
