import { useState } from 'react';
import logo from '../assets/logo.png';
import { LiaHomeSolid } from "react-icons/lia"
import chatAdmin from '../../src/assets/icons/chatAdmin.svg'
import { LuNewspaper } from "react-icons/lu";
import { TbFolderCog } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5"
import menara from '../assets/menara.png'
import { IoMdClose } from "react-icons/io";
import { Link, useLocation} from 'react-router-dom'


export default function Sidebar() {
    // Untuk logic 
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const closeSidebar = () => {
        setIsOpen(false);
    }

    const isActive = (path)=> location.pathname === path
    
    return (
        <div className='flex'>
            {/* Hamburger Button */}
            <button
                className="md:hidden p-4 focus:outline-none"
                onClick={toggleSidebar}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div className='absolute top left-0 z-40'>
                <IoMdClose  className='font-medium size-6' onClick={closeSidebar}/>
                </div>
            )}

            {/* Sidebar */}
            <div className={`fixed h-svh w-72 bg-main-color flex flex-col justify-between overflow-y-hidden transition-transform transform 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <img src={logo} alt="logo" className='py-4 px-7' />
                
                <div className="button-groups px-4 flex flex-col gap-6 items-start justify-start">
                <Link to='/dashboard' className={`rounded-md py-4 px-2.5 w-full border-b border-black ${isActive('/dashboard') ? 'bg-white' : ''}`} onClick={closeSidebar}>
                        <div className="flex gap-2.5">
                            <LiaHomeSolid className="size-6 font-medium" />
                            <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Dashboard</p>
                        </div>
                    </Link>

                    <Link to='/complaint' className={`rounded-md py-4 px-2.5 w-full border-b border-black ${isActive('/complaint') ? 'bg-white' : ''}`} onClick={closeSidebar}>
                        <div className="flex gap-2.5">
                            <img src={chatAdmin} alt="icons" className='w-6 h-6' />
                            <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Complaint</p>
                        </div>
                    </Link>

                    <Link to='/chat-user' className={`rounded-md py-4 px-2.5 w-full border-b border-black ${isActive('/chat-user') ? 'bg-white' : ''}`} onClick={closeSidebar}>
                        <div className="flex gap-2.5">
                            <img src={chatAdmin} alt="icons" className='w-6 h-6' />
                            <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">ChatPage</p>
                        </div>
                    </Link>

                    <Link to='/category' className={`rounded-md py-4 px-2.5 w-full border-b border-black ${isActive('/category') ? 'bg-white' : ''}`} onClick={closeSidebar}>
                        <div className="flex gap-2.5">
                            <TbFolderCog className="size-6 font-medium" />
                            <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Kategori</p>
                        </div>
                    </Link>

                    <Link to='/news' className={`rounded-md py-4 px-2.5 w-full border-b border-black ${isActive('/news') ? 'bg-white' : ''}`} onClick={closeSidebar}>
                        <div className="flex gap-2.5">
                            <LuNewspaper className="size-6 font-medium" />
                            <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Berita</p>
                        </div>
                    </Link>

                    <Link to='/' className="rounded-md py-4 px-2.5 w-full border-b border-black" >
                        <div className="flex gap-2.5">
                            <IoLogOutOutline className='size-6' />
                            <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Keluar</p>
                        </div>
                    </Link>
                </div>
                <img src={menara} alt="menara" className='w-[250px] h-[250px] flex align-bottom origin-top-left rotate-[18.34deg]' />
            </div>
        </div>
    )
}