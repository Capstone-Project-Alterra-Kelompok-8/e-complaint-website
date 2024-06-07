import { Navigate, Outlet } from 'react-router-dom';

const SuperAdminRoute = () => {
    const isSuperAdmin = sessionStorage.getItem('isSuperAdmin') === 'true';
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn || !isSuperAdmin) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default SuperAdminRoute;
