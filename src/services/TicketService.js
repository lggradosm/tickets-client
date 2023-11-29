export const TicketService = () => {
  const API_URL = `${import.meta.env.VITE_API_URL}/tickets`;

  const getTickets = async () => {
    const res = await fetch(API_URL);
    const data = (await res.json()) || null;
    return data;
  };

  const createTicket = async () => {
    const res = await fetch(`${API_URL}/create`);
    const data = (await res.json()) || null;
    return data;
  };

  const nextTicket = async () => {
    const res = await fetch(`${API_URL}/next`);
    const data = (await res.json()) ?? null;
    return data;
  };

  const clearQueue = async () => {
    const res = await fetch(`${API_URL}/clear`);
    const data = (await res.json()) || null;
    return data;
  };

  const setTicket = async (ticketId) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticketId),
    };
    const res = await fetch(`${API_URL}`, options);
    const data = (await res.json()) || null;
    return data;
  };

  return { getTickets, createTicket, nextTicket, clearQueue, setTicket };
};
