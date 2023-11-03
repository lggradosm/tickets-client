import { useRef } from "react"
import Button from "./Button"
import {TicketService} from "../services/TicketService"
export default function Modal ({onclick}) {
  const inputRef = useRef(null);
  const {setTicket} = TicketService()
  const save = () => {
    const ticketId = inputRef.current.value
    if(ticketId > 0)
      setTicket({id: ticketId})
    onclick()
  }
  return <div className="absolute  w-screen h-screen left-0 top-0 flex justify-center items-center" >
    <div className="bg-neutral-900/50 cursor-pointer absolute left-0 top-0 w-screen h-screen "onClick={onclick}/>
    <div className=" bg-white rounded-md p-10 z-10">
      <div className="flex gap-2 items-center mb-10">
        <p>Empezar en:</p>
        <input ref={inputRef} className="outline-none p-3 border-2 rounded-md" placeholder="Número de Ticket" type="number" />
      </div>
      <div className="flex justify-center">
      <Button name={'Guardar'}  onclick={save}/>

      </div>

    </div>
  </div>
}