import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ini buat mendaftarkan skala yang diperlukan
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartTotalUser = ({ data, years }) => {
   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total User",
        data: data[selectedYear] || [],
        backgroundColor: "rgba(250, 204, 21, 1)",
        borderColor: "rgba(250, 204, 21, 1)",
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

   const handleYearChange = (e) => {
     setSelectedYear(e.target.value);
   };


  return (
    <div className="bg-main-lighter p-4 rounded-lg shadow-md w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[26px] font-bold">Total User</h2>
        <div>
          <label htmlFor="year-select" className="mr-2">
            Year:
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            className="bg-main-lighter border border-gray-300 rounded px-2 py-1"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="min-w-[600px] h-80">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartTotalUser;
