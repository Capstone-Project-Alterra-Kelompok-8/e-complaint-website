import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { ModalDelete } from './modalDelete';
import { useState } from'react';

const Comment = ({ username, time, text, onDelete }) => {

    const [openModal, setOpenModal] = useState(false);

    const handleDelete = () => {
        onDelete();
        setOpenModal(false);
    };

    return (
        <div className="flex items-start p-4 border-b font-montserrat">
            <img
                src="https://via.placeholder.com/40"
                alt="User avatar"
                className="rounded-full mr-4"
            />
            <div className="flex-grow">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-bold">{username}</span>
                        <span className="text-gray-500 text-sm ml-2">{time}</span>
                    </div>
                    <button onClick={() => setOpenModal(true)} className="text-red-500">
                        <FaTrash className="inline" /> Hapus
                    </button>
                </div>
                <p>{text}</p>
            </div>
            <ModalDelete open={openModal} onClose={() => setOpenModal(false)} onConfirm={handleDelete} />
        </div>
    );
};

export default Comment;
