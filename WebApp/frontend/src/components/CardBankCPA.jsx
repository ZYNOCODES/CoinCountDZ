import React from "react";
import { BiSolidBank } from "react-icons/bi";

export default function CardBankCPA() {
  return (
    <div className="CardBank flex flex-col justify-between">
      <div className="CardBank-header flex items-center gap-2">
        <BiSolidBank className="icon" />
        <span>CPA</span>
      </div>
      <div className="CardBank-item">
        <span>Account-number</span>
        <p>0007999990155193</p>
      </div>
      <div className="CardBank-item">
        <span>SWIFT/BIC</span>
        <p>ABCD 0101 0101 0102 0202</p>
      </div>
      <div className="Card-footer">
        <h3>
          69340,00 <span>DA</span>
        </h3>
      </div>
    </div>
  );
}
