import { useNavigate } from "react-router-dom"

export default function Navbar () {
  const navigate = useNavigate()

  const change = () => {
    window.localStorage.clear()
    navigate("/seleccion")
  }

  return (
    <nav className="bg-primary  flex items-center justify-between p-3 text-white">
      <img src="/images/logo.png" alt="" className="w-32"/>
      <span className="cursor-pointer" onClick={change}>Cambiar</span>
    </nav>
  )
}