import React from 'react'


export default function CardAccount({Data}) {
  
  return (
    <div className="CardAccount flex flex-col justify-between p-3">
      <span className="date">Oct 05</span>
      <div className="total-sales">
        <span>Account balance</span>
        <h3>
          {Data?.Balance}<span>DA</span>
        </h3>
      </div>
    </div>
  );
}
