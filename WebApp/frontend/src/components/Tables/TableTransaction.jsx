import React from "react";
import TableTransactionReadOnlyRow from "./TableTransactionReadOnlyRow";

export default function TableTransaction() {
  const TransactionDB = [
    {
      id: 1,
      Name: "Khaldi Abdelmoumen",
      Date: "April 28,2023 at 11:00",
      Price: "3000",
    },
    {
      id: 2,
      Name: "Zino Boumrar",
      Date: "April 28,2023 at 11:00",
      Price: "3000",
    },
    {
      id: 3,
      Name: "Abdallah Dekkich",
      Date: "April 28,2023 at 11:00",
      Price: "3000",
    },
    {
      id: 3,
      Name: "Abdallah Dekkich",
      Date: "April 28,2023 at 11:00",
      Price: "3000",
    },
    {
      id: 3,
      Name: "Abdallah Dekkich",
      Date: "April 28,2023 at 11:00",
      Price: "3000",
    },
  ];

  return (
    <div className="TableTransaction">
      {TransactionDB.map((transaction) => {
        return (
          <TableTransactionReadOnlyRow
            key={transaction.id}
            Name={transaction.Name}
            Date={transaction.Date}
            Price={transaction.Price}
          />
      );})}
    </div>
  );
}
