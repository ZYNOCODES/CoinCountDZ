import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/loginPage";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/Dashboard" element={user ? <Home /> : <Navigate to="/" />}></Route>
          <Route path="/" element={!user ? <Login /> : <Navigate to="/Dashboard" />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
