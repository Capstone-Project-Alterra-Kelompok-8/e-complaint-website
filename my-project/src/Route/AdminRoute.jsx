import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default AdminRoute;
