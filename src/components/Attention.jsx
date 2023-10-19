import { useState } from "react"

export default function Attention(){
  const [client, setClient] = useState(null)
  const nextClient = async ()=> {
    const res = await fetch('http://localhost:8080/api/v1/tickets/next')
    const data = await  res.json()??null
    setClient(data)
  }
  return (
    
    <section className="h-full select-none  flex flex-col p-4">
      <div className="h-full flex flex-col justify-center items-center gap-4">
      <h3 className="font-bold text-6xl">Cliente</h3>
      <p className="text-6xl">{client?client?.id:'No hay más clientes'}</p>
      <button className="bg-primary text-white p-4 rounded-lg w-60 text-2xl hover:scale-105 duration-200" onClick={nextClient}>Siguiente</button>
      </div>
     
    </section>
  )
}