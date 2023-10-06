import React, { useEffect, useState } from "react";
function formatDate(inputDate) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(inputDate).toLocaleDateString("en-US", options);
  const hours = new Date(inputDate).getHours();
  const minutes = new Date(inputDate).getMinutes();
  const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;

  return `${formattedDate} at ${formattedTime}`;
}
export default function TableExpenseReadOnlyRow({ Name, Date, Amount, Market }) {
  const [formattedDate, setFormattedDate] = useState(""); // State to store the formatted date

  useEffect(() => {
    const formattedResult = formatDate(Date);
    setFormattedDate(formattedResult);
  }, []);

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
        <td>{formattedDate}</td>
      </tr>
    </div>
  );
}
