import {  useState } from "react"
import { useChekRoleWasSelected } from "../hooks/checkRoleWasSelected"
import { TicketService } from "../services/TicketService"
import Button from "./Button"
import Modal from "./Modal"
export default function Tickets() {
  const [clientOrder, setClientOrder] = useState(null)
  const {createTicket,clearQueue } = TicketService()
  const [visible, setVisible] = useState(false)

  useChekRoleWasSelected()

  const create = async() =>{
    const data = await createTicket()
    setClientOrder(data)
  }

  const clear = async () =>{
    const data = await clearQueue()
    setClientOrder(data)
  }

  const toggleModal = () => {
    setVisible(prev => !prev)
  }

 

  return(
    <section className="h-full flex flex-col select-none p-4  border-r-2  border-black/10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl mb-6 md:text-4xl font-bold">Tickets</h2>
        <Button name={'Limpiar'}  onclick={toggleModal}/>

      </div>
      <div className="h-full flex flex-col  justify-center items-center gap-4 ">
      <div className="shadow-[0_0_2px_rgba(0,0,0,0.4)] bg-white flex justify-center flex-col items-center p-10 py-20 w-[35rem] rounded-lg gap-10">
        <div className="flex gap-4 ">
          <h3 className="text-4xl md:text-5xl ">Cliente -</h3>
          <p className="font-bold text-4xl md:text-6xl ">{clientOrder?.id}</p>
        </div>
        <Button name={'Generar Ticket'}  onclick={create}/>
      </div>
      </div>
      {visible && <Modal onclick={toggleModal}/>}
    </section>
  )
}