import React from "react";
import NavBar from "../components/NavBar";

export default function SendPayment() {
  return (
    <div className="SendPayment">
      <NavBar />
      <div className="BackAccount-container flex flex-col items-center justify-center gap-8">
        <h2>Send payment to</h2>

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
            <div className="input-item flex flex-col gap-2">
              <label>Amount</label>
              <div className="Amount-input-class flex items-center">
                <input type="text" />
                <span>DZA</span>
              </div>
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
