import { createContext, useContext, useEffect, useState } from "react";
import { LoginService } from "../services/LoginService";
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(sessionStorage.getItem("user"))
  );
  const { verify } = LoginService();
  const sendToken = async (token) => {
    const user = await verify(token);
    sessionStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };
  useEffect(() => {
    if (!user) {
      const token = window.localStorage.getItem("token");
      sendToken(token);
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("Contexto faltante");
  return context;
};
