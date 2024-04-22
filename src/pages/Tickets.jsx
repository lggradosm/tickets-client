import { useEffect, useState } from "react";

import socketIoClient from "socket.io-client";
import { QueueService } from "../services/QueueService";
import { useUserContext } from "../context/UserContext";
import ProceduresService from "../services/ProceduresService";

export default function Tickets() {
  const [client, setClient] = useState(null);
  const { nextTicket, getTickets } = QueueService();
  const [queue, setQueue] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const [procedure, setProcedure] = useState([]);
  const procedureId = window.localStorage.getItem("procedure");
  const ventanilla = window.localStorage.getItem("ventanilla");
  const [connected, setConnected] = useState(false);

  const next = async () => {
    const data = await nextTicket(procedureId, ventanilla);
    setClient(data);
  };

  const getProcedure = async () => {
    if (procedureId) {
      const data = await ProceduresService().getById(procedureId);
      setProcedure(data);
    }
  };

  const getAll = async () => {
    const data = await getTickets(procedureId);
    setQueue(data);
  };

  const joinRoom = (roomName, socket) => {
    socket.emit("joinRoom", roomName);
  };

  useEffect(() => {
    const socket = socketIoClient(API_URL);
    getAll();
    getProcedure();
    joinRoom(procedureId, socket);
    socket.on("connect", () => {
      setConnected(true);
    });
    socket.on("disconnect", () => {
      setConnected(false);
    });
    socket.on("queue", (data) => {
      setQueue(data.ticket);
    });
    socket.on("reset", (data) => {
      getAll();
    });
  }, []);

  if (!queue || !procedure) return <div>Cargando</div>;
  return (
    <div className="flex md:flex-row flex-col md:page ">
      <section className="md:h-screen pt-2 md:pt-6 w-full select-none  flex flex-col  md:border-r-2  border-black/10 ">
        <h2 className="text-2xl ml-4 md:ml-6 md:text-4xl font-bold ">
          {procedure.name}
        </h2>
        <span className="text-xl ml-4 md:ml-6 font-bold mb-4 md:mb-6">
          Ventanilla {ventanilla}
        </span>
        {/* <span>{thereAreClients? "Clientes en espera":"No hay clientes"}</span> */}
        <div className="h-full flex flex-col justify-center items-center gap-6">
          <div className="shadow-[0_0_2px_rgba(0,0,0,0.4)] bg-white flex justify-center flex-col items-center md:p-12 p-6  md:w-[35rem]  md:py-20 py-8 rounded-lg gap-10">
            <div className="flex gap-4 items-center">
              <h3 className="text-xl md:text-5xl">Cliente -</h3>
              {client?._id ? (
                <p className="font-bold text-xl md:text-6xl">{client?.code}</p>
              ) : (
                <p className="font-bold text-xl md:text-3xl">No seleccionado</p>
              )}
            </div>

            <button
              className={`bg-primary text-sm text-white h-12 rounded-lg w-full  hover:scale-105 duration-200`}
              onClick={next}
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>
      <div className="w-full h-full md:h-screen md:w-1/3 lg:w-1/4 flex flex-col justify-between ">
        <section className="bg-white w-full  h-full   flex flex-col p-4">
          <div className="flex justify-between">
            <span className="md:text-xl text-md font-bold">
              TOTAL: {queue.length}
            </span>
          </div>
          {queue?.slice(0, 10).map((ticket, index) => (
            <span
              key={index}
              className="md:p-3 p-2 odd:bg-neutral-100 flex justify-center text-sm md:text-xl "
            >
              {ticket?.code}
            </span>
          ))}
        </section>
        <div
          className={`relative  flex items-center select-none justify-end pr-2 pb-2 before:content-[''] text-xs text-neutral-500 gap-1 before:w-2 before:h-2 ${
            connected ? "before:bg-green-500" : "before:bg-red-500"
          } before:animate-pulse before:rounded-full`}
        >
          {connected ? "Conectado" : "Desconectado"}
        </div>
      </div>
    </div>
  );
}
