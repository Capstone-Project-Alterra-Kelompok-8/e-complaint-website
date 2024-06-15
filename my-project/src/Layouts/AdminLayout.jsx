import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./headerDashboard";

const AdminLayout = () => {
  return (
   <div className="grid grid-cols-[auto,1fr] h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
