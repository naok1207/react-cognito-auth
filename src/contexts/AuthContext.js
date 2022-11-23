import { createContext, useState, useEffect, useContext } from "react";
import * as Auth from "../utils/cognito";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    const session = Auth.getSession();
    if (!session) return;
    setStatus("LoggedIn");
  }, []);

  const value = { status, setStatus };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
};
