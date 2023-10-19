import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function useChekRoleWasSelected () {
  const navigate = useNavigate()
  useEffect(() => {
    if(!window.localStorage.getItem('role')) navigate("/seleccion")
  },[])
}