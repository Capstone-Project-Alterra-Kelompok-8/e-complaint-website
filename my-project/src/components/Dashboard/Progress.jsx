import React from "react";
import CardProgress from "../components/CardProgress";
// import ChartTotalUsers from "../components/ChartTotalUsers";

const Progress = () => {
  return (
    <div className="flex flex-wrap justify-around p-4">
      <CardProgress
        number="2175"
        text="Laporan Diterima"
        icon="/images/laporan-diterima.svg"
        backgroundImage="/images/awan-akatsuki.png"
      />
      <CardProgress
        number="1020"
        text="Terverifikasi"
        icon="/images/terverifikasi.svg"
        backgroundImage="/images/awan-akatsuki.png"
      />
      <CardProgress
        number="875"
        text="Sedang Diproses"
        icon="/images/detail-laporan.svg"
        backgroundImage="/images/awan-akatsuki.png"
      />
      <CardProgress
        number="560"
        text="Laporan Selesai"
        icon="/images/laporan-selesai.svg"
        backgroundImage="/images/awan-akatsuki.png"
      />

      <div className="w-full mt-8">
        {/* <ChartTotalUsers /> */}
      </div>
    </div>
  );
};

export default Progress;
