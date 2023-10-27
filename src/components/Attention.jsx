import { useEffect, useState } from "react"

export default function Attention(){
  const [client, setClient] = useState(null)
  const nextClient = async ()=> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/tickets/next`)
    const data = await  res.json()??null
    setClient(data)
  }

  const getClients = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/tickets`)
    const data = await res.json() || []
    console.log(data)
  }

  useEffect(()=>{
getClients()
  },[])
    return (
    <section className="h-full select-none  flex flex-col p-4  border-r-2  border-black/10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Atención de clientes</h2>
      {/* <span>{thereAreClients? "Clientes en espera":"No hay clientes"}</span> */}
      <div className="h-full flex flex-col justify-center items-center gap-6">
      <div className="shadow-[0_0_2px_rgba(0,0,0,0.4)] bg-white flex justify-center flex-col items-center p-10  w-[35rem]  py-20 rounded-lg gap-10">

        <div className="flex gap-4 items-center">
          <h3 className="text-4xl md:text-5xl">Cliente -</h3>
          {
            client?.id? <p className="font-bold text-4xl md:text-6xl">{client?.id}</p> : <p className="font-bold text-3xl">No seleccionado</p>
          }
        </div>

        <button  className={`bg-primary text-white p-3 rounded-lg w-60 text-2xl hover:scale-105 duration-200`} onClick={nextClient}>Siguiente</button>
      </div>
      </div>
    </section>
  )
}