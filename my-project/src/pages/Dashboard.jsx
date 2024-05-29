import React from "react";

export const Dashboard = () => {
return (
<>
    <div className="relative w-[250px] h-[169px] bg-yellow-400 rounded-[10px] overflow-hidden">
        <div
            className="absolute top-[75px] left-[7px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#1a1a1a] text-[40px] tracking-[0] leading-[normal]">
            2175
        </div>
        <div
            className="absolute top-[134px] left-[7px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#1a1a1a] text-[18px] tracking-[0] leading-[normal]">
            Laporan Diterima
        </div>
        <img className="absolute w-[147px] h-[134px] top-0 left-[103px]" alt="Batik"
            src="../../public/awan-akatsuki.png" />
        <img className="absolute w-[26px] h-[26px] top-[40px] left-[7px]" alt="Laporan diterima"
            src="../../public/laporan diterima 1.svg" />
    </div>

    <div className="relative w-[250px] h-[169px] bg-yellow-400 rounded-[10px] overflow-hidden">
        <div
            className="absolute top-[75px] left-[7px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#1a1a1a] text-[40px] tracking-[0] leading-[normal]">
            2101
        </div>
        <div
            className="absolute top-[134px] left-[7px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#1a1a1a] text-[18px] tracking-[0] leading-[normal]">
            Terverifikasi
        </div>
        <img className="absolute w-[147px] h-[134px] top-0 left-[103px]" alt="Batik" src="../../public/awan-akatsuki.png" />
        <img className="absolute w-[27px] h-[24px] top-[42px] left-[10px]" alt="Vector" src="../../public/laporan diterima 1.svg" />
    </div>
</>
);
};
