import { useNavigate } from "react-router-dom"


export default function SelectionRole() {
  const navigate = useNavigate()

  const changeRole = (role) =>{
    window.localStorage.setItem('role',role)
    if(role === 'Creation') navigate('/tickets')
    if(role === 'Client') navigate('/tickets')

  }

  return (
    <section className='w-full h-full text-white flex items-center justify-center gap-12'>
      <button className='bg-primary  w-48 text-center  p-4 rounded-md cursor-pointer hover:scale-105 duration-200' onClick={()=>changeRole('Creation')}>
        Creación de Tickets
      </button>
      <button className='bg-primary  w-48 text-center  p-4 rounded-md cursor-pointer hover:scale-105 duration-200' onClick={()=>changeRole('Client')}>
        Atención
      </button>
    </section>
  )
}