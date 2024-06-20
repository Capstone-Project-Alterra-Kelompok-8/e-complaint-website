import { useDispatch } from 'react-redux';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { toggleSidebar } from '../../services/store';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeaderLayout = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [getid, setGetid] = useState([]);
    const { id } = getid

    useEffect(() => {
        fetchAllNewsIds();
    }, []);

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
            case `/news-detail/${id}`:
                return 'Berita Detail';
            case '/news-create':
                return 'Tambah Berita';
            case '/super-admin/admin':
                return 'Super Admin - Admin';
            case '/super-admin/user':
                return 'Super Admin - User';
            default:
                return 'Welcome';
        }
    };

    const fetchAllNewsIds = async () => {
        try {
            const token = sessionStorage.getItem('token'); // Ganti dengan cara autentikasi yang sesuai
            const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/news', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            const newsIds = data.data.map(berita => berita.id); // Mengembalikan data berita berdasarkan ID
            setGetid(newsIds); // Mengembalikan data berita berdasarkan ID
        } catch (error) {
            console.error('Error fetching news by ID: ', error);
            throw error;
        }
    };

    return (
        <nav className="p-4 flex justify-between items-center lg:pl-72 bg-main-color">
            <section className="ld:pl-4 flex justify-between items-center">
                <button className="lg:hidden" onClick={() => dispatch(toggleSidebar())}>
                    <Bars3Icon className="w-8 h-8 text-white lg:hidden lg:mr-0 mr-4" />
                </button>
                <h1 className="font-poppins text-3xl font-bold lg:pl-3">
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
