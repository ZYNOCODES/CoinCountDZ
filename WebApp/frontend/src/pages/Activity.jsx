import React from "react";
import NavBar from "../components/NavBar";

import { AiOutlineSearch } from "react-icons/ai";
import TableHistory from "../components/Tables/TableHistory";

export default function Activity() {
  return (
    <div className="Activity">
      <NavBar />
      <div className="Activity-container">
        <div className="Activity-header flex justify-between">
          <span>Account History</span>
          <div className="Activity-input flex items-center justify-between">
            <input type="search" placeholder="Search.." />
            <AiOutlineSearch className="icon" />
          </div>
        </div>

        <TableHistory />


      </div>
    </div>
  );
}
