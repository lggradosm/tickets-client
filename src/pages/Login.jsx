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
  const [ventanilla, setVentanilla] = useState("")
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
    if(selectedProcedure._id !== "" && ventanilla !== ""){
      window.localStorage.setItem("procedure", selectedProcedure._id);
      window.localStorage.setItem("ventanilla", ventanilla);
      navigate("/");
    }
  };

  const selectProcedure = (procedure) =>{
    setSelectedProcedure(procedure)
    dropdown.disable()
  }

  const onChangeVentanilla = (event) => {
    const value = event.target.value;
    setVentanilla(value)
  }


    return (
      <section className="select-none  bg-primary w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-[40rem]  rounded-lg p-10 py-20 flex flex-col  justify-center ">
          <h3 className="text-3xl font-bold mb-4">Inicio de sesión</h3>
          <div className="flex gap-4 items-end">
            <div className="flex-1 ">
            <span htmlFor="" className="font-bold">{"Procedimientos"}</span>

            {procedures && (
            <div ref={ref} className={`h-10 mt-2   relative bg-white border-[1px] rounded-lg  ${dropdown.visibility? "overflow-visible":"overflow-hidden"}`}>
              <div className="h-10 items-center px-4 cursor-pointer flex justify-between" onClick={dropdown.toggle} >{selectedProcedure.name} <ChevronDownIcon className="w-4" /></div>
              <ul className="absolute bg-white  w-full border-[1px] z-20">
                {procedures.map((procedure,index)=>(
                  <li key={index} className="h-10 cursor-pointer flex items-center px-4 hover:bg-neutral-100" onClick={()=>{selectProcedure(procedure)}}>{procedure.name}</li>
                ))}
              </ul>
            </div>
            ) 
          }
            </div>
         
          <div className="w-1/6 ">
            <Input name={"ventanilla"} value={ventanilla} onChange={onChangeVentanilla}   type="number" placeholder={"Número"} label={"Ventanilla"} />
          </div>

          </div>
         
          <div className="flex mt-6 justify-center items-center">
            <Button name={"Ingresar"} onclick={loginHandler} />
          </div>
        </div>
      </section>
    );
}
