import React from "react";
import NavBar from "../components/NavBar";
import Calendar from "../components/Calendar";
import CardFITTECH from "../components/CardFITTECH";
import CardAccount from "../components/CardAccount";

import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { BiSolidBank } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import CardSaving from "../components/CardSaving";
import CardSpending from "../components/CardSpending";
import CardSpendingMoy from "../components/CardSpendingMoy";
import CardGoal from "../components/CardGoal";

export default function Wallet() {
  return (
    <div className="Wallet flex flex-col">
      <div className="Wallet-header flex flex-col">
        <NavBar />
        <div className="Wallet-header-container flex mt-5 gap-8">
          <div className="header-left flex flex-col gap-8">
            <span>Wallet</span>
            <CardFITTECH />
            <div className="rapport flex mt-8 gap-8">
              <CardAccount />
              <div className="rapport-item flex items-center gap-2">
                <BsFillFileEarmarkArrowUpFill className="icon" />
                <span>Rapport</span>
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
        <div className="Bank-title">
          <BiSolidBank />
          <h2>Bank</h2>
          <div className="add-class">
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </div>
  );
}
