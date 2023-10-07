import React, { useEffect, useState } from "react";
import NavBarLogo from "../components/NavBarLogo";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";

export default function BankAccount() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [BankData, setBankData] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankID, setBankID] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");
  const handleBankChange = (e) => {
    const selectedOption = e.target.value;
    const selectedID =
      e.target.options[e.target.selectedIndex].getAttribute("data-id");

    setBankName(selectedOption);
    setBankID(selectedID);
  };
  // Fetch Bank Data
  useEffect(() => {
    const fetchBankData = async () => {
      if (user?.token !== undefined) {
        await fetch(`http://localhost:8000/Bank`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response
              .json()
              .then((data) => {
                setBankData(data);
              })
              .catch((error) => {
                console.error("Error fetching Bank data:", error);
              });
          } else {
            console.error("Error resieving Bank date", response.error);
          }
        });
      }
    };
    fetchBankData();
  }, [BankData, user?.token]);
  const GoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  }
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
              <label>Account number</label>
              <input type="text" />
            </div>
            <div className="input-item flex flex-col gap-2">
              <label>Bank name</label>
              <select type="text" onChange={handleBankChange}>
                <option>Select a bank</option>
                {BankData &&
                  BankData?.map((Data) => (
                    <option key={Data?.id} value={Data?.Name}>
                      {Data?.Name}
                    </option>
                  ))}
              </select>
            </div>
            
          </div>

          <div className="button flex flex-col gap-4">
            <input
              className="Bank-btn agree-btn"
              type="submit"
              value="Agree and link"
            />
            <button className="Bank-btn cancel-btn" onClick={GoBack}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
