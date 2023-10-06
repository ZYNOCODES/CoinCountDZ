import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Send from "./pages/SendPayment";
import Activity from "./pages/Activity";
import Login from "./pages/loginPage";
import { useAuthContext } from "./hooks/useAuthContext";

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
          <Route path="/Send" element={<Send />}></Route>
          <Route path="/Activity" element={<Activity />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
