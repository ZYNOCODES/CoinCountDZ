import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Send from "./pages/SendPayment";
import Activity from "./pages/Activity";
import { useAuthContext } from "./hooks/useAuthContext";
import Operation from "./pages/Operation";
import SendPayment from "./pages/SendPayment";
import RequestPayment from "./pages/RequestPayment";
import Withdraw from "./pages/Withdraw";
import Bank from "./pages/BankAccount";
import Login from "./pages/LoginPage";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route
            path="/"
            element={!user ? <Login /> : <Navigate to="/Dashboard" />}
          ></Route>
          <Route
            path="/Dashboard"
            element={user ? <Home /> : <Navigate to="/" />}
          ></Route>
          <Route path="/Wallet" element={<Wallet />}></Route>
          <Route path="/Operation" element={<Operation />}></Route>
          <Route path="/Activity" element={<Activity />}></Route>
          <Route path="/Send" element={<SendPayment />}></Route>
          <Route path="/Request" element={<RequestPayment />}></Route>
          <Route path="/Withdraw" element={<Withdraw />}></Route>
          <Route path="/LinkBank" element={<Bank />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
