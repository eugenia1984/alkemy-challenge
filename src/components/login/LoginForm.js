function LoginForm () {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regExEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email === "" || password === "") {
      console.warn("Los campos no pueden estar vacíos");
      return;
    }

    if(email !== "" && !regExEmail.test(email)) {
      console.warn("Debes escribir una dirección de correo electrónico válida");
      return;
    }

    if(email !== "challenge@alkemy.org" ||
      password !== "react")  {
        console.warn("Credenciales inválidas");
        return;
    }

    console.log("Ok estamos listos para enviar la información");
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <span>E-mail:</span>
        <input 
          type="email" 
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