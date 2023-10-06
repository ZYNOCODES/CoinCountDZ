import React from "react";
import { BiSolidBank } from "react-icons/bi";

export default function CardBank() {
  return (
    <div className="CardBank flex flex-col justify-between">
      <div className="CardBank-header flex items-center gap-2">
        <BiSolidBank className="icon" />
        <span>BNB</span>
      </div>
      <div className="Card-footer">
        <h3>
          2000,00 <span>DA</span>
        </h3>
      </div>
    </div>
  );
}
