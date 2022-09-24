import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.js";
import Listado from "./components/listado/Listado.js";

function App() {
  return (
    <div classNAme="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </div>
  );
}

export default App;
