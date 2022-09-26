import axios from "axios";
import swAlert from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Login.css";

function LoginForm () {
  const [loading, setLoading ] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regExEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email === "" || password === "") {
      swAlert.fire(`<h2>Los campos no pueden estar vacíos</h2>`);
      return;
    }

    if(email !== "" && !regExEmail.test(email)) {
      swAlert.fire(`<h2>Debes escribir una dirección de correo electrónico válida</h2>`);
      return;
    }

    if(email !== "challenge@alkemy.org" ||
      password !== "react")  {
        swAlert.fire(`<h2>Credenciales inválidas</h2>`);
        return;
    }

    setLoading(true);
    console.log("Ok estamos listos para enviar la información");

    axios
      .post("http://challenge-react.alkemy.org", {email, password})
      .then(res => {
        swAlert.fire("Felicitaciones", "Ingresaste correctamente","success");
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        navigate("/listado");
        swAlert.fire(`<h2>Login correcto</h2>`)
      })
      .catch(error => console.log(error.message))
      .finally(setLoading(false))
  }

  if(loading) return <h1>Cargando</h1>

  return (
    <form onSubmit={submitHandler} className="form">
      <label>
        <span>E-mail:</span>
        <input 
          type="text" 
          name="email"
          placeholder="E-mail"
        />
      </label>  
      <label>
        <span>Password:</span>
        <input
          type="password"
          name="password" 
          placeholder="Password"
        />
      </label>
      <div className="btn-container">
        <button type="submit" className="btn-login">Ingresar</button>
      </div>
    </form> 
  );
}

export default LoginForm;