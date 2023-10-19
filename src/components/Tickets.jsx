import {  useState } from "react"
import { useChekRoleWasSelected } from "../hooks/checkRoleWasSelected"

export default function Tickets() {
  const [clientOrder, setClientOrder] = useState(null)
  useChekRoleWasSelected()

  const createTicket = async () =>{
    const body = {"area":"Arq"}
    const res = await fetch('http://localhost:8080/api/v1/tickets/create', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body) 
    })
    const data = await res.json() || null
    setClientOrder(data)


  }

  return(
    <section className="h-full flex flex-col select-none p-4">
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <h3 className="font-bold text-6xl">Cliente</h3>
        <p className="text-6xl">{clientOrder?.id}</p>
        <button className="bg-primary text-white p-4 rounded-lg w-60 text-2xl hover:scale-105 duration-200" onClick={createTicket}>Generar siguiente</button>
      </div>
    </section>
  )
}