import React from 'react'

export default function TableTransactionReadOnlyRow({ Name, Date, Price }) {
  return (
    <div className="TableTransactionReadOnlyRow flex items-center justify-between">
      <div className="left-ligne flex items-center gap-4">
        <div className="image"></div>
        <div className="left-ligne-description flex flex-col">
          <span className="name">{Name}</span>
          <span className="date">{Date}</span>
        </div>
      </div>
      <h4>
        + {Price}
        <span>DA</span>
      </h4>
    </div>
  );
}
