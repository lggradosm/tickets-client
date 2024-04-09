import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { LoginService } from "../services/LoginService";
import ProceduresService from "../services/ProceduresService"
import useVisibility from "../hooks/useVisibility"
import useClickOutsideToClose from "../hooks/useClickOutsideToClose"
import {
  ChevronDownIcon,
} from "@heroicons/react/24/solid";import { useUserContext } from "../context/UserContext"
export default function Login() {
  const navigate = useNavigate();
  const proceduresService = ProceduresService();
  const {authenticated} = useUserContext()
  const [procedures,setProcedures] = useState([])
  const [selectedProcedure,setSelectedProcedure] = useState({_id:"",name:"SELECCIONA UNA OPCION"});
  const dropdown = useVisibility();
  const {ref} = useClickOutsideToClose(dropdown.disable);
  const procedureId = window.localStorage.getItem("procedure");



  const getProcedures = async () => {
    try {
      const data = await proceduresService.getAll();
      data.unshift({ _id: "", name: "SELECCIONA UNA OPCION" });
      setProcedures(data);
    } catch (error) {
      console.error("Error al obtener los procedimientos:", error);
    }
  }

  useEffect(() => {
    if (procedureId) navigate("/");
    else{
      getProcedures()
    }
  }, []);


  const loginHandler = async () => {
    if(selectedProcedure._id !== ""){
      window.localStorage.setItem("procedure", selectedProcedure._id);
      navigate("/");
    }
  };


  const selectProcedure = (procedure) =>{
    setSelectedProcedure(procedure)
    dropdown.disable()
  }

    return (
      <section className="bg-primary w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-[40rem]  rounded-lg p-20 flex flex-col  justify-center gap-8">
          <h3 className="text-3xl font-bold">Inicio de sesión</h3>
          {procedures && (
            <div ref={ref} className={`relative bg-white border-[1px] rounded-lg ${dropdown.visibility? "overflow-visible":"overflow-hidden"}`}>
              <div className="p-4 cursor-pointer flex justify-between" onClick={dropdown.toggle} >{selectedProcedure.name} <ChevronDownIcon className="w-4" /></div>
              <ul className="absolute bg-white w-full border-[1px] ">
                {procedures.map((procedure,index)=>(
                  <li key={index} className="p-2 cursor-pointer hover:bg-neutral-100" onClick={()=>{selectProcedure(procedure)}}>{procedure.name}</li>
                ))}
              </ul>
            </div>
          ) }
          <div className="flex justify-center items-center">
            <Button name={"Ingresar"} onclick={loginHandler} />
          </div>
        </div>
      </section>
    );
}
