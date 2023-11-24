import Attention from "./Attention";
import Tickets from "./Tickets";
import { useChekRoleWasSelected } from "../hooks/checkRoleWasSelected";
import { useEffect, useState } from "react";
import socketIoClient from "socket.io-client";
import Navbar from "./Navbar";
import { TicketService } from "../services/TicketService";

export default function Container() {
  const role = window.localStorage.getItem("role");
  const [queue, setQueue] = useState([]);
  const { getTickets } = TicketService();
  const API_URL = import.meta.env.VITE_API_URL;
  useChekRoleWasSelected();

  const getAll = async () => {
    const data = await getTickets();
    setQueue(data);
    console.log("hola");
  };

  useEffect(() => {
    const socket = socketIoClient(API_URL);
    getAll();
    socket.on("queue", (data) => {
      setQueue(data);
    });
    return () => {
      socket.off("queue");
    };
  }, []);

  return (
    <div className="bg-neutral-100 w-full h-full box-border flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="w-full bg-">
          {role === "Creation" ? <Tickets /> : <Attention />}
        </div>
        <section className="bg-white w-full md:w-1/3 lg:w-1/4 flex flex-col p-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">Cola de atención:</h2>{" "}
            <span>Total {queue.length}</span>
          </div>
          {queue.slice(0, 10).map((ticket, index) => (
            <span
              key={index}
              className="p-3  odd:bg-neutral-100 flex justify-center text-xl "
            >
              {ticket?.id}
            </span>
          ))}
        </section>
      </div>
    </div>
  );
}
