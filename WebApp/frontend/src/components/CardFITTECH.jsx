import React from "react";

export default function CardFITTECH() {
  return (
    <div className="CardFITTECH flex flex-col gap-3">
      <div className="card-number">
        <span>1234 5678 9101 1121</span>
      </div>
      <div className="card-holder flex flex-col">
        <label>Holder</label>
        <span>KHALDI ABDELMOUMEN</span>
      </div>
      <div className="card-infos flex justify-between">
        <div className="exp flex flex-col">
          <label>valid-thru</label>
          <span className="expiration-vl">02/40</span>
        </div>
        <div className="cvv flex flex-col">
          <label>CVV</label>
          <span className="cvv-vl">123</span>
        </div>
      </div>
      {/* <img className="chip" src="img/chip.png" alt="chip"> */}
    </div>
  );
}
