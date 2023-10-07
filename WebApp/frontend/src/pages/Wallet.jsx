import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Calendar from "../components/Calendar";
import CardFITTECH from "../components/CardFITTECH";
import CardAccount from "../components/CardAccount";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { BiSolidBank } from "react-icons/bi";
import { AiFillFilePdf, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import CardSaving from "../components/CardSaving";
import CardSpending from "../components/CardSpending";
import CardSpendingMoy from "../components/CardSpendingMoy";
import CardGoal from "../components/CardGoal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../hooks/useAuthContext";
import CardBank from "../components/CardBank";
import TableTransaction from "../components/Tables/TableTransaction";

export default function Wallet() {
  const notify = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);
  const { user } = useAuthContext();
  const [WalletData, setWalletData] = useState('')
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
  const NavigateToBank = () => {
    navigate(`/LinkBank`);
  }
  return (
    <div className="Wallet flex flex-col">
      <div className="Wallet-header flex flex-col">
        <NavBar />
        <div className="Wallet-header-container flex mt-5">
          <div className="header-left flex flex-col gap-8">
            <div className="header-left-header flex flex-col gap-8">
              <span>Wallet</span>
              <div className="card-button flex">
                <CardSwiper />
                <div className="rapport-item order-button flex items-center gap-2">
                  <AiOutlinePlus className="icon" />
                  <span>Order Card</span>
                </div>
              </div>
            </div>
            <div className="rapport flex mt-8 gap-8">
              <CardAccount Data={WalletData} />
              <div className="rapport-button flex flex-col">
                <div className="rapport-item flex items-center gap-2">
                  <BsFillFileEarmarkArrowUpFill className="icon" />
                  <span>Rapport</span>
                </div>
                <div className="rapport-item pdf-btn flex items-center gap-2">
                  <AiFillFilePdf className="icon" />
                  <span>Pdf</span>
                </div>
              </div>
            </div>
          </div>

          <div className="header-right grid">
            <CardSpending />
            <CardSpendingMoy />
            <CardSaving />
            <CardGoal />
            <CardSaving />
            <CardSaving />
          </div>
        </div>
      </div>
      <div className="Wallet-Bank">
        <div className="Bank-title flex items-center gap-4">
          <div className="left-title flex items-center gap-2">
            <BiSolidBank className="icon" />
            <h2>Bank</h2>
          </div>
          <div className="add-class flex items-center justify-center">
            <AiOutlinePlus className="icon" onClick={NavigateToBank}/>
          </div>
        </div>

        <div className="All-bank-accounts flex items-center mt-6">
          <div className="left flex justify-center">
            <span>Right there you can see all your banks accounts</span>
          </div>
          <div className="right flex items-center gap-5">
            <CardBank />
            <CardBank />
          </div>
        </div>

        <div className="right-transaction flex flex-col mt-12 pr-8">
          <div className="title flex items-center justify-between mb-4">
            <span>Recent transaction</span>
            <div className="Activity-input flex items-center justify-between">
              <input type="search" placeholder="Search.." />
              <AiOutlineSearch className="icon" />
            </div>
          </div>
          <div className="right-table mt-3">
            <TableTransaction />
          </div>
        </div>
      </div>
    </div>
  );
}
