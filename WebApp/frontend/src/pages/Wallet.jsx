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
import CardBank from "../components/CardBankBNA";
import TableTransaction from "../components/Tables/TableTransaction";
import CardSwiper from "../components/CardSwiper";
import WalletAdvice from "../components/WalletAdvice";
import CardBankBNA from "../components/CardBankBNA";
import CardBancCCP from "../components/CardBankCCP";
import CardBankCPA from "../components/CardBankCPA";
import CardBankAGB from "../components/CardBankAGB";
import FormDialog from "../components/AddDialog";
import BigGoalsItems from "../components/BigGoalsItems";
import GoalsItems from "../components/GoalsItems";
import SalesProgress from "../components/SalesProgress";
import SavesProgress from "../components/SavesProgress";
import idea from "../assets/advice.png";

import BuyingProgress from "../components/BuyingProgress";
import DeptProgress from "../components/DeptProgress";

export default function Wallet() {
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
  const NavigateToBank = () => {
    navigate(`/LinkBank`);
  };
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

          <div className="header-right flex flex-col">
            <div className="check-it flex gap-5">
              <CardSpending />
              <CardSpendingMoy />
              <CardSaving Data={WalletData} />
            </div>
            <WalletAdvice />
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
            <AiOutlinePlus className="icon" onClick={NavigateToBank} />
          </div>
        </div>

        <div className="All-bank-accounts flex items-center mt-6">
          <div className="right flex items-center justify-between">
            <CardBankBNA />
            <CardBancCCP />
            <CardBankCPA />
            <CardBankAGB />
          </div>
        </div>

        <div className="right-transaction flex flex-col mt-12 pr-8">
          <div className="Transaction-Goal flex">
            <div className="left-class mt-3 flex flex-col gap-4">
              <span>Recent transaction</span>
              <TableTransaction />
            </div>

            <div className="right-class flex flex-col gap-6">
              <div className="right-class-goal flex flex-col gap-4">
                <span>Big Goal</span>
                <div className="goal-items flex gap-5">
                  <BigGoalsItems />
                  <FormDialog />
                </div>
              </div>
              <div className="right-goal-progress flex gap-10">
                <div className="goal flex flex-col gap-4">
                  <span>Goals</span>
                  <div className="goal-container">
                    <GoalsItems />
                  </div>
                </div>

                <div className="progress flex flex-col gap-4">
                  <span>Progress</span>
                  <div className="progress-container flex flex-col gap-2">
                    <div className="progress-item flex flex-col gap-2">
                      <span>Sales</span>
                      <SalesProgress />
                    </div>
                    <div className="progress-item flex flex-col gap-2">
                      <span>Saves</span>
                      <SavesProgress />
                    </div>
                    <div className="progress-item flex flex-col gap-2">
                      <span>Buying</span>
                      <BuyingProgress />
                    </div>
                    <div className="progress-item flex flex-col gap-2">
                      <span>Dept</span>
                      <DeptProgress />
                    </div>
                    <div className="Wallet-Advice-title flex items-center gap-2">
                      <img src={idea} alt="" />
                      <span>This is our advice for you</span>
                    </div>
                    <p className="p-advice">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci doloribus et molestiae perspiciatis nobis sequi
                      quia dolorem maxime, natus asperiores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
