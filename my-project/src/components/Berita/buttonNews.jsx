import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

export default function ButtonNews({ onClick, mode }) {
    const isEditMode = mode === "edit";
    return (
        <button 
            className="bg-main-darker hover:bg-main-lighter rounded justify-center px-6 py-2.5 items-center gap-2 inline-flex" 
            onClick={onClick}
        >
            {isEditMode ? <FiEdit /> : <FaPlus />}
            <div className="text-center text-violet-950 text-sm font-medium leading-tight tracking-tight">
                {isEditMode ? "Edit Berita" : "Tambah Berita"}
            </div>
        </button>
    );
}
