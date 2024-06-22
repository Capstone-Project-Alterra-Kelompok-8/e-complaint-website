import React from "react";

const RiwayatAduan = ({ data }) => {
return (
<div className="bg-main-lighter p-4 rounded-lg shadow-md mt-8">
    <h2 className="text-xl font-bold mb-4">Riwayat Aduan</h2>
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
                {data.map((item, index) => (
                <tr key={index}>
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.date}</td>
                    <td className="py-3 px-4">
                        <span className="bg-light-4 text-black py-1 px-2 rounded-lg">
                            {item.category}
                        </span>
                    </td>
                    <td className="py-3 px-4">
                        <span className="bg-light-4 text-black py-1 px-2 rounded-lg">
                            {item.status}
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
