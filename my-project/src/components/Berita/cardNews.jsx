export default function CardNews({ id, image, title, description }) {
    return (
        <div className="lg:w-[486px] h-[500px] px-5 py-8 bg-slate-50 rounded-2xl flex flex-col shadow">
            <img className="w-full h-48 rounded-lg shadow" src={image} alt={title} />
            <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-center text-black text-2xl font-medium font-poppins leading-tight tracking-tight mt-3">{title}</div>
                <div className="text-justify text-black text-base font-medium font-montserrat leading-7">
                    {description}
                </div>
            </div>
            <div className="flex gap-6 mt-auto">
                <button className="bg-info-3 text-white px-6 py-2.5 rounded shadow">Detail</button>
                <button className="bg-error-3 text-white px-6 py-2.5 rounded shadow">Hapus</button>
            </div>
        </div>
    );
}
