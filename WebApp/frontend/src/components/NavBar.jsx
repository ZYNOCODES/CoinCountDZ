import React, { useState } from "react";

import { IoMdSettings } from "react-icons/io";
import AsideBar from "./CardFITTECH";
import NavBarLogo from "./NavBarLogo";

export default function NavBar() {
  const [activeAsideBar, setActiveAsideBar] = useState(false);
  let toggleAsideBarActive = activeAsideBar ? " showAsideBar" : "";
  const handleClickShowAsideBar = () => {
    setActiveAsideBar(!activeAsideBar);
  };
  return (
    <div className="NavBar flex justify-between items-center">
      <NavBarLogo />
      <ul className="flex justify-center items-center gap-6">
        <li className="Dashboard flex justify-center items-center">
          <a href="/">Dashboard</a>
        </li>
        <li className="Wallet flex justify-center items-center">
          <a href="/Wallet">Wallet</a>
        </li>
        <li className="Send flex justify-center items-center">
          <a href="/Send">Send</a>
        </li>
        <li className="Activity flex justify-center items-center">
          <a href="/Activity">Activity</a>
        </li>
      </ul>
      <div className="profile-class flex items-center">
        <div className="image"></div>
        <div className="full-name flex">
          <span className="name">Khaldi Abdelmoumen</span>
          <span>Freelance</span>
        </div>
        <div
          className="setting-icon flex justify-center items-center"
          onClick={handleClickShowAsideBar}
        >
          <IoMdSettings size="1.2rem" className="icon" />
        </div>
      </div>
      <div className={`AsideBar${toggleAsideBarActive}`}></div>
    </div>
  );
}
