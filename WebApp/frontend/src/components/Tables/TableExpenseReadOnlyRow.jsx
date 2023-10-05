import React from "react";

export default function TableExpenseReadOnlyRow({ Name, Date, Amount, Market }) {
  return (
    <div className="TableExpenseReadOnlyRow">
      <tr className="flex item-center gap-1 mb-3">
        <td>
          <span>{Name}</span>
        </td>
        <td>{Market}</td>
        <td>
          {Amount} <span>DA</span>
        </td>
        <td>{Date}</td>
      </tr>
    </div>
  );
}
