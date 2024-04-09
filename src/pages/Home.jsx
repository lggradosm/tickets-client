import { Route, Routes, Navigate,useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Tickets from "./Tickets";

import {  useUserContext } from "../context/UserContext";
import { useEffect } from "react"
export default function Home() {
  const {authenticated} = useUserContext()
  const navigate = useNavigate();
  const procedureId = window.localStorage.getItem("procedure")
 
  useEffect(()=>{
    if (!procedureId) {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      navigate("/login")
    }
  },[])

    return (
        <section className="w-screen h-screen flex">
          <Sidebar />
          <div className="w-full h-full ">
            <Routes>
              <Route path="/" element={<Tickets />} />
            </Routes>
          </div>
        </section>
    );
}
