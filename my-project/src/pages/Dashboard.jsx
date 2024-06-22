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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
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
      const { complaintsByStatus, usersByYearAndMonth } = response.data.data;
      setProgressData(complaintsByStatus);
      setUserChartData(usersByYearAndMonth);
      setYears(Object.keys(usersByYearAndMonth));
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  console.log(userChartData);
  console.log(years);

  const riwayatAduanData = [
    {
      name: "John Doe",
      date: "2024-06-01",
      category: "Kategori 1",
      status: "Diproses",
    },
    {
      name: "Jane Smith",
      date: "2024-06-02",
      category: "Kategori 2",
      status: "Selesai",
    },
    {
      name: "Bob Johnson",
      date: "2024-06-03",
      category: "Kategori 3",
      status: "Tertunda",
    },
  ];

  return (
    <>
      <section className="flex w-full min-h-screen">
        <SidebarLayout />
        <div className="flex flex-col flex-grow lg:ml-[287px]">
          <HeaderLayout />
          <div className="flex-grow bg-light-2 p-8 overflow-y-auto">
            <Progress progressData={progressData} />
            <ChartTotalUser
              data={userChartData}
              years={years}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
            <RiwayatAduan data={riwayatAduanData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
