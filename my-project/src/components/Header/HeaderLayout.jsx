import { useDispatch } from 'react-redux';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { toggleSidebar } from '../../services/store';
import { useLocation } from 'react-router-dom';

const HeaderLayout = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const getHeaderText = (path) => {
        switch (path) {
            case '/dashboard':
                return 'Dashboard';
            case '/complaint':
                return 'Complaint';
            case '/chat-user':
                return 'Chat Page';
            case '/category':
                return 'Kategori';
            case '/news':
                return 'Berita';
            case '/news-detail':
                return 'Berita Detail';
            case '/super-admin/admin':
                return 'Super Admin - Admin';
            case '/super-admin/user':
                return 'Super Admin - User';
            default:
                return 'Welcome';
        }
    };

    return (
        <nav className="p-4 flex justify-between items-center lg:pl-72 bg-main-color">
            <section className="ld:pl-4 flex justify-between items-center">
                <button className="lg:hidden" onClick={() => dispatch(toggleSidebar())}>
                    <Bars3Icon className="w-8 h-8 text-white lg:hidden lg:mr-0 mr-4" />
                </button>
                <h1 className="font-poppins text-3xl font-bold">
                    {getHeaderText(location.pathname)}
                </h1>
            </section>
            <section className="md:pr-9">
                <img
                    src="https://storage.googleapis.com/e-complaint-assets/profile-photos/admin-default.jpg"
                    alt="profile"
                    className="w-12 h-12 rounded-full bg-white"
                />
            </section>
        </nav>
    );
};

export default HeaderLayout;