import React, { useEffect, useState } from "react";
import TableHistoryReadOnlyRow from "./TableHistoryReadOnlyRow";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function TableHistory() {
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
    <div className="TableHistory flex flex-col gap-5">
      <th className="flex item-center gap-1">
        <td>ID</td>
        <td>Date & Time</td>
        <td>Type</td>
        <td>From</td>
        <td>To</td>
        <td>Amount</td>
      </th>
      <div className="Table-history flex flex-col gap-4">
        {TransactionData && TransactionData?.map((history) => {
          return (
            <TableHistoryReadOnlyRow
              key={history.id}
              Name={history.Name}
              CreatedDate={history.createdAt}
              From={history.Sender}
              To={history.Reciver}
              Amount={history.Amount}
              type={history.Type}
            />
          );
        })}
      </div>
    </div>
  );
}
