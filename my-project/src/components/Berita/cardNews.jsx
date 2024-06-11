export default function CardNews() {
    return (
        <div className="card w-[486px] px-5 py-8 bg-slate-50 rounded-2xl gap-5 flex-col shadow inline-flex">
            <img className="w-full h-48 relative rounded-lg shadow" src="https://via.placeholder.com/446x189" />
            <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-center text-black text-3xl font-medium font-poppins leading-tight tracking-tight">Parkir Liar</div>
                <div className="text-justify text-black text-base font-medium font-montserrat leading-7">Parkir liar mengganggu ketertiban lalu lintas dan mengurangi kenyamanan serta keamanan bagi pengguna jalan lainnya.</div>
            </div>
            <div className="flex gap-6">
                <button className="bg-info-3 text-white px-6 py-2.5 rounded shadow ">Detail</button>
                <button className="bg-error-3 text-white px-6 py-2.5 rounded shadow ">Hapus</button>
            </div>
        </div>
    )
}