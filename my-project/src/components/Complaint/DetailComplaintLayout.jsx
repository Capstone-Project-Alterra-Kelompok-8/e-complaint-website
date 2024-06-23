import HeaderLayout from "../Header/HeaderLayout";
import SidebarLayout from "../Header/SidebarLayout";
import ProsesAduan from "./ProsesAduan";
import DiskusiAduan from "./DiskusiAduan";
import Content from "./Content";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailComplaintLayout = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    fetchComplaintDetails();
    fetchComplaintDiscussions();
  }, [id]);

  const fetchComplaintDetails = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        `https://capstone-dev.mdrizki.my.id/api/v1/complaints/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComplaint(response.data.data);
      setLoading(false);
      console.log("Fetched complaint:", response.data.data);
    } catch (error) {
      console.error("Error fetching complaint details:", error);
      setLoading(false);
    }
  };

  const fetchComplaintDiscussions = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        `https://capstone-dev.mdrizki.my.id/api/v1/complaints/${id}/discussions`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDiscussions(response.data.data);
      setLoading(false);
      console.log("Fetched discussions:", response.data.data);
    } catch (error) {
      console.error("Error fetching discussions:", error);
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    // Set deskripsi berdasarkan opsi dropdown yang dipilih
    switch (e.target.value) {
      case "pending":
        setTextInput("Aduan anda akan segera diperiksa");
        break;
      case "verifikasi":
        setTextInput("Aduan anda telah terverifikasi");
        break;
      case "onprogress":
        setTextInput("Aduan anda sedang diproses");
        break;
      case "selesai":
        setTextInput("Aduan anda telah selesai");
        break;
      case "ditolak":
        setTextInput("Aduan anda ditolak");
        break;
      default:
        setTextInput("");
        break;
    }
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  // Menampilkan loading spinner atau teks saat data masih dimuat
  if (loading) {
    return <p>Loading...</p>;
  }

  // Menampilkan pesan jika tidak ada data complaint yang ditemukan
  if (!complaint) {
    return <p>Complaint not found.</p>;
  }

  return (
    <section className="flex w-full flex-col">
      <HeaderLayout />
      <SidebarLayout />
      <div className="min-h-[80dvh] max-h-max overflow-y-auto bg-light-2">
        <main className="lg:ml-80 py-3 pb-10 px-2 lg:pr-7">
          <h1 className="font-poppins font-medium text-3xl mt-4">
            Kelola Complaint / Detail
          </h1>

          {/* Panel */}
          <section className="flex w-full flex-col">
            {/* Panel */}
            <section className="flex md:flex-row flex-col gap-3 mt-5 w-full">
              <div className="font-poppins bg-[#E6E0E9] rounded-lg px-4 py-1 pr-20">
                <p>Nomor Aduan</p>
                <p>{complaint.id}</p> {/* Pastikan complaint tidak null */}
              </div>
              <div className="font-poppins bg-white border border-gray-300 rounded-lg px-4 py-2 flex justify-center items-center">
                <button className="text-main-darker" onClick={handleOpenModal}>
                  {complaint.status}
                </button>
              </div>
              <button className="bg-[#EA1212] text-white py-2 px-6 rounded-lg">
                Hapus
              </button>
            </section>

            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white p-8 rounded-lg w-[500px]">
                  <h2 className="text-xl font-semibold mb-4">Input Progress</h2>
                  <div className="mb-4">
                    <label htmlFor="progress" className="block mb-1">
                      Progress
                    </label>
                    <select
                      id="progress"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      className="w-full border border-gray-300 rounded p-2"
                    >
                      <option value="pending">Pending</option>
                      <option value="verifikasi">Verifikasi</option>
                      <option value="onprogress">On Progress</option>
                      <option value="selesai">Selesai</option>
                      <option value="ditolak">Ditolak</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      value={textInput}
                      onChange={handleTextInputChange}
                      className="w-full border border-gray-300 rounded p-2"
                      placeholder="Enter description..."
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={handleCloseModal}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Content */}
          <section className="flex flex-col lg:flex-row mt-16 w-full gap-4">
            <Content complaint={complaint} />
          </section>

          {/* Diskusi & Progress */}
          <section className="flex flex-col lg:flex-row gap-4 mt-6 w-full">
            <ProsesAduan />
            <DiskusiAduan discussions={discussions} complaint={complaint} />
          </section>
        </main>
      </div>
    </section>
  );
};

export default DetailComplaintLayout;
