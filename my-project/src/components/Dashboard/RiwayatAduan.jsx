import React from "react";

const RiwayatAduan = ({ data }) => {

  const sortedData = data
     .sort((a, b) => new Date(b.complaint.date) - new Date(a.complaint.date))
     .slice(0, 3);

return (
  <div className="bg-main-lighter p-4 rounded-lg shadow-md mt-8">
    <h2 className="text-xl font-bold mb-4">Riwayat Aduan Terbaru</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-main-color text-black">
          <tr>
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Nama</th>
            <th className="py-2 px-4">Tanggal</th>
            <th className="py-2 px-4">Kategori</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody className="bg-main-lighter text-black text-center">
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{item.user.name}</td>
              <td className="py-2 px-4">
                {new Date(item.complaint.date).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}{" "}
                {new Date(item.complaint.date).toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </td>
              <td className="py-3 px-4">
                <span className="bg-light-4 text-black py-1 px-2 rounded-lg">
                  {item.category.name}
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="bg-light-4 text-black py-1 px-2 rounded-lg">
                  {item.complaint.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default RiwayatAduan;
