export default function ProceduresService() {
  const API_URL = `${import.meta.env.VITE_API_URL}/procedures`;


  const getAll = async () => {
    const res = await fetch(API_URL);
    const data = (await res.json()) || null;
    return data;
  }

  const getById = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    const data = (await res.json()) || null;
    return data;
  }

  return {getAll,getById}
}