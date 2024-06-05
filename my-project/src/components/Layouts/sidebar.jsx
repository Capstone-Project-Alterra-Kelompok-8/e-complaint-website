import logo from '../../assets/logo.png'
import { LiaHomeSolid } from "react-icons/lia"
import chatAdmin from '../../assets/icons/chatAdmin.svg'
import folder from '../../assets/icons/folders.svg'
import newspaper from '../../assets/icons/newspaper.svg'
import { IoLogOutOutline } from "react-icons/io5"
import menara from '../../assets/menara.png'

export default function Sidebar() {
    // untuk logic 
    return (
        <div className="h-svh w-72 bg-main-color flex flex-col justify-between overflow-y-hidden">
            <img src={logo} alt="logo" className='py-4 px-7' />
            <div className="button-groups px-4 flex flex-col gap-6 items-start justify-start">
                <button className='rounded-md bg-white py-4 px-2.5 w-full'>
                    <div className="flex gap-2.5">
                        <LiaHomeSolid className="size-6 font-medium" />
                        <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Dashboard</p>
                    </div>
                </button>

                <button className='rounded-md py-4 px-2.5 w-full border-b border-black'>
                    <div className="flex gap-2.5">
                        <img src={chatAdmin} alt="icons" className='w-6 h-6' />
                        <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Complaint</p>
                    </div>
                </button>

                <button className='rounded-md py-4 px-2.5 w-full border-b border-black'>
                    <div className="flex gap-2.5">
                        <img src={chatAdmin} alt="icons" className='w-6 h-6' />
                        <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">ChatPage</p>
                    </div>
                </button>

                <button className='rounded-md py-4 px-2.5 w-full border-b border-black'>
                    <div className="flex gap-2.5">
                        <img src={folder} alt="icons" className='w-6 h-6' />
                        <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Kategori</p>
                    </div>
                </button>

                <button className='rounded-md py-4 px-2.5 w-full border-b border-black'>
                    <div className="flex gap-2.5">
                        <img src={newspaper} alt="icons" className='w-6 h-6' />
                        <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Berita</p>
                    </div>
                </button>

                <button className='rounded-md py-4 px-2.5 w-full border-b border-black'>
                    <div className="flex gap-2.5">
                        <IoLogOutOutline className='size-6'/> 
                        <p className="text-black text-xl font-medium font-['Poppins'] leading-snug">Keluar</p>
                    </div>
                </button>
            </div>
            <img src={menara} alt="menara" className='w-[250px] h-[250px] flex align-bottom origin-top-left rotate-[18.34deg]' />
        </div>
    )
}