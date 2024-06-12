export default function DetailCardNews() {
    return (
        <div className="px-6 py-5 bg-neutral-50 rounded-2xl flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
                <img className="relative rounded-lg shadow" src="https://via.placeholder.com/944x294" />
            </div>
            <div className=" flex-col justify-start items-start gap-2.5 flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-center text-black text-base font-bold font-poppins leading-none">Parkir Liar</div>
                    <div className=" text-stone-950 text-base font-normal font-poppins leading-none">KeluhProv.com, Infrastruktur — Dinas Perhubungan (Dishub) Tangerang bersama dengan Satuan Polisi Pamong Praja (Satpol PP) menggelar operasi penertiban parkir liar di sejumlah titik strategis di Tangerang. Operasi yang berlangsung sejak pagi hari ini menargetkan area-area yang sering digunakan sebagai tempat parkir ilegal, yang kerap menimbulkan kemacetan dan mengganggu kenyamanan pengguna jalan.<br /><br />Dalam operasi yang dilakukan di kawasan Pasar Lama Tangerang, Pasar Cipadu dan Pasar Modern BSD City petugas berhasil menertibkan puluhan kendaraan yang parkir sembarangan. Kendaraan-kendaraan tersebut meliputi mobil pribadi, sepeda motor, hingga angkutan umum yang tidak mematuhi aturan parkir. Selain itu, beberapa trotoar yang seharusnya menjadi jalur pejalan kaki juga ditemukan dipenuhi kendaraan yang diparkir secara tidak sah.<br /><br />Kepala Dinas Perhubungan Tangerang, Budi Setiawan, menjelaskan bahwa operasi ini merupakan bagian dari upaya pemerintah untuk menegakkan peraturan daerah mengenai parkir. Penertiban ini bertujuan untuk mengurangi kemacetan dan memberikan rasa nyaman serta aman bagi pengguna jalan. Kami juga ingin mengembalikan fungsi trotoar sebagai hak pejalan kaki, ujar Budi Setiawan.</div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="text-center text-gray-400 text-xs font-normal font-montserrat leading-none">Admin</div>
                    <div className="text-center text-gray-400 text-xs font-normal font-montserrat leading-none">24 Mei 2024</div>
                </div>
            </div>
        </div>
    )
}