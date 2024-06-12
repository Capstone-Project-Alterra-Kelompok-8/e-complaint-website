import { useState, useEffect } from 'react';
import CardNews from "../../components/Berita/cardNews";
import ButtonNews from "../../components/Berita/buttonNews";
import Sidebar from "../../Layouts/sidebar"
import Header from "../../Layouts/headerDashboard";
import { IoSearch } from "react-icons/io5";

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const token = sessionStorage.getItem('token');
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
            setNews(data.data);
        } catch (error) {
            console.error('Error fetching category: ', error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredNews = news.filter((berita) =>
        berita.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Sidebar />
            <Header />
            <div className="bg-light-2">
                <div className="lg:ml-80 pt-9 font-poppins text-black text-4xl font-medium">Kelola Berita</div>
                <div className="container mt-9 lg:ml-80 w-fit bg-gray-300 justify-between px-5 pt-5 rounded-lg">
                    <div className="container lg:flex justify-between items-center mb-5">
                        <ButtonNews />
                        <div className="flex mt-5 lg:mt-0 px-2 lg:w-80 items-center rounded border border-gray-400 bg-white">
                            <span className="text-2xl"><IoSearch /></span>
                            <input
                                type="text"
                                className="lg:w-80 border-none"
                                placeholder="Kata kunci atau tracking ID"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>

                    <div className=" container w-full flex flex-wrap gap-2">
                         {filteredNews.map((berita) => (
                            <div key={berita.id} className="p-4">
                                <CardNews
                                    image={`https://storage.googleapis.com/e-complaint-assets/${berita.files[0].path}`}
                                    title={berita.title}
                                    description={berita.content}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsPage;
