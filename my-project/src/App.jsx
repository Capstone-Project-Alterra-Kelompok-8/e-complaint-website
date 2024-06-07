
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import ListAdmin from "./pages/SuperAmin/ListAdmin"
import ListUser from "./pages/SuperAmin/ListUser"
import HomePage from "./pages/HomePage"
import SuperAdminRoute from "./Route/Super-AdminRoute"

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Privat route Super Admin */}
        <Route element={<SuperAdminRoute />}>
          <Route path="/super-admin/admin" element={<ListAdmin />} />
          <Route path="/super-admin/user" element={<ListUser />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App