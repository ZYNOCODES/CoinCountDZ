import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import BankAccount from "./pages/BankAccount";
import SendPayment from "./pages/SendPayment";
import Activity from "./pages/Activity";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Wallet" element={<Wallet />}></Route>
          <Route path="/Send" element={<SendPayment />}></Route>
          <Route path="/Activity" element={<Activity />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
