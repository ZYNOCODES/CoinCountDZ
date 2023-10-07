import React, { useEffect, useState } from 'react'

export default function CardSpendingMoy() {
  const [MonthlySpendingData, setMonthlySpendingData] = useState('')
  // Fetch MonthlySpending Data
  useEffect(() => {
    const fetchMonthlySpendingData = async () => {
        await fetch(`http://localhost:8000/Wallet/Average/SpendingInTotal`, {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (response.ok) {
            response
              .json()
              .then((data) => {
                setMonthlySpendingData(data);
              })
              .catch((error) => {
                console.error("Error fetching MonthlySpending data:", error);
              });
          } else {
            console.error("Error resieving MonthlySpending date", response.error);
          }
        });
    };
    fetchMonthlySpendingData();
  }, [MonthlySpendingData]);
  return (
    <div className="CardSaving flex flex-col justify-between p-3">
      <span className="date">Oct 05</span>
      <div className="total-sales">
        <span>average Spending</span>
        <h3>
          {MonthlySpendingData.averageSpending}
          <span>DA</span>
        </h3>
      </div>
    </div>
  );
}
