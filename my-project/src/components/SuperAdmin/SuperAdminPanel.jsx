import { Link } from "react-router-dom"

function SuperAdminPanel() {
    return (
        <main className="py-6 px-3">
            <h1 className="font-poppins text-4xl text-black mb-9 font-medium">Kelola Admin</h1>
            <section 
            className="flex row gap-4">
                <Link
                to="/super-admin/admin"
                className="bg-main-color text-white p-3 rounded-lg hover:bg-main-darker font-montserrat">Admin</Link>
                <Link
                to="/super-admin/user"
                className="border border-main-color text-main-color p-3 rounded-lg hover:bg-main-color hover:text-white font-montserrat">User</Link>
            </section>
        </main>
    )
}

export default SuperAdminPanel