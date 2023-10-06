import { AuthContext } from "../context/Authcontext"; // Make sure the path to AuthContext is correct
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuthContext must be used inside an AuthContextProvider");
    }

    return context;
};
