import React from "react";
import NavBar from "../components/NavBar";
import CardAccount from "../components/CardAccount";
import CardSaving from "../components/CardSaving";
import CardFITTECH from "../components/CardFITTECH";
import TableTransaction from "../components/Tables/TableTransaction";
import TableExpense from "../components/Tables/TableExpense";

export default function Home() {
  return (
    <div className="Home flex">
      <NavBar />
      <div className="Home-container flex mt-3 gap-8">
        <div className="left-class flex flex-col items-center gap-8">
          <div className="left-top flex items-center justify-around mt-4">
            <CardAccount />
            <CardSaving />
          </div>
          <div className="left-expenses flex flex-col gap-6">
            <div className="header flex items-center justify-between">
              <span>Expenses</span>
              <select>
                <option value="week">Last week</option>
                <option value="month">Last month</option>
              </select>
            </div>
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
        <div className="right-class flex flex-col gap-8">
          <div className="right-wallet flex flex-col mt-4">
            <span>Wallet</span>
            <CardFITTECH />
          </div>
          <div className="right-transaction flex flex-col mt-4 pr-8">
            <div className="title flex items-center justify-between">
              <span>Recent transaction</span>
              <span className="see-all">See all</span>
            </div>
            <div className="right-table mt-3">
              <TableTransaction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
