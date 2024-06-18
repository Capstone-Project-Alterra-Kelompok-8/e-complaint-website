import React from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'primereact/skeleton';

export default function DetailCardNews() {
  const detailNews = useSelector((state) => state.news.detailNews); 
  if (!detailNews) { // Jika detailNews belum ada (masih loading)
    return (
      <div className="px-6 py-5 bg-neutral-50 rounded-2xl flex-col justify-start items-start gap-5 inline-flex lg:w-6/12 mb-5">
        <div className="flex-col justify-start items-start gap-2.5 flex">
          <Skeleton shape="rectangle" width="100%" height="294px" className="rounded-lg shadow" />
        </div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <Skeleton width="60%" height="2rem" />
            <Skeleton width="100%" height="1.5rem" />
          </div>
          <div className="flex justify-between items-center w-full">
            <Skeleton width="20%" height="1rem" />
            <Skeleton width="20%" height="1rem" />
          </div>
        </div>
      </div>
    ); // Menampilkan skeleton saat data masih di-fetch
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
          <div className="text-center text-gray-400 text-xs font-normal font-montserrat leading-none">{detailNews.admin.name}</div> 
          <div className="text-center text-gray-400 text-xs font-normal font-montserrat leading-none">{detailNews.updated_at}</div>
        </div>
      </div>
    </div>
  );
}
