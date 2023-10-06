import React from "react";
import NavBarLogo from "./NavBarLogo";

import aprox from "../assets/aprox.png";
import chip from "../assets/chip.png";

export default function CardFITTECH() {
  return (
    <div className="CardFITTECH flex flex-col pt-4 pb-4">
      <div className="CardFITTECH-container flex items-center justify-between mb-20">
        <div className="left">
          <div className="left-header flex items-center gap-2">
            <NavBarLogo />
            <div className="left-ligne"></div>
            <span>online wallet</span>
          </div>
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
        </div>
        <div className="right">
          <img src={chip} className="chip" />
        </div>
      </div>
    </div>
  );
}
