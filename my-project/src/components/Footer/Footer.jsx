import { FaInstagram, FaFacebook, FaWhatsapp, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import logo3 from '../../assets/logo-3.png';
import logo2 from "../../assets/logo-2.png";
import redDots from '../../assets/red-dots.png';

function Footer() {
    return (
        <div className="bg-main-color w-full flex flex-col md:flex-row gap-12 md:gap-44 relative">
            <div className="flex flex-col items-start">
                <div className="w-52 h-40 bg-neutral-50 rounded-r-[70px] flex justify-start ps-2 items-center">
                    <img src={logo2} alt="logo" className="absolute" />
                </div>
                <div className="justify-start mt-6 ml-0 md:ml-5 mb-12">
                    <h1 className="text-neutral-900 text-3xl font-bold font-poppins mb-6">Keluh Prov</h1>
                    <p className="w-full md:w-96 text-neutral-900 text-xl font-poppins leading-loose">Keluh Provinsi adalah aplikasi/website aduan masyarakat kepada pemerintah terkait masalah yang ada dimasyarakat, seperti layanan publik, fasilitas publik, dan lainnya</p>
                </div>
            </div>

            <div className="mt-0 md:mt-28">
                <h1 className="text-neutral-900 text-3xl font-bold font-poppins mb-5">Kanal Aduan</h1>
                <div className="flex items-center mb-5 font-medium gap-2">
                    <FaInstagram className="text-neutral-900 font-bold text-2xl text-[41px]" />
                    <a href="#" className="text-center text-neutral-900 text-xl font-medium font-poppins leading-tight tracking-tight">Keluh Provinsi</a>
                </div>
                <div className="flex items-center mb-5 font-medium gap-2">
                    <FaFacebook className="text-neutral-900 font-bold text-2xl text-[41px]" />
                    <a href="#" className="text-center text-neutral-900 text-xl font-medium font-poppins leading-tight tracking-tight">@keluhprovinsi</a>
                </div>
                <div className="flex items-center mb-5 font-medium gap-2">
                    <FaXTwitter className="text-neutral-900 font-bold text-2xl text-[41px]" />
                    <a href="#" className="text-center text-neutral-900 text-xl font-medium font-poppins leading-tight tracking-tight">@keluh_provinsi</a>
                </div>
                <div className="flex items-center mb-5 font-medium gap-2">
                    <FaWhatsapp className="text-neutral-900 font-bold text-2xl text-[41px]" />
                    <a href="#" className="text-center text-neutral-900 text-xl font-medium font-poppins leading-tight tracking-tight">0813-1412-4242</a>
                </div>
            </div>

            <div className="mt-0 md:mt-28">
                <h1 className="text-neutral-900 text-3xl font-bold font-poppins mb-5">Kontak Kami</h1>
                <div className="flex items-center mb-5 gap-2">
                    <img src={logo3} alt="logo" />
                    <div className="text-center text-neutral-900 text-xl font-medium font-poppins leading-tight tracking-tight">keluhprovinsi.go.id</div>
                </div>
                <div className="flex items-center mb-5 font-medium gap-5">
                    <FaHeadset className="text-neutral-900 font-bold text-3xl text-[41px]" />
                    <a href="#" className="text-center text-neutral-900 text-xl font-medium font-poppins leading-tight tracking-tight">0813-1412-4242</a>
                </div>
                <div className="flex items-center mb-5 font-medium gap-5">
                    <FaMapMarkerAlt className="text-neutral-900 font-bold text-3xl text-[41px]" />
                    <a href="#" className="text-neutral-900 text-xl font-medium font-poppins leading-tight tracking-tight">Jl. Garuda No.7, Ademsari, Semarang<br />Gula Jawa 12345</a>
                    <img src={redDots} alt="pattern" className='absolute right-0 bottom-0' />
                </div>
            </div>
        </div>

    )
}

export default Footer