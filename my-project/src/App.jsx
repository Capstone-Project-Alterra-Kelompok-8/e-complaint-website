import { Route, Routes } from "react-router-dom";
// import Login from "./components/Login/Login"
import ListAdmin from "./pages/SuperAmin/ListAdmin"
import ListUser from "./pages/SuperAmin/ListUser"

function App() {

  return (
    <main>
      {/* <Login /> */}
      <Routes>
        <Route path="/super-admin/admin" element={<ListAdmin />} />
        <Route path="/super-admin/user" element={<ListUser />} />
      </Routes>
    </main>
  )
}

export default App