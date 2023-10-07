import React from 'react'
import idea from '../assets/advice.png'
import { BiRefresh } from 'react-icons/bi';

export default function WalletAdvice() {
  return (
    <div className="WalletAdvice mt-10">
      <div className="Wallet-Advice-title flex items-center gap-2">
        <img src={idea} alt="" />
        <span>This is our advice for you</span>
      </div>
      <p>
        Avoid High-Interest Debt: Pay off high-interest debt as quickly as
        possible to avoid accruing more interest charges. Focus on paying down
        credit card balances.
      </p>

      <div className="Advice-buttons flex items-center justify-end gap-2 mt-7">
        <input type="submit" value="Act-1" />
        <input type="submit" value="Act-2" />
        <input type="submit" value="Act-3" />
        <BiRefresh className="icon" />
      </div>
    </div>
  );
}
