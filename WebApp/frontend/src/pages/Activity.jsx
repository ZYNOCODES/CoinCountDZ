import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import { AiOutlineSearch } from "react-icons/ai";
import TableHistory from "../components/Tables/TableHistory";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Activity() {
  const { user } = useAuthContext();
  const [TransactionData, setTransactionData] = useState('')
  // Fetch Transaction Data
  useEffect(() => {
    const fetchTransactionData = async () => {
      if (user?.token !== undefined) {
        await fetch(`http://localhost:8000/Transaction`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response
              .json()
              .then((data) => {
                setTransactionData(data);
              })
              .catch((error) => {
                console.error("Error fetching Transaction data:", error);
              });
          } else {
            console.error("Error resieving Transaction date", response.error);
          }
        });
      } 
    };
    fetchTransactionData();
  }, [TransactionData, user?.token]);
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
