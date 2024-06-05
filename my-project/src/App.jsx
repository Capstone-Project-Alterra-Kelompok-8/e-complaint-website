import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import ListAdmin from "./pages/SuperAmin/ListAdmin"
import ListUser from "./pages/SuperAmin/ListUser"
import ListComplaint from "./components/Complaint/ListComplaint";

function App() {

  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/super-admin/admin" element={<ListAdmin />} />
        <Route path="/super-admin/user" element={<ListUser />} />
        <Route path="/complaints" element={<ListComplaint />} />
      </Routes>
    </main>
  )
}

export default App