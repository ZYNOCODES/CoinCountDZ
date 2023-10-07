import React, { useEffect, useState } from "react";
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
import { useAuthContext } from "../hooks/useAuthContext";
import moment from 'moment';
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
        barThickness: 6, 
        maxBarThickness: 8, 
      },
    ],
  },
  plugins: {
    legend: {
      position: "top",
    }
  },
};


export default function ChartExpenses() {
  const { user } = useAuthContext();
  const [SelectedData, setSelectedData] = useState("week");
  const [DashboardDataWeekly, setDashboardDataWeekly] = useState();
  const [DashboardDataMonthly, setDashboardDataMonthly] = useState();
  const [DashboardDataYearly, setDashboardDataYearly] = useState();
  
  useEffect(() => {
    const fetchDashboardDataWeekly = async () => {
      try {
        const response = await fetch(`http://localhost:8000/Dashboard/current/week`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setDashboardDataWeekly(data.Transaction);
        } else {
          console.error("Error receiving Panne data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Panne data:", error);
      }
    };
    fetchDashboardDataWeekly();
  },[user?.token, DashboardDataWeekly]);
  useEffect(() => {
    const fetchDashboardDataMonthly = async () => {
      try {
        const response = await fetch(`http://localhost:8000/Dashboard/current/month`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setDashboardDataMonthly(data.Transaction);
        } else {
          console.error("Error receiving Panne data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Panne data:", error);
      }
    };
    fetchDashboardDataMonthly();
  },[user?.token, DashboardDataMonthly]);
  useEffect(() => {
    const fetchDashboardDataYearly = async () => {
      try {
        const response = await fetch(`http://localhost:8000/Dashboard/current/year`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setDashboardDataYearly(data.Transaction);
        } else {
          console.error("Error receiving Panne data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Panne data:", error);
      }
    };
    fetchDashboardDataYearly();
  },[user?.token, DashboardDataYearly]);
  
  const labelWeekfr = ["Sam", "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven"];
  const labelMonthfr = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aout", "Sep", "Oct", "Nov", "Dec"];
  const labelYear = [];
  const currentYear = moment().year();
  for (let i = 0; i < 5; i++) {
    labelYear.push(currentYear - i);
  }

  const dataWeek = {
    labels: labelWeekfr,
    datasets: [
      {
        label: "Expenses",
        data: [],
        backgroundColor: "#063B87",
        hoverBackgroundColor: "rgb(79, 129, 255)",
        barThickness: 30,
        borderRadius: 4,
      },
    ],
  };
  const dataMonth = {
    labels: labelMonthfr,
    datasets: [
      {
        label: "Expenses",
        data: [],
        backgroundColor: "#063B87",
        hoverBackgroundColor: "rgb(79, 129, 255)",
        barThickness: 10,
        borderRadius: 4,
      },
    ],
  };
  const dataYear = {
    labels: labelYear,
    datasets: [
      {
        label: "Expenses",
        data: [],
        backgroundColor: "#063B87",
        hoverBackgroundColor: "rgb(79, 129, 255)",
        barThickness: 60,
        borderRadius: 4,
      },
    ],
  }

  const labelWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  for (let i = 0; i < labelWeek.length; i++) {
    const dayLabel = labelWeek[i];
    const dayData = DashboardDataWeekly?.find((entry) => {
        const entryDay = moment().day(parseInt(entry.day)-1).format('ddd');
        return entryDay === dayLabel;
    });
    if (dayData) {
        dataWeek.datasets[0].data.push(dayData.Amount);
    } else {
        dataWeek.datasets[0].data.push(0);
    }
  }
  const labelMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let i = 0; i < labelMonth.length; i++) {
    const monthLabel = labelMonth[i];
    const monthData = DashboardDataMonthly?.find((entry) => {
        const entryMonth = moment().month(parseInt(entry.month) - 1).format('MMM'); // Get the month abbreviation
        return entryMonth === monthLabel;
    });
    
    if (monthData) {
        dataMonth.datasets[0].data.push(monthData.Amount);
    } else {
        dataMonth.datasets[0].data.push(0);
    }
  }
  for (let i = 0; i < labelYear.length; i++) {
    const yearLabel = labelYear[i];
    const yearData = DashboardDataYearly?.find((entry) => entry.year === yearLabel);

    // If data exists for the year, push it to the data array; otherwise, push 0
    if (yearData) {
        dataYear.datasets[0].data.push(yearData.Amount);
    } else {
        dataYear.datasets[0].data.push(0);
    }
  }
  return (
        <>
          <div className="header flex items-center justify-between">
            <span>Expenses</span>
            <select>
              <option value="week">Last week</option>
              <option value="month">Last month</option>
            </select>
          </div>
          <Bar className="chart-dashboard1" options={options} data={dataWeek} />
        </>
  );
}

