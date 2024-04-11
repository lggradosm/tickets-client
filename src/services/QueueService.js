export const QueueService = () => {
  const API_URL = `${import.meta.env.VITE_API_URL}/queues`;
  const getTickets = async (procedureId) => {
    const res = await fetch(`${API_URL}/${procedureId}`);
    const data = (await res.json()) || null;
    return data?.ticket;
  };

  const nextTicket = async (procedureId) => {
    const res = await fetch(`${API_URL}/next/${procedureId}`);
    const data = (await res.json()) || null;
    return data;
  };

  const resetTickets = async (password) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({password:password}),
    };
    const res = await fetch(`${API_URL}/reset`, options);
    const data = (await res.json()) || null;
    return data;
  }

  return { getTickets, nextTicket,resetTickets };
};
