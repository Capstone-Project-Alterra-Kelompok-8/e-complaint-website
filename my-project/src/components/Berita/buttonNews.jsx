import { FaPlus } from "react-icons/fa6";

export default function ButtonNews({ onClick }) {
    return (
        <button className="bg-main-darker hover:bg-main-lighter rounded justify-center px-6 py-2.5 items-center gap-2 inline-flex" onClick={onClick}>
            <FaPlus />
            <div className="text-center text-violet-950 text-sm font-medium leading-tight tracking-tight">Tambah Berita</div>
        </button>
    );
}
