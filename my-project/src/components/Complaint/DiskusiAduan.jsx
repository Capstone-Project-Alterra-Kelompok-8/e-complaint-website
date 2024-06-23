import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import iconGemeni from "../../assets/icon.svg";
import Hapus from "../../assets/delete_24px.svg";

const MySwal = withReactContent(Swal);

const DiskusiAduan = () => {
  // Data dummy untuk pengujian
  const discussions = [
    {
      id: 1,
      author: "Anonymouse",
      time: "Kamis, 09 Mei 2024 - 04:27 WIB",
      content:
        "Betul, kemarin saya lewat situ. Masa sampai sekarang belum ditangani sih.",
    },
    {
      id: 2,
      author: "Anonymouse",
      time: "Kamis, 09 Mei 2024 - 04:27 WIB",
      content:
        "Betul, kemarin saya lewat situ. Masa sampai sekarang belum ditangani sih.",
    },
    {
      id: 3,
      author: "Anonymouse",
      time: "Kamis, 09 Mei 2024 - 04:27 WIB",
      content:
        "Betul, kemarin saya lewat situ. Masa sampai sekarang belum ditangani sih.",
    },
    {
      id: 4,
      author: "Anonymouse",
      time: "Kamis, 09 Mei 2024 - 04:27 WIB",
      content:
        "Betul, kemarin saya lewat situ. Masa sampai sekarang belum ditangani sih.",
    },
  ];

  // Function untuk menampilkan SweetAlert2 konfirmasi penghapusan
  const handleDeleteDiscussion = (id) => {
    MySwal.fire({
      title: "Anda yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lakukan penghapusan di sini (simulasi penghapusan untuk contoh)
        // Anda dapat menambahkan logika penghapusan sesuai dengan aplikasi Anda
        console.log("Menghapus diskusi dengan ID:", id);

        // Tampilkan pesan SweetAlert2 sukses jika diperlukan
        MySwal.fire("Terhapus!", "Diskusi telah dihapus.", "success");
      }
    });
  };

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
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="border-b border-light-1 p-2 flex flex-col gap-3"
          >
            <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between">
              <div className="flex flex-row gap-2 items-center justify-between">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h4>{discussion.author}</h4>
                <p>{discussion.time}</p>
              </div>
              <button
                className="flex text-error-3 items-center"
                onClick={() => handleDeleteDiscussion(discussion.id)}
              >
                <img src={Hapus} alt="" className="w-6 h-6 mr-1" />
                <span className="font-poppins font-medium">Hapus</span>
              </button>
            </div>
            <p>{discussion.content}</p>
          </div>
        ))}
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
