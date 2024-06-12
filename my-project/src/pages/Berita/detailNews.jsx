import DetailCardNews from "../../components/Berita/detailCardNews"
import Sidebar from "../../Layouts/sidebar"
import Header from "../../Layouts/headerDashboard"

export default function DetailNews() {
    return (
        <>
            <Sidebar />
            <Header />
            <div className="bg-light-2 px-3 pb-6">
                <div className="lg:ml-80 pt-9 font-poppins text-black text-4xl font-medium">Detail Berita</div>
                <div className="container mt-9 lg:ml-80 w-fit bg-gray-300 justify-between p-5 rounded-lg">
                    <DetailCardNews />
                </div>

            </div>

        </>
    )
}