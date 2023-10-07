import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CardAccount from "../components/CardAccount";
import CardSaving from "../components/CardSaving";
import TableExpense from "../components/Tables/TableExpense";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChartExpenses from "../components/ChartExpenses";
import Calendar from "../components/Calendar";
import CardSwiper from "../components/CardSwiper";

export default function Home() {
  const notify = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);
  const { user } = useAuthContext();
  const [WalletData, setWalletData] = useState("");
  // Fetch Wallet Data
  useEffect(() => {
    const fetchWalletData = async () => {
      if (user?.token !== undefined) {
        await fetch(`http://localhost:8000/Wallet/${user?.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response
              .json()
              .then((data) => {
                setWalletData(data);
              })
              .catch((error) => {
                console.error("Error fetching Wallet data:", error);
              });
          } else {
            console.error("Error resieving Wallet date", response.error);
          }
        });
      }
    };
    fetchWalletData();
  }, [WalletData, user?.token]);

  return (
    <div className="Home flex">
      <NavBar />
      <div className="Home-container flex mt-3 gap-8">
        <div className="left-class flex flex-col items-center gap-8">
          <div className="left-top flex items-center justify-around mt-4">
            <CardAccount Data={WalletData} />
            <CardSaving Data={WalletData} />
          </div>
          <div className="left-expenses flex flex-col items-center gap-2">
            <div className="header flex items-center justify-between">
              <span>Expenses</span>
              <select>
                <option value="week">Last week</option>
                <option value="month">Last month</option>
              </select>
            </div>
            <ChartExpenses />
          </div>
          <div className="left-expenses expense-table flex flex-col gap-6">
            <div className="header flex items-center justify-between">
              <span>Expense</span>
              <select>
                <option value="week">All</option>
              </select>
            </div>
            <TableExpense />
          </div>
        </div>
        <div className="right-class flex flex-col gap-8 items-center">
          <div className="right-wallet flex flex-col mt-4">
            <span>Wallet</span>
            <CardSwiper />
          </div>
          <div className="right-transaction flex justify-center">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
