export const QueueService = () => {
  const API_URL = `${import.meta.env.VITE_API_URL}/queues`;
  const getTickets = async (procedureId) => {
    console.log("procedure", procedureId);
    const res = await fetch(`${API_URL}/${procedureId}`);
    const data = (await res.json()) || null;
    console.log(data);
    return data?.ticket;
  };

  const nextTicket = async () => {};
  return { getTickets, nextTicket };
};
