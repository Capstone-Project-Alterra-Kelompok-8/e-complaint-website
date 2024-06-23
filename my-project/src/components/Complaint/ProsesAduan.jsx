import React from "react";

const ProsesAduan = () => {
  // Data dummy untuk pengujian
  const aduan = {
    noAduan: "G5102",
    proses: [
      {
        status: "Pending",
        waktu: "Kamis, 09 Mei 2024 - 04:27 WIB",
        admin: "Admin",
        deskripsi: "Laporan Anda akan segera kami periksa.",
      },
      {
        status: "Verifikasi",
        waktu: "Kamis, 09 Mei 2024 - 04:27 WIB",
        admin: "Admin",
        deskripsi: "Laporan Anda akan segera kami periksa.",
      },
      {
        status: "On Progress",
        waktu: "Kamis, 09 Mei 2024 - 04:27 WIB",
        admin: "Admin",
        deskripsi: "Laporan Anda akan segera kami periksa.",
      },
      {
        status: "Selesai",
        waktu: "Kamis, 09 Mei 2024 - 04:27 WIB",
        admin: "Admin",
        deskripsi: "Laporan Anda akan segera kami periksa.",
      },
      {
        status: "Ditolak",
        waktu: "Kamis, 09 Mei 2024 - 04:27 WIB",
        admin: "Admin",
        deskripsi: "Laporan Anda ditolak karena tidak memenuhi syarat.",
      },
    ],
  };

  // Logika untuk menentukan status yang ditampilkan
  const currentStatus =
    aduan.proses.find((proses) => proses.status === "On Progress") ||
    aduan.proses.find((proses) => proses.status === "Verifikasi") ||
    aduan.proses.find((proses) => proses.status === "Pending") ||
    aduan.proses.find((proses) => proses.status === "Selesai") ||
    aduan.proses.find((proses) => proses.status === "Ditolak");

  const statusColorMap = {
    Pending: "text-gray-500",
    Verifikasi: "text-blue-500",
    "On Progress": "text-yellow-500",
    Selesai: "text-green-500",
    Ditolak: "text-red-500", // Warna merah untuk status "Ditolak"
  };

  const iconColorMap = {
    Pending: "bg-gray-500",
    Verifikasi: "bg-blue-500",
    "On Progress": "bg-yellow-500",
    Selesai: "bg-green-500",
    Ditolak: "bg-red-500", // Warna merah untuk status "Ditolak"
  };

  return (
    <div className="bg-white w-full rounded-2xl py-4 px-5 flex flex-col gap-4">
      <h5 className="font-poppins font-semibold text-2xl">Proses Aduan</h5>
      <section className="flex flex-col">
        <div className="bg-main-color p-4 rounded-md text-white">
          <p>
            No Aduan: <span>{aduan.noAduan}</span>
          </p>
        </div>
      </section>
      <div className="w-full flex flex-col">
        {currentStatus ? (
          <div className="flex w-full text-xl flex-col border-b border-gray-200 py-2">
            <div className="flex items-center">
              <span
                className={`h-5 w-5 mr-2 rounded-full ${
                  iconColorMap[currentStatus.status]
                }`}
              ></span>
              <h4
                className={`font-semibold ${
                  statusColorMap[currentStatus.status]
                }`}
              >
                {currentStatus.status}
              </h4>
            </div>
            <p className="text-gray-500">{currentStatus.waktu}</p>
            <h5 className="font-semibold">{currentStatus.admin}</h5>
            <p className="text-gray-700">{currentStatus.deskripsi}</p>
          </div>
        ) : (
          <div className="text-dark-3 flex justify-center w-full text-xl">
            <p>Belum ada Proses</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProsesAduan;
