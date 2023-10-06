import React from "react";
import { HiEllipsisVertical } from "react-icons/hi2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        barThickness: 6, // number (pixels) or 'flex'
        maxBarThickness: 8, // number (pixels)
      },
    ],
  },
  plugins: {
    legend: {
      position: "top",
    }
  },
};

const labels = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const data = {
  labels,
  datasets: [
    {
      label: "Expense",
      data: [10, 15, 28, 12, 38, 34, 8],
      backgroundColor: "rgb(6, 59, 135, 0.7)",
      hoverBackgroundColor: "rgb(6, 59, 135, 1)",

      barThickness: 16,
      borderRadius: 4,
    },
  ],
};

export default function ChartExpenses() {
  return <Bar className="chart-dashboard1" options={options} data={data} />;
}
