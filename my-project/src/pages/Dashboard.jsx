import React, { useEffect, useState } from "react";
import Progress from "../components/Dashboard/Progress";
import HeaderLayout from "../components/Header/HeaderLayout";
import SidebarLayout from "../components/Header/SidebarLayout";
import ChartTotalUser from "../components/Dashboard/ChartTotalUser";
import RiwayatAduan from "../components/Dashboard/RiwayatAduan";
import axios from "axios";

const Dashboard = () => {
  const [progressData, setProgressData] = useState({
    Ditolak: 0,
    "On Progress": 0,
    Pending: 0,
    Selesai: 0,
    Verifikasi: 0,
  });

  const [userChartData, setUserChartData] = useState({});
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [latestComplaints, setLatestComplaints] = useState([]);
  const [isLoadingProgress, setIsLoadingProgress] = useState(true);
  const [isLoadingChart, setIsLoadingChart] = useState(true);
  const [isLoadingRiwayatAduan, setIsLoadingRiwayatAduan] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoadingProgress(true);
      setIsLoadingChart(true);
      setIsLoadingRiwayatAduan(true);

      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        "https://capstone-dev.mdrizki.my.id/api/v1/admins/dashboard",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { complaintsByStatus, usersByYearAndMonth, latestComplaints } = response.data.data;

      setProgressData(complaintsByStatus);
      setUserChartData(usersByYearAndMonth);
      setYears(Object.keys(usersByYearAndMonth));
      setLatestComplaints(latestComplaints);

      setIsLoadingProgress(false);
      setIsLoadingChart(false);
      setIsLoadingRiwayatAduan(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setIsLoadingProgress(false);
      setIsLoadingChart(false);
      setIsLoadingRiwayatAduan(false);
    }
  };

  console.log(userChartData);
  console.log(years);
  console.log(latestComplaints);

  return (
    <>
      <section className="flex w-full min-h-screen">
        <SidebarLayout />
        <div className="flex flex-col flex-grow lg:ml-[287px]">
          <HeaderLayout />
          <div className="flex-grow bg-light-2 p-8 overflow-y-auto">
            {isLoadingProgress ? (
              <div className="text-center mt-4">Loading Progress...</div>
            ) : (
              <Progress progressData={progressData} />
            )}
            {isLoadingChart ? (
              <div className="text-center mt-4">Loading Chart...</div>
            ) : (
              <ChartTotalUser
                data={userChartData}
                years={years}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
            )}
            {isLoadingRiwayatAduan ? (
              <div className="text-center mt-4">Loading Riwayat Aduan...</div>
            ) : (
              <RiwayatAduan data={latestComplaints} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
