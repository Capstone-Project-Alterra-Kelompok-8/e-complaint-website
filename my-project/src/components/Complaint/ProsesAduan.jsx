import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ProsesAduan = ({ complaintId }) => {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaintProcesses = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(
          `https://capstone-dev.mdrizki.my.id/api/v1/complaints/${complaintId}/processes`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const sortedProcesses = response.data.data.sort((a, b) => {
          // Urutkan berdasarkan waktu terbaru ke terlama
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
        setProcesses(sortedProcesses);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch complaint processes.");
        setLoading(false);
      }
    };

    fetchComplaintProcesses();
  }, [complaintId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (processes.length === 0) {
    return <p>No processes found for this complaint.</p>;
  }

  // Ambil proses dengan status terakhir yang sesuai urutan
  const getLastProcess = () => {
    // Ambil proses pertama (terbaru setelah diurutkan)
    const lastProcess = processes[0];

    // Jika status terakhir adalah "Selesai" atau "Ditolak", ambil proses ini
    if (lastProcess.status === "Selesai" || lastProcess.status === "Ditolak") {
      return lastProcess;
    }

    // Cari proses lainnya yang sesuai urutan
    // Mulai dari "On Progress", "Verifikasi", dan terakhir "Pending"
    const statusOrder = ["On Progress", "Verifikasi", "Pending"];
    for (let i = 0; i < statusOrder.length; i++) {
      const process = processes.find((p) => p.status === statusOrder[i]);
      if (process) {
        return process;
      }
    }

    // Jika tidak ditemukan, kembalikan proses pertama (seharusnya tidak terjadi)
    return lastProcess;
  };

  const currentStatus = getLastProcess();

  const statusColorMap = {
    Pending: "text-gray-500",
    Verifikasi: "text-blue-500",
    "On Progress": "text-yellow-500",
    Selesai: "text-green-500",
    Ditolak: "text-red-500",
  };

  const iconColorMap = {
    Pending: "bg-gray-500",
    Verifikasi: "bg-blue-500",
    "On Progress": "bg-yellow-500",
    Selesai: "bg-green-500",
    Ditolak: "bg-red-500",
  };

  return (
    <div className="bg-white w-full rounded-2xl py-4 px-5 flex flex-col gap-4">
      <h5 className="font-poppins font-semibold text-2xl">Proses Aduan</h5>
      <section className="flex flex-col">
        <div className="bg-main-color p-4 rounded-md text-white">
          <p>
            No Aduan: <span>{complaintId}</span>
          </p>
        </div>
      </section>
      <div className="w-full flex flex-col">
        {currentStatus ? (
          <div className="flex w-full text-xl flex-col border-b border-gray-200 py-2">
            <div className="flex items-center">
              <span
                className={`h-4 w-4 mr-2 rounded-full ${
                  iconColorMap[currentStatus.status]
                }`}
              ></span>
              <h4
                className={`font-semibold text-lg ${
                  statusColorMap[currentStatus.status]
                }`}
              >
                {currentStatus.status}
              </h4>
            </div>
            <p className="text-gray-500 text-lg">{currentStatus.updated_at}</p>
            <h5 className="font-semibold">
              {currentStatus.admin.name || currentStatus.admin.email}
            </h5>
            <p className="text-gray-700 text-lg">{currentStatus.message}</p>
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

ProsesAduan.propTypes = {
  complaintId: PropTypes.string.isRequired,
};

export default ProsesAduan;
