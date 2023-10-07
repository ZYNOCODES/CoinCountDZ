import React, { useState } from "react";

import { IoMdSettings } from "react-icons/io";

import NavBarLogo from "./NavBarLogo";

import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [activeAsideBar, setActiveAsideBar] = useState(false);
  let toggleAsideBarActive = activeAsideBar ? " showAsideBar" : "";
  const handleClickShowAsideBar = () => {
    setActiveAsideBar(!activeAsideBar);
  };

  const handleClickCloseAsideBar = () => {
    setActiveAsideBar(!activeAsideBar);
  };
  return (
    <div className="NavBar flex justify-between items-center">
      <NavBarLogo />
      <ul className="NavBar-list flex justify-center items-center gap-6">
        <li className="Dashboard flex justify-center items-center">
          <a href="/">Dashboard</a>
        </li>
        <li className="Wallet flex justify-center items-center">
          <a href="/Wallet">Wallet</a>
        </li>
        <li className="Send flex justify-center items-center">
          <a href="#">Operation</a>
          <ul className="Operation-send flex justify-center items-center">
            <li className="first-operation flex justify-center items-center">
              <a href="/Send" className="text-black">
                <span>Send</span>
              </a>
            </li>
            <li className="second-operation flex justify-center items-center">
              <a href="/Request">
                <span>Request</span>
              </a>
            </li>
            <li className="third-operation flex justify-center items-center">
              <a href="/Withdraw">
                <span>Withdraw</span>
              </a>
            </li>
          </ul>
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
      <div className={`AsideBar${toggleAsideBarActive}`}>
        <div className="AsideBar-image-profile"></div>
        <div className="profile-description mt-4 flex flex-col gap-2">
          <span className="text-center">Name</span>
          <span className="text-center">ID</span>
        </div>
        <div className="profile-form flex flex-col gap-6">
          <div className="profile-item flex flex-col gap-2">
            <span>Email</span>
            <p>moumenkhaldi26@gmail.com</p>
          </div>
          <div className="profile-item flex flex-col gap-2">
            <span>Phone Number</span>
            <p>+213 791 46 78 48</p>
          </div>
          <div className="profile-item flex flex-col gap-2">
            <span>Adress</span>
            <p>1234 Elm Street Springfield, IL 62701 DZ</p>
          </div>
        </div>
        <div className="AsideBar-button-class flex justify-end">
          <button>Log out</button>
        </div>

        <div className="AsideBar-close-button flex justify-center items-center">
          <AiOutlineClose className="icon" onClick={handleClickCloseAsideBar} />
        </div>
      </div>
    </div>
  );
}
