import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function AppLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
