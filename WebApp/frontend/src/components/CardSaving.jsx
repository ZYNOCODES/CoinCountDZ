import React from 'react'

export default function CardSaving() {
  return (
    <div className="CardSaving flex flex-col justify-between p-3">
      <span className="date">Oct 05</span>
      <div className="total-sales">
        <span>Total saves</span>
        <h3>
          212,376<span>DA</span>
        </h3>
      </div>
    </div>
  );
}