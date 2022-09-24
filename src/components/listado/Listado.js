import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Listado.css";

function Listado() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)

    if (token===null) {
      navigate("/");
    } // eslint-disable-next-line 
  }, []);
  
  const handlerClick = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <h2 className="listado-title">Listado</h2>
      <div className="btn-container">
        <button onClick={handlerClick} className="btn-listado">Cerrar</button>
      </div>
    </>
  );
}

export default Listado;