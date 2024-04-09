import { createContext, useContext, useEffect, useState } from "react";
import { LoginService } from "../services/LoginService";
import ProceduresService from "../services/ProceduresService"
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [procedureActive, setProcedureActive] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  

  const logout = (navigate)=> {
    window.localStorage.removeItem("procedure");
    setProcedureActive(null);
    setAuthenticated(false);
    navigate("/login");
  }

  useEffect(() => {
    const getProcedure = async () => {
      try {
        const procedureId = window.localStorage.getItem("procedure");
        if (procedureId) {
          const data = await ProceduresService().getById(procedureId);
          setProcedureActive(data);
          setAuthenticated(true);
        }
      } catch (error) {
        console.error("Error al obtener el procedimiento:", error);
      }
    };
      getProcedure()
  }, []);
  return (
    <UserContext.Provider value={{procedureActive,authenticated,logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("Contexto faltante");
  return context;
};
