import { Link } from "react-router-dom";
import Login from "../login/Login.jsx";
import Listado from "../listado/Listado.jsx";

function Header () {

  return(
    <header>
      <nav>
        <ul>
          <Link path="/" element={<Login />} />
          <Link path="/listado" element={<Listado />}/>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;