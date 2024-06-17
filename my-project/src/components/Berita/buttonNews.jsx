import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ButtonNews() {
    return (
        <Link to="/news-create" className="bg-main-color hover:bg-main-darker rounded justify-center px-6 py-2.5 items-center gap-2 inline-flex">
            <FaPlus />
            <div className="text-center text-violet-950 text-sm font-medium leading-tight tracking-tight">Tambah Berita</div>
        </Link>
    );
}
