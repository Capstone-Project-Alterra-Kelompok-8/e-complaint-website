import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { ModalDelete } from './modalDelete';
import { useState } from'react';

const Comment = ({ username, time, text, profilePhoto, alignRight, onDelete }) => {

    const [openModal, setOpenModal] = useState(false);

    const handleDelete = () => {
        onDelete();
        setOpenModal(false);
    };

    return (
         <div className={`flex items-start p-4 border-b font-montserrat ${alignRight ? 'justify-end' : 'justify-start'}`}>
            {alignRight ? (
                <>
                    <div className="flex-grow">
                        <div className="flex justify-between items-center">
                            <button onClick={() => setOpenModal(true)} className="text-red-500">
                                <FaTrash className="inline" /> Hapus
                            </button>
                            <div>
                                
                                <span className="text-gray-500 text-sm">{time}</span>
                                <span className="font-bold ml-2">{username}</span>
                            </div>
                        </div>
                        <p className='text-right'>{text}</p>
                    </div>
                    <ModalDelete open={openModal} onClose={() => setOpenModal(false)} onConfirm={handleDelete} />
                    <img
                        src={`https://storage.googleapis.com/e-complaint-assets/${profilePhoto}`}
                        alt="User avatar"
                        className="rounded-full ml-4"
                        style={{ width: '40px', height: '40px' }}
                    />
                </>
            ) : (
                <>
                    <img
                        src={`https://storage.googleapis.com/e-complaint-assets/${profilePhoto}`}
                        alt="User avatar"
                        className="rounded-full mr-4"
                        style={{ width: '40px', height: '40px' }}
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
                </>
            )}
        </div>
    );
};

export default Comment;
