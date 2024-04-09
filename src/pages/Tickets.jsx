import { useEffect, useState } from "react";

import socketIoClient from "socket.io-client";
import { QueueService } from "../services/QueueService";
import { useUserContext } from "../context/UserContext";
import ProceduresService from "../services/ProceduresService"

export default function Tickets() {
  const [client, setClient] = useState(null);
  const { nextTicket, getTickets } = QueueService();
  const [queue, setQueue] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const [procedure, setProcedure] = useState([]);
  const procedureId = window.localStorage.getItem("procedure")


  const next = async () => {
    const data = await nextTicket(procedureId);
    setClient(data);
  };

  const getProcedure = async() => {
    if (procedureId) {
      const data = await ProceduresService().getById(procedureId);
      setProcedure(data);
    }
  }

  const getAll = async () => {
    const data = await getTickets(procedureId);
    setQueue(data);
  };

  const joinRoom = (roomName, socket) => {
    socket.emit('joinRoom', roomName);
  };
  
  useEffect(() => {
      const socket = socketIoClient(API_URL);
      getAll();
      getProcedure();
      joinRoom(procedureId, socket)
      socket.on("queue", (data) => {
        setQueue(data.ticket);
        console.log(data.ticket);
      });
      return () => {
        socket.disconnect();
      };
  }, []);

  if (!queue || !procedure)
    return <div>Cargando</div>;
  return (
    <div className="flex page">
      <section className="h-full w-full select-none  flex flex-col  border-r-2  border-black/10 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {procedure.name}
        </h2>
        {/* <span>{thereAreClients? "Clientes en espera":"No hay clientes"}</span> */}
        <div className="h-full flex flex-col justify-center items-center gap-6">
          <div className="shadow-[0_0_2px_rgba(0,0,0,0.4)] bg-white flex justify-center flex-col items-center p-10  w-[35rem]  py-20 rounded-lg gap-10">
            <div className="flex gap-4 items-center">
              <h3 className="text-4xl md:text-5xl">Cliente -</h3>
              {client?._id ? (
                <p className="font-bold text-4xl md:text-6xl">{client?.code}</p>
              ) : (
                <p className="font-bold text-3xl">No seleccionado</p>
              )}
            </div>

            <button
              className={`bg-primary text-white p-3 rounded-lg w-60 text-2xl hover:scale-105 duration-200`}
              onClick={next}
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>
      <div className="w-full h-f md:w-1/3 lg:w-1/4 flex flex-col justify-between ">
        <section className="bg-white w-full flex flex-col p-4">
          <div className="flex justify-between">
            <span>Total {queue.length}</span>
          </div>
          {queue?.slice(0, 10).map((ticket, index) => (
            <span
              key={index}
              className="p-3  odd:bg-neutral-100 flex justify-center text-xl "
            >
              {ticket?.code}
            </span>
          ))}
        </section>
      </div>
    </div>
  );
}
