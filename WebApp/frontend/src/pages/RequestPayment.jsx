import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RequestPayment() {
  const notify = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);
  const { user } = useAuthContext();
  const [BankData, setBankData] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankID, setBankID] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");
  const [Amount, setAmount] = useState("");
  const [Telephone, setTelephone] = useState('');

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
  const submitRequestMoney = async (e) =>{
    e.preventDefault();
    const reponse = await fetch("http://localhost:8000/Bank/requestpayment", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        UserID: user?.id,
        BankID: bankID,
        AccountNumber: AccountNumber,
        Telephone: Telephone,
        Amount:Amount}),
      });

    const json = await reponse.json();

    if (!reponse.ok) {
      notify(json.message);
    }
    if (reponse.ok) {
      notifySuccess(json.message);
    }
  }
  const MakeItEmpty = async (e) =>{
    setTelephone('')
    setAccountNumber('')
    setAmount('')
    setBankID('')
  }
  return (
    <div className="RequestPayment SendPayment">
      <NavBar />
      <div className="BackAccount-container flex flex-col items-center justify-center gap-8 mt-12 pb-4">
        <h2>Request payment from</h2>
        <form className="flex flex-col gap-8" onSubmit={submitRequestMoney}>
          <div className="input-items flex flex-col gap-4">
            <div className="input-item flex flex-col gap-2">
              <label>Phone Number</label>
              <input type="number" value={Telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div className="input-item flex flex-col gap-2">
              <label>Account ID</label>
              <input type="number" value={AccountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            </div>
            <div className="input-item flex flex-col gap-2">
              <label>Amount</label>
              <div className="Amount-input-class flex items-center">
                <input type="number" value={Amount} onChange={(e) => setAmount(e.target.value)} />
                <span>DZA</span>
              </div>
            </div>
            <div className="input-item input-section flex flex-col gap-2">
              <label>Bank name</label>
              <select type="text" onChange={(e) => setBankID(e.target.value)}>
                <option>Select a bank</option>
                {BankData &&
                  BankData?.map((Data) => (
                    <option value={Data?.id}>
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
            <button className="Bank-btn cancel-btn" type="button" onClick={MakeItEmpty}>Cancel</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
