import React from "react";
import NavBarLogo from "../components/NavBarLogo";

export default function BankAccount() {
  return (
    <div className="BankAccount flex flex-col">
      <div className="Navbar flex items-center pl-24">
        <NavBarLogo />
      </div>
      <div className="BackAccount-container flex flex-col items-center justify-center gap-14">
        <h2>Link a bank account</h2>
        <form className="flex flex-col gap-8">
          <div className="input-items flex flex-col gap-4">
            <div className="input-item flex flex-col gap-2">
              <label>Bank name</label>
              <input type="text" />
            </div>
            <div className="input-item flex flex-col gap-2">
              <label>Account number</label>
              <input type="text" />
            </div>
          </div>

          <div className="button flex flex-col gap-4">
            <input
              className="Bank-btn agree-btn"
              type="submit"
              value="Agree and link"
            />
            <button className="Bank-btn cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
