import Preview from './ButtonPreview.jsx';
import ButtonKembaliNews from './ButtonKembaliNews.jsx';
import ButtonSimpan from './ButtonSimpanNews.jsx';
import Image from '../../assets/dokumentasi.png';

export default function CreateNews() {
  return (
    <div className="h-[670px] bg-slate-100 flex flex-col pe-20 pl-24 pb-20 relative font-['poppins'] ">
      <div className="flex space-x-4 justify-start">
        <button type="submit" className="btn relative font-extrabold text-2xl py-4 px-8">
          Buat Berita
          {/* Pseudo-element untuk garis kuning di bagian bawah */}
          <span className="absolute bottom-0 left-0 w-full h-[5px] bg-yellow-500"></span>
        </button>
        <button type="submit" className="btn relative font-extrabold text-2xl py-4 px-8 group">
          Edit Berita
          {/* Pseudo-element untuk garis kuning saat hover */}
          <span className="absolute bottom-0 left-0 w-full h-[5px] bg-transparent group-hover:bg-yellow-500 transition-all duration-300"></span>
        </button>
      </div>

      <div className="flex flex-col bg-white mt-5 h-auto">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-start">
          {/* Bagian untuk input gambar */}
          <label className="relative w-2/4 flex flex-col items-center px-20 py-16 ml-5 mt-5 bg-white tracking-wide uppercase border border-red-500 cursor-pointer hover:bg-white hover:text-blue-500 text-blue-500 ease-linear transition-all duration-150">
            <img src={Image} alt="Upload" />

            <input type="file" className="hidden" />
          </label>

          {/* Bagian untuk input judul dan kategori */}
          <div className="flex flex-col w-2/4 p-4">
            <label className="text-lg" htmlFor="judul">
              Judul
            </label>
            <input type="text" id="title" placeholder="Type here" className="input input-bordered py-2 px-4 rounded border border-gray-300 w-full" />

            <label className="text-base mt-5" htmlFor="kategori">
              Kategori Berita
            </label>
            <select id="kategori" className="py-2 px-4 rounded border border-gray-300 w-full">
              <option value="">Pilih kategori Berita</option>
              <option value="infrastuktur">Infrastuktur</option>
              <option value="kesehatan">Kesehatan</option>
              <option value="pendidikan">Pendidikan</option>
              <option value="kependudukan">Kependudukan</option>
              <option value="keamanan">Keamanan</option>
            </select>
          </div>
        </div>

        {/* Bagian untuk textarea deskripsi */}
        <div className="w-full  mt-10 pl-5 pr-5">
          <label className=" ml-5" htmlFor="description">
            Isi Berita
          </label>
          <textarea id="description" placeholder="Type your description here" className="input input-bordered py-2 px-4 rounded border h-auto border-gray-300 w-full resize-y" />
        </div>
      </div>
      <div className=" pt-5 pl-5">
        <div className="pr-5 flex justify-between items-center">
          <Preview onClick={onclick} />
          <div className="flex space-x-2">
            <ButtonKembaliNews onClick={onclick} />
            <ButtonSimpan onClick={onclick} />
          </div>
        </div>
      </div>
    </div>
  );
}
