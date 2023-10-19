import {  useEffect } from "react";
import { useChekRoleWasSelected } from "../hooks/checkRoleWasSelected";
import Attention from "./Attention";
import Tickets from "./Tickets";
import useWebSocket from "react-use-websocket";

export default function Container (){ 
  useChekRoleWasSelected()
  const role = window.localStorage.getItem('role')
  
  const {lastMessage} = useWebSocket('ws://localhost:8080/websocket', {
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: () => true,
    onMessage: (event) =>  console.log(event)
  })
 
  useEffect(()=>{

  },[])

  return (
    <div className="w-full h-full box-border flex flex-col">
    <nav className=" "> <h2 className="text-2xl">{role === 'Creation'? "Tickets" : "Atención"}</h2></nav>
    <div className="flex flex-row w-full h-full">
      <div className="w-full">
        {role === 'Creation'? <Tickets /> : <Attention />}
      </div>
      <section className=" w-64">{lastMessage}</section>
    </div>

    </div>
  )

}