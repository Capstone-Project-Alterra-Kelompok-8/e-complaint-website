import { useDispatch, useSelector } from 'react-redux';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { toggleSidebar } from './store';

const HeaderLayout = () => {
    const dispatch = useDispatch();
    const currentPath = useSelector((state) => state.path);

    const pageTitleMap = {
        '/dashboard': 'Dashboard',
        '/complaint': 'Complaint',
        '/chat-user': 'Chat Page',
        '/category': 'Kategori',
        '/news': 'Berita',
        '/super-admin/admin': 'Super Admin',
        '/super-admin/user': 'Super Admin',
    };

    return (
        <nav className="p-4 flex justify-between items-center lg:pl-72 bg-main-color">
            <section className="ld:pl-4 flex justify-between items-center">
                <button className="lg:hidden" onClick={() => dispatch(toggleSidebar())}>
                    <Bars3Icon className="w-8 h-8 text-white lg:hidden lg:mr-0 mr-4" />
                </button>
                <h1 className="font-poppins text-3xl font-bold">
                    {pageTitleMap[currentPath] || 'Dashboard'}
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
