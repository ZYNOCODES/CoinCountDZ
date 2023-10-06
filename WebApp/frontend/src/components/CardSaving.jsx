import React, { useEffect, useState } from 'react'
function formatDate(inputDate) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(inputDate).toLocaleDateString("en-US", options);
  const hours = new Date(inputDate).getHours();
  const minutes = new Date(inputDate).getMinutes();
  const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;

  return `${formattedDate} at ${formattedTime}`;
}
export default function CardSaving({Data}) {
  const [formattedDate, setFormattedDate] = useState(""); // State to store the formatted date

  useEffect(() => {
    const formattedResult = formatDate(Data?.updatedAt);
    setFormattedDate(formattedResult);
  }, [Data?.updatedAt]);
  return (
    <div className="CardSaving flex flex-col justify-between p-3">
      <span className="date">{formattedDate}</span>
      <div className="total-sales">
        <span>Total saves</span>
        <h3>
        {Data?.Savings}<span>DA</span>
        </h3>
      </div>
    </div>
  );
}
