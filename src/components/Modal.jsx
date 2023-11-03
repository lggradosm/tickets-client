import { useRef } from "react"
import Button from "./Button"
import {TicketService} from "../services/TicketService"
import {XMarkIcon} from '@heroicons/react/24/solid'
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
    <div className="relative bg-white rounded-md z-10 ">
      <div className="flex justify-end items-center  p-4">
        <XMarkIcon className="w-8 right-4 p-1 cursor-pointer" onClick={onclick}/>

      </div>
      <div className=" pt-2 pb-10 px-16">
        <div className="flex flex-col gap-2  mb-4  w-full">
          <p>Reiniciar los tickets:</p>
          <input autoFocus ref={inputRef} className="outline-none p-3 border-2 rounded-md" placeholder="Número de ticket" type="number" />
        </div>
        <div className="flex justify-center w-full">
         <Button name={'Reiniciar'}  onclick={save}/>
        </div>
      </div>

    </div>
  </div>
}