import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Listado() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
      if (token === null) {
        navigate("/");
      } // eslint-disable-next-line 
  }, []);
  
  return <h2>Listado</h2>;
}

export default Listado;