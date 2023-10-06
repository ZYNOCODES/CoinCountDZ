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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        doloribus et molestiae perspiciatis nobis sequi quia dolorem maxime,
        natus asperiores.
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
