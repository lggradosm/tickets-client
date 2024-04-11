import { useState } from "react"
import Button from "../components/Button"

export default function ResetTickets (){
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const onchangeHandler = (event) => {
    const value = event.target.value
    setPassword(value)
  }

  const onclickHandler = async () => {
    if(password !== ""){
      const res = await resetTickets(password);
      if(res === 200){
        setMessage("Los contadores fueron reiniciados")
      }else{
        setMessage("Contraseña incorrecta")
      }
    }
  
  };

  return <div className="w-full ">
    <div className="w-full md:w-[600px] mx-auto ">
      <div className="w-full flex gap-4 mt-4">
      <input onChange={(event)=> onchangeHandler(event)} type="password" value={password} placeholder="Contraseña" className="w-full outline-none border-[1px] rounded-md p-2"/>
      <button className="bg-primary p-2 rounded-md text-white px-10" onClick={onclickHandler}>Reiniciar</button>
      </div>
      <span>{message}</span>
    </div>   
  </div>
}