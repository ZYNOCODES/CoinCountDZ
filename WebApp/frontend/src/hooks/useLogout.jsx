import React from "react";
import { useAuthContext } from "./useAuthContext";

const UseLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // Remove the user from local storage
    localStorage.removeItem("user");

    // Dispatch the logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default UseLogout;
