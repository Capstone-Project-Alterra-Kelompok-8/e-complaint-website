import iconGemeni from "../../assets/icon.svg";
import Hapus from "../../assets/delete_24px.svg";

const DiskusiAduan = () => {
  return (
    <div className="bg-white w-full rounded-2xl py-4 px-5 flex flex-col gap-4">
      <h5 className="font-poppins font-semibold text-2xl">Diskusi Aduan</h5>
      <section className="flex flex-col">
        <div className="bg-main-color p-4">
          <p>
            No Aduan <span>G5102</span>
          </p>
        </div>
      </section>
      <div className="h-72 overflow-y-auto">
        <div className="border-b border-light-1 p-2 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
            <div className="flex flex-row gap-2 items-center justify-between">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h4>Anonymouse</h4>
              <p>Waktu</p>
            </div>
            <div className="flex text-error-3">
              <img src={Hapus} alt="" />
              <p className="font-poppins font-medium">Hapus</p>
            </div>
          </div>
          <p>
            betul, kemarin saya lewat situ. masa sampai sekarang belum di
            tangani sih.
          </p>
        </div>
        <div className="border-b border-light-1 p-2 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
            <div className="flex flex-row gap-2 items-center justify-between">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h4>Anonymouse</h4>
              <p>Waktu</p>
            </div>
            <div className="flex text-error-3">
              <img src={Hapus} alt="" />
              <p className="font-poppins font-medium">Hapus</p>
            </div>
          </div>
          <p>
            betul, kemarin saya lewat situ. masa sampai sekarang belum di
            tangani sih.
          </p>
        </div>
        <div className="border-b border-light-1 p-2 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
            <div className="flex flex-row gap-2 items-center justify-between">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h4>Anonymouse</h4>
              <p>Waktu</p>
            </div>
            <div className="flex text-error-3">
              <img src={Hapus} alt="" />
              <p className="font-poppins font-medium">Hapus</p>
            </div>
          </div>
          <p>
            betul, kemarin saya lewat situ. masa sampai sekarang belum di
            tangani sih.
          </p>
        </div>
        <div className="border-b border-light-1 p-2 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
            <div className="flex flex-row gap-2 items-center justify-between">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h4>Anonymouse</h4>
              <p>Waktu</p>
            </div>
            <div className="flex text-error-3">
              <img src={Hapus} alt="" />
              <p className="font-poppins font-medium">Hapus</p>
            </div>
          </div>
          <p>
            betul, kemarin saya lewat situ. masa sampai sekarang belum di
            tangani sih.
          </p>
        </div>
        <div className="border-b border-light-1 p-2 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
            <div className="flex flex-row gap-2 items-center justify-between">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h4>Anonymouse</h4>
              <p>Waktu</p>
            </div>
            <div className="flex text-error-3">
              <img src={Hapus} alt="" />
              <p className="font-poppins font-medium">Hapus</p>
            </div>
          </div>
          <p>
            betul, kemarin saya lewat situ. masa sampai sekarang belum di
            tangani sih.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <button className="flex w-full justify-center items-center rounded border border-dark-4 py-2 px-5 gap-1">
          <img src={iconGemeni} alt="icon" />
          <p className="bg-gradient-to-r from-[#4796E3] to-[#C96676] text-transparent bg-clip-text">
            Get Rekomendasi AI
          </p>
        </button>
        <textarea
          className="w-full mt-5 border border-gray-300 rounded p-2 min-h-28"
          placeholder="Ketik disini"
          name=""
          id=""
          cols="30"
        ></textarea>
        <button className="text-info-3 bg-white border border-info-3 px-6 py-2.5 rounded shadow mt-3 font-medium">
          Kirim Diskusi
        </button>
      </div>
    </div>
  );
};

export default DiskusiAduan;
