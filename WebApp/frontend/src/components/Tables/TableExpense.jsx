import React, { useEffect, useState } from "react";
import TableExpenseReadOnlyRow from "./TableExpenseReadOnlyRow";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function TableExpense() {
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
    <div className="TableExpense flex flex-col gap-5">
      <th className="flex item-center gap-1">
        <td>Name</td>
        <td>Market</td>
        <td>Amount</td>
        <td>Date</td>
      </th>
      <div className="Table-expense flex flex-col gap-4">
        {TransactionData && TransactionData.map((TransactionData) => {
          return (
            <TableExpenseReadOnlyRow
              key={TransactionData.id}
              Name={TransactionData.Name}
              Date={TransactionData.createdAt}
              Market={TransactionData.Sender}
              Amount={TransactionData.Amount}
            />
          );
        })}
      </div>
    </div>
  );
}
