import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Listado() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("item");

    if(token === null) {
      navigate("/")
    }
  }, [navigate])

  return (
    <h2>Listado</h2>
  )
}

export default Listado;