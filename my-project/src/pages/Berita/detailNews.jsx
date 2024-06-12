import DetailCardNews from "../../components/Berita/detailCardNews"
import Sidebar from "../../Layouts/sidebar"
import Header from "../../Layouts/headerDashboard"
import Comment from "./comment"
import ButtonNews from "../../components/Berita/buttonNews"
import { ModalDelete } from "../../components/Berita/modalDelete"

export default function DetailNews() {
    return (
        <>
            <Sidebar />
            <Header />
            <div className="bg-light-2 px-3 pb-6">
                <div className="lg:ml-80 pt-9 flex gap-5 ">
                    <span className="font-poppins text-black text-4xl font-medium">Detail Berita</span>
                    <ButtonNews mode="edit"
                    // onClick={handleEditNews}
                    />
                </div>
                <div className="container mt-9 lg:ml-80 lg:flex lg:gap-2 bg-gray-300 w-fit justify-between p-5 rounded-lg">
                    <DetailCardNews />
                    <Comment />
                </div>
            </div>
            <ModalDelete />
        </>
    )
}