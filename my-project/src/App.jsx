import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ListAdmin from "./pages/SuperAmin/ListAdmin";
import ListUser from "./pages/SuperAmin/ListUser";
import HomePage from "./pages/HomePage";
import SuperAdminRoute from "./route/PrivatSuperAdmin";
import Adminroute from "./route/PrivatAdmin";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Complaint from "./pages/Complaint";
import NewsPage from "./pages/news"
import DetailNews from "./pages/Berita/detailNews";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        {/* Privat route Admin */}
        <Route element={<Adminroute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news-detail" element={<DetailNews />} />
        </Route>

        {/* Privat route Super Admin */}
        <Route element={<SuperAdminRoute />}>
          <Route path="/super-admin/admin" element={<ListAdmin />} />
          <Route path="/super-admin/user" element={<ListUser />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
