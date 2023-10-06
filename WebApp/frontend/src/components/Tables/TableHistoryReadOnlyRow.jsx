import React, { useEffect, useState } from "react";
function formatDate(inputDate) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(inputDate).toLocaleDateString("en-US", options);
  const hours = new Date(inputDate).getHours();
  const minutes = new Date(inputDate).getMinutes();
  const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;

  return `${formattedDate} at ${formattedTime}`;
}
export default function TableHistoryReadOnlyRow({
  Name,
  CreatedDate,
  From,
  To,
  Amount,
  type
}) {
  const [formattedDate, setFormattedDate] = useState(""); // State to store the formatted date

  useEffect(() => {
    const formattedResult = formatDate(CreatedDate);
    setFormattedDate(formattedResult);
  }, []);

  return (
    <div className="TableHistoryReadOnlyRow">
      <tr className="flex item-center gap-1 mb-3">
        <td>
          <span>{Name}</span>
        </td>
        <td>
          <span>{formattedDate}</span>
        </td>
        <td>
          <span>{type}</span>
        </td>
        <td>
          <span>{From}</span>
        </td>
        <td>
          <span>{To}</span>
        </td>
        <td>
          <span>{Amount} DZA</span>
        </td>
      </tr>
    </div>
  );
}
