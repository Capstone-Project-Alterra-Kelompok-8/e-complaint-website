export default function DetailCardNews({ detailNews }) {
    if (!detailNews) { // Jika detail berita tidak ada
        return <div>Berita tidak ditemukan.</div>; // Menampilkan pesan berita tidak ditemukan
    }

    return (
        <div className="px-6 py-5 bg-neutral-50 rounded-2xl flex-col justify-start items-start gap-5 inline-flex lg:w-6/12 mb-5">
            <div className="flex-col justify-start items-start gap-2.5 flex">
                <img className="rounded-lg shadow" src={`https://storage.googleapis.com/e-complaint-assets/${detailNews.files && detailNews.files.length > 0 ? detailNews.files[0].path : "default.jpg"}`} alt={detailNews.title} />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-center text-black text-base font-bold font-poppins leading-none">{detailNews.title}</div>
                    <div className="text-stone-950 text-base font-normal font-poppins leading-none">{detailNews.content}</div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="text-center text-gray-400 text-xs font-normal font-montserrat leading-none">Admin</div>
                    <div className="text-center text-gray-400 text-xs font-normal font-montserrat leading-none">{new Date(detailNews.createdAt).toLocaleDateString()}</div>
                </div>
            </div>
        </div>
    );
}
