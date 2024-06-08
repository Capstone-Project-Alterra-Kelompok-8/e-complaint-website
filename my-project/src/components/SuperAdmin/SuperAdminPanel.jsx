import { Link, useLocation } from 'react-router-dom';

function SuperAdminPanel() {
    const location = useLocation();

    return (
        <main className="py-6 px-3">
            <h1 className="font-poppins text-4xl text-black mb-9 font-medium">Kelola Admin</h1>
            <section 
            className="flex row gap-4">
                <Link
                to="/super-admin/admin"
                className={`${location.pathname === '/super-admin/admin' ? 'bg-main-color text-white hover:bg-main-darker' : 'border border-main-color text-main-color hover:bg-main-color hover:text-white'} p-3 rounded-lg font-montserrat`}>Admin</Link>
                <Link
                to="/super-admin/user"
                className={`${location.pathname === '/super-admin/user' ? 'bg-main-color text-white hover:bg-main-darker' : 'border border-main-color text-main-color hover:bg-main-color hover:text-white'} p-3 rounded-lg font-montserrat`}>User</Link>
            </section>
        </main>
    )
}

export default SuperAdminPanel