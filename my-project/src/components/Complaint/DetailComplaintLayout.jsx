import HeaderLayout from '../Header/HeaderLayout';
import SidebarLayout from '../Header/SidebarLayout';
import Hapus from '../../assets/delete_24px.svg'
import iconGemeni from '../../assets/icon.svg'

const DetailComplaintLayout = () => {
    return (
        <section className="flex w-full flex-col">
            <HeaderLayout />
            <SidebarLayout />
            <div className="min-h-[80dvh] max-h-max overflow-y-auto bg-light-2">
                <main className="lg:ml-80 py-3 pb-10 px-2 lg:pr-7">
                    <h1 className="font-poppins font-medium text-3xl mt-4">Kelola Complaint / Detail</h1>

                    {/* Panel */}
                    <section className="flex md:flex-row flex-col gap-3 mt-5 w-full">
                        <div className="font-poppins bg-[#E6E0E9] rounded-lg px-4 py-1 pr-20">
                            <p>Nomor Aduan</p>
                            <p>G5102</p>
                        </div>
                        <div className="font-poppins bg-white border border-gray-300 rounded-lg px-4 py- flex justify-center items-center">
                            <p className='text-main-darker'>On Progress</p>
                        </div>
                        <button className='bg-[#EA1212] text-white py-2 px-6 rounded-lg'>Hapus</button>
                    </section>

                    {/* Content */}
                    <section className="flex flex-col lg:flex-row mt-16 w-full gap-4">
                        <div className="lg:w-[500px] h-[500px] md:w-full bg-[#E6E0E9] p-2 rounded-lg drop-shadow-lg">
                            <img
                                className='w-full h-full rounded-lg -z-50'
                                src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <div className='flex flex-col gap-2 w-full h-auto lg:w-[80%] lg:h-[500px]'>
                            <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg">
                                <h6>Pengadu</h6>
                                <p>Anonymous</p>
                            </section>
                            <section className='w-full'>
                                <div className="w-full flex flex-col lg:flex-row gap-2">
                                    <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
                                        <h6>Tanggal Aduan</h6>
                                        <p>G5102</p>
                                    </section>
                                    <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
                                        <h6>Lokasi</h6>
                                        <p>Kab Banten</p>
                                    </section>
                                </div>
                            </section>
                            <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
                                <h6>Alamat</h6>
                                <p>Detail Aduan</p>
                            </section>
                            <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full h-full">
                                <h6>Aduan</h6>
                                <p>Detail Aduan</p>
                            </section>
                        </div>
                    </section>

                    {/* Diskusi & Progress */}
                    <section className='flex flex-col lg:flex-row gap-4 mt-6 w-full'>
                        <div className="bg-white w-full rounded-2xl py-4 px-5 flex flex-col gap-4 h-72">
                            <h5 className="font-poppins font-semibold text-2xl">Proses Aduan</h5>
                            <section className="flex flex-col">
                                <div className='bg-main-color p-4'><p>No Aduan <span>G5102</span></p></div>
                            </section>
                            <div className='w-full flex flex-col'>
                                {/* <div className='text-dark-3 flex justify-center w-full text-xl'>
                                    <p>Belum ada Proses</p>
                                </div> */}

                                <div className='flex w-full text-xl flex-col'>
                                    <h4>Tidak Layak</h4>
                                    <p>Waktu</p>
                                    <h5>Admin</h5>
                                    <p>Deskripsi</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full rounded-2xl py-4 px-5 flex flex-col gap-4">
                            <h5 className="font-poppins font-semibold text-2xl">Diskusi Aduan</h5>
                            <section className="flex flex-col">
                                <div className='bg-main-color p-4'><p>No Aduan <span>G5102</span></p></div>
                            </section>
                            <div className='h-72 overflow-y-auto'>
                                <div className='border-b border-light-1 p-2 flex flex-col gap-3'>
                                    <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
                                        <div className='flex flex-row gap-2 items-center justify-between'>
                                            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            <h4>Anonymouse</h4>
                                            <p>Waktu</p>
                                        </div>
                                        <div className='flex text-error-3'>
                                            <img src={Hapus} alt="" />
                                            <p className='font-poppins font-medium'>Hapus</p>
                                        </div>
                                    </div>
                                    <p>betul, kemarin saya lewat situ. masa sampai sekarang belum di tangani sih.</p>
                                </div>
                                <div className='border-b border-light-1 p-2 flex flex-col gap-3'>
                                    <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
                                        <div className='flex flex-row gap-2 items-center justify-between'>
                                            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            <h4>Anonymouse</h4>
                                            <p>Waktu</p>
                                        </div>
                                        <div className='flex text-error-3'>
                                            <img src={Hapus} alt="" />
                                            <p className='font-poppins font-medium'>Hapus</p>
                                        </div>
                                    </div>
                                    <p>betul, kemarin saya lewat situ. masa sampai sekarang belum di tangani sih.</p>
                                </div>
                                <div className='border-b border-light-1 p-2 flex flex-col gap-3'>
                                    <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
                                        <div className='flex flex-row gap-2 items-center justify-between'>
                                            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            <h4>Anonymouse</h4>
                                            <p>Waktu</p>
                                        </div>
                                        <div className='flex text-error-3'>
                                            <img src={Hapus} alt="" />
                                            <p className='font-poppins font-medium'>Hapus</p>
                                        </div>
                                    </div>
                                    <p>betul, kemarin saya lewat situ. masa sampai sekarang belum di tangani sih.</p>
                                </div>
                                <div className='border-b border-light-1 p-2 flex flex-col gap-3'>
                                    <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
                                        <div className='flex flex-row gap-2 items-center justify-between'>
                                            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            <h4>Anonymouse</h4>
                                            <p>Waktu</p>
                                        </div>
                                        <div className='flex text-error-3'>
                                            <img src={Hapus} alt="" />
                                            <p className='font-poppins font-medium'>Hapus</p>
                                        </div>
                                    </div>
                                    <p>betul, kemarin saya lewat situ. masa sampai sekarang belum di tangani sih.</p>
                                </div>
                                <div className='border-b border-light-1 p-2 flex flex-col gap-3'>
                                    <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
                                        <div className='flex flex-row gap-2 items-center justify-between'>
                                            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            <h4>Anonymouse</h4>
                                            <p>Waktu</p>
                                        </div>
                                        <div className='flex text-error-3'>
                                            <img src={Hapus} alt="" />
                                            <p className='font-poppins font-medium'>Hapus</p>
                                        </div>
                                    </div>
                                    <p>betul, kemarin saya lewat situ. masa sampai sekarang belum di tangani sih.</p>
                                </div>
                            </div>


                            <div className='flex flex-col w-full'>
                                <button className='flex w-full justify-center items-center rounded border border-dark-4 py-2 px-5 gap-1'>
                                    <img src={iconGemeni} alt="icon" />
                                    <p className="bg-gradient-to-r from-[#4796E3] to-[#C96676] text-transparent bg-clip-text">
                                        Get Rekomendasi AI
                                    </p>
                                </button>
                                <textarea className='w-full mt-5 border border-gray-300 rounded p-2 min-h-28' placeholder='Ketik disini' name="" id="" cols="30"></textarea>
                                <button className='text-info-3 bg-white border border-info-3 px-6 py-2.5 rounded shadow mt-3 font-medium'>Kirim Diskusi</button>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </section>
    )
}

export default DetailComplaintLayout