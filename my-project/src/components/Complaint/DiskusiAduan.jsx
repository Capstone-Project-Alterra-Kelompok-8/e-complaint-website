import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import iconGemeni from "../../assets/icon.svg";
import Hapus from "../../assets/delete_24px.svg";

const MySwal = withReactContent(Swal);

const DiskusiAduan = ({ complaint, discussions }) => {
  const [recommendation, setRecommendation] = useState("");
  const [textInput, setTextInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetchingRecommendation, setIsFetchingRecommendation] =
    useState(false);

  const handleDeleteDiscussion = (id) => {
    MySwal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = sessionStorage.getItem("token");
          await axios.delete(
            `https://capstone-dev.mdrizki.my.id/api/v1/complaints/${complaint.id}/discussions/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const updatedDiscussions = discussions.filter(
            (discussion) => discussion.id !== id
          );
          setNewDiscussion(null);
          setTextInput("");
          MySwal.fire("Terhapus!", "Diskusi telah dihapus.", "success");
        } catch (error) {
          console.error("Error deleting discussion:", error);
          MySwal.fire("Gagal!", "Gagal menghapus diskusi.", "error");
        }
      }
    });
  };

  const fetchRecommendation = async () => {
    setIsFetchingRecommendation(true);
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        `https://capstone-dev.mdrizki.my.id/api/v1/complaints/${complaint.id}/discussions/get-recommendation`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRecommendation(response.data.data.answer);
      setTextInput(response.data.data.answer);
      setIsFetchingRecommendation(false);
      console.log("Fetched recommendation:", response.data.data);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setIsFetchingRecommendation(false);
    }
  };

  const postDiscussion = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `https://capstone-dev.mdrizki.my.id/api/v1/complaints/${complaint.id}/discussions`,
        {
          comment: textInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewDiscussion(response.data.data);
      setTextInput("");
      setIsSubmitting(false);
      console.log("Posted discussion:", response.data.data);
    } catch (error) {
      console.error("Error posting discussion:", error);
      setIsSubmitting(false);
    }
  };

  const handleGetRecommendation = () => {
    fetchRecommendation();
  };

  const handlePostDiscussion = () => {
    postDiscussion();
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    if (newDiscussion) {
      MySwal.fire("Berhasil!", "Diskusi telah terkirim.", "success");
    }
  }, [newDiscussion]);

  return (
    <div className="bg-white w-full rounded-2xl py-4 px-5 flex flex-col gap-4">
      <h5 className="font-poppins font-semibold text-2xl">Diskusi Aduan</h5>
      <section className="flex flex-col">
        <div className="bg-main-color p-4">
          <p>
            No Aduan <span>{complaint.id}</span>
          </p>
        </div>
      </section>
      <div className="h-72 overflow-y-auto">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className={`border-b border-light-1 p-2 flex flex-col gap-3 ${
              discussion.user ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {discussion.user ? (
              <>
                <img
                  src={`https://storage.googleapis.com/e-complaint-assets/${discussion.user.profile_photo}`}
                  alt="User avatar"
                  className="rounded-full ml-4"
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold">{discussion.user.name}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        {discussion.update_at}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteDiscussion(discussion.id)}
                      className="text-red-500 flex items-center"
                    >
                      <img src={Hapus} alt="" className="w-4 h-4 mr-1" /> Hapus
                    </button>
                  </div>
                  <p>{discussion.comment}</p>
                </div>
              </>
            ) : (
              <>
                <img
                  src={`https://storage.googleapis.com/e-complaint-assets/${discussion.admin.profile_photo}`}
                  alt="Admin avatar"
                  className="rounded-full mr-4"
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleDeleteDiscussion(discussion.id)}
                      className="text-red-500 flex items-center"
                    >
                      <img src={Hapus} alt="" className="w-4 h-4 mr-1" /> Hapus
                    </button>
                    <div>
                      <span className="text-gray-500 text-sm">
                        {discussion.update_at}
                      </span>
                      <span className="font-bold ml-2">
                        {discussion.admin.name}
                      </span>
                    </div>
                  </div>
                  <p className="text-right">{discussion.comment}</p>
                </div>
              </>
            )}
          </div>
        ))}
        {newDiscussion && (
          <div className="border-b border-light-1 p-2 flex flex-col gap-3 md:flex-row-reverse">
            <img
              src={`https://storage.googleapis.com/e-complaint-assets/${newDiscussion.admin.profile_photo}`}
              alt="Admin avatar"
              className="rounded-full mr-4"
              style={{ width: "40px", height: "40px" }}
            />
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDeleteDiscussion(newDiscussion.id)}
                  className="text-red-500 flex items-center"
                >
                  <img src={Hapus} alt="" className="w-4 h-4 mr-1" /> Hapus
                </button>
                <div>
                  <span className="text-gray-500 text-sm">
                    {newDiscussion.update_at}
                  </span>
                  <span className="font-bold ml-2">
                    {newDiscussion.admin.name}
                  </span>
                </div>
              </div>
              <p className="text-right">{newDiscussion.comment}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col w-full">
        <button
          className={`flex w-full justify-center items-center rounded border border-dark-4 py-2 px-5 gap-1 ${
            isFetchingRecommendation ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleGetRecommendation}
          disabled={isFetchingRecommendation}
        >
          <img src={iconGemeni} alt="icon" />
          <p className="bg-gradient-to-r from-[#4796E3] to-[#C96676] text-transparent bg-clip-text">
            {isFetchingRecommendation
              ? "Harap tunggu..."
              : "Get Rekomendasi AI"}
          </p>
        </button>
        <textarea
          className="w-full mt-5 border border-gray-300 rounded p-2 min-h-28"
          value={textInput}
          onChange={handleTextInputChange}
          disabled={isSubmitting}
          cols="30"
        ></textarea>
        <button
          className={`text-info-3 bg-white border border-info-3 px-6 py-2.5 rounded shadow mt-3 font-medium ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePostDiscussion}
          disabled={isSubmitting}
        >
          Kirim Diskusi
        </button>
      </div>
    </div>
  );
};

export default DiskusiAduan;
