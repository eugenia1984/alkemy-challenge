import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Listado.css";

function Listado() {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuth(!token);
  }, [navigate]);

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);
  
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