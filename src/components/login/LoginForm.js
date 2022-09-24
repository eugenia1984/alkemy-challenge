import axios from "axios";
import swAlert from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginForm () {
  
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

    console.log("Ok estamos listos para enviar la información");
    axios
      .post("http://challenge-react.alkemy.org", {email, password})
      .then(res => {
        swAlert.fire("Perfecto, ingresaste correctamente");
        console.log(res.data);
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
      })
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <span>E-mail:</span>
        <input 
          type="text" 
          name="email"
        />
      </label>  
      <br />
      <label>
        <span>Password:</span>
        <input
          type="password"
          name="password" 
        />
      </label>
      <br />
      <button
        type="submit"
      >
        Ingresar
      </button>
    </form> 
  );
}

export default LoginForm;