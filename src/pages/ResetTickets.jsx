import { useState } from "react"
import Button from "../components/Button"
import { QueueService } from "../services/QueueService"
import Input from "../components/Input"
import {LockClosedIcon} from "@heroicons/react/24/solid"
export default function ResetTickets (){
  const queueService = QueueService()
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const onchangeHandler = (event) => {
    const value = event.target.value
    setPassword(value)
  }

  const onclickHandler = async () => {
    if(password !== ""){
      const res = await queueService.resetTickets(password);
      if(res === 200){
        setMessage("Los contadores fueron reiniciados")
      }else{
        setMessage("Contraseña incorrecta")
      }
    }
  
  };

  return <div className="w-full page pt-4 ">
    <div className="w-full md:w-[600px] mx-auto  ">
      <h2 className="font-bold text-xl md:text-2xl uppercase">Reiniciar Tickets</h2>
      <div className="flex md:flex-row flex-col">
      <div className="w-full flex flex-col items-end md:flex-row gap-4 ">
        <Input onChange={(event)=> onchangeHandler(event)} type="password" value={password} placeholder="Contraseña"  />
        {/* <input onChange={(event)=> onchangeHandler(event)} type="password" value={password} placeholder="Contraseña" className="w-full outline-none border-[1px] rounded-md p-2"/> */}
      <div className="w-full">
      <button className="bg-primary h-10  text-sm flex items-center justify-center  rounded-md text-white px-10 w-full md:w-fit" onClick={onclickHandler}>Reiniciar</button>
      </div>
      </div>
      
    </div>
      <span className={`text-sm ${message === "Contraseña incorrecta"?"text-red-500":"" }`}>{message}</span>
    </div>   
  </div>
}