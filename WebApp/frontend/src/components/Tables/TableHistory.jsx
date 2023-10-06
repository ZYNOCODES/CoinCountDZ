import React from "react";
import TableHistoryReadOnlyRow from "./TableHistoryReadOnlyRow";

export default function TableHistory() {

    const HistoryDB = [
      {
        id: 1,
        Name: "FACEBK XG2..",
        Date: "April 28,2023 at 11:00",
        From: "Acount-d",
        To: "FACEBK",
        Amount: "40",
      },
      {
        id: 2,
        Name: "FACEBK XG2..",
        Date: "April 28,2023 at 11:00",
        From: "Acount-id",
        To: "FACEBK",
        Amount: "40",
      },
      {
        id: 3,
        Name: "FACEBK XG2..",
        Date: "April 28,2023 at 11:00",
        From: "Acount-id",
        To: "FACEBK",
        Amount: "40",
      },
      {
        id: 4,
        Name: "FACEBK XG2..",
        Date: "April 28,2023 at 11:00",
        From: "Acount-id",
        To: "FACEBK",
        Amount: "40",
      },
      {
        id: 5,
        Name: "FACEBK XG2..",
        Date: "April 28,2023 at 11:00",
        From: "Acount-id",
        To: "FACEBK",
        Amount: "40",
      },
    ];

  return (
    <div className="TableHistory flex flex-col gap-5">
      <th className="flex item-center gap-1">
        <td>ID</td>
        <td>Date & Time</td>
        <td>From</td>
        <td>To</td>
        <td>Amount</td>
      </th>
      <div className="Table-history flex flex-col gap-4">
        {HistoryDB.map((history) => {
          return (
            <TableHistoryReadOnlyRow
              key={history.id}
              Name={history.Name}
              Date={history.Date}
              From={history.From}
              To={history.To}
              Amount={history.Amount}
            />
          );
        })}
      </div>
    </div>
  );
}
