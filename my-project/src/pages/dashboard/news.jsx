import CardNews from "../../components/Berita/cardNews";
import ButtonNews from "../../components/Berita/buttonNews";
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

const App = () => {
    return (
        <>

        <div className="bg-light-2 ps-16 pt-12">
            <div className="font-poppins text-black text-4xl font-medium">Kelola Berita</div>
            <div className="container mt-12 bg-gray-300 justify-between px-5 pt-5 rounded-lg w-full">
                <div className="container flex justify-between items-center mb-5">
                    <ButtonNews />
                    <input type="text" className="w-80 p-2 border border-gray-300 rounded" placeholder="Kata kunci atau tracking ID" />
                </div>

                <div className="container w-full flex flex-wrap gap-5">
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

export default App;
