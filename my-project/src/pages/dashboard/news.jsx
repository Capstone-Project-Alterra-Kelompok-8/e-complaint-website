import CardNews from "../../components/Berita/cardNews";
import ButtonNews from "../../components/Berita/buttonNews";
import Sidebar from "../../Layouts/sidebar"
import Header from "../../Layouts/headerDashboard";
import { IoSearch } from "react-icons/io5";
const beritaData = [
    {
        id: 1,
        image: 'https://via.placeholder.com/600x400',
        title: 'Parkir Liar',
        description: 'Parkir liar mengganggu ketertiban lalu lintas dan mengurangi kenyamanan serta keamanan bagi pengguna jalan lainnya.'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/600x400',
        title: 'Parkir Liar',
        description: 'Parkir liar mengganggu ketertiban lalu lintas dan mengurangi kenyamanan serta keamanan bagi pengguna jalan lainnya.'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/600x400',
        title: 'Parkir Liar',
        description: 'Parkir liar mengganggu ketertiban lalu lintas dan mengurangi kenyamanan serta keamanan bagi pengguna jalan lainnya.'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/600x400',
        title: 'Parkir Liar',
        description: 'Parkir liar mengganggu ketertiban lalu lintas dan mengurangi kenyamanan serta keamanan bagi pengguna jalan lainnya.'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/600x400',
        title: 'Parkir Liar',
        description: 'Parkir liar mengganggu ketertiban lalu lintas dan mengurangi kenyamanan serta keamanan bagi pengguna jalan lainnya.'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/600x400',
        title: 'Parkir Liar',
        description: 'Parkir liar mengganggu ketertiban lalu lintas dan mengurangi kenyamanan serta keamanan bagi pengguna jalan lainnya.'
    },
    // Tambahkan lebih banyak data sesuai kebutuhan
];

const NewsPage = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <Header></Header>
            <div className="bg-light-2">
                <div className="lg:ml-80 pt-9 font-poppins text-black text-4xl font-medium">Kelola Berita</div>
                <div className="container mt-9 lg:ml-80 w-fit bg-gray-300 justify-between px-5 pt-5 rounded-lg">
                    <div className="container lg:flex justify-between items-center mb-5">
                        <ButtonNews />
                        <div className="flex mt-5 lg:mt-0 px-2 lg:w-80 items-center rounded border border-gray-400 bg-white">
                            <span className="text-2xl"><IoSearch />
                            </span>
                            <input type="text" className=" lg:w-80 border-none" placeholder="Kata kunci atau tracking ID" />
                        </div>
                    </div>

                    <div className=" container w-full flex flex-wrap gap-2">
                        {beritaData.map((berita) => (
                            <div key={berita.id} className="p-4">
                                <CardNews
                                    image={berita.image}
                                    title={berita.title}
                                    description={berita.description}
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
