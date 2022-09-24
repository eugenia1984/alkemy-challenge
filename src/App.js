import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.js";
import Listado from "./components/listado/Listado.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
