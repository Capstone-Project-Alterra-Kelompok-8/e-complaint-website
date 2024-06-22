import CardProgress from "./CardProgress";

const Progress = ({ progressData }) => {
  return (
    <div className="justify-center grid grid-cols-4 gap-4 pb-4">
      <CardProgress
        number={progressData.Pending}
        text="Laporan Diterima"
        icon="/images/laporan-diterima.svg"
        backgroundImage="/images/awan-akatsuki.png"
      />
      <CardProgress
        number={progressData.Verifikasi}
        text="Terverifikasi"
        icon="/images/terverifikasi.svg"
        backgroundImage="/images/awan-akatsuki.png"
      />
      <CardProgress
        number={progressData["On Progress"]}
        text="Sedang Diproses"
        icon="/images/detail-laporan.svg"
        backgroundImage="/images/awan-akatsuki.png"
      />
      <CardProgress
        number={progressData.Selesai}
        text="Laporan Selesai"
        icon="/images/laporan-selesai.svg"
        backgroundImage="/images/awan-akatsuki.png"
      />
    </div>
  );
};

export default Progress;
