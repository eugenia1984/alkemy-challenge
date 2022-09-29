import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardList from "./CardList.jsx";
import "./List.css";

function List () {
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
      <div className="row">
        <div className="col col-sm-6 col-md-4 col-lg-3">
          <CardList />
        </div>
      </div>
      <div className="btn-container">
        <button onClick={handlerClick} className="btn-listado">Cerrar</button>
      </div>
    </>
  );
}

export default List;