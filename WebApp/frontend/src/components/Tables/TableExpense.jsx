import React from "react";
import TableExpenseReadOnlyRow from "./TableExpenseReadOnlyRow";

export default function TableExpense() {
  const ExpenseDB = [
    {
      id: 1,
      Name: "Iphone",
      Market: "Amazon",
      Price: "3000",
      Date: "April 28,2023 at 11:00",
    },
    {
      id: 2,
      Name: "Macbook",
      Market: "Amazon",
      Price: "3000",
      Date: "April 28,2023 at 11:00",
    },
    {
      id: 3,
      Name: "Samsung S22",
      Market: "Amazon",
      Price: "3000",
      Date: "April 28,2023 at 11:00",
    },
    {
      id: 3,
      Name: "Laptop hp",
      Market: "Amazon",
      Price: "3000",
      Date: "April 28,2023 at 11:00",
    },
    {
      id: 3,
      Name: "AirPods ",
      Market: "Amazon",
      Price: "3000",
      Date: "April 28,2023 at 11:00",
    },
    {
      id: 4,
      Name: "Abdallah Dekkich",
      Market: "Amazon",
      Price: "3000",
      Date: "April 28,2023 at 11:00",
    },
    {
      id: 5,
      Name: "Abdallah Dekkich",
      Market: "Amazon",
      Price: "3000",
      Date: "April 28,2023 at 11:00",
    },
  ];
  return (
    <div className="TableExpense flex flex-col gap-5">
      <th className="flex item-center gap-1">
        <td>Name</td>
        <td>Market</td>
        <td>Amount</td>
        <td>Date</td>
      </th>
      <div className="Table-expense flex flex-col gap-4">
        {ExpenseDB.map((product) => {
          return (
            <TableExpenseReadOnlyRow
              key={product.id}
              Name={product.Name}
              Date={product.Date}
              Market={product.Market}
              Amount={product.Amount}
            />
          );
        })}
      </div>
    </div>
  );
}
