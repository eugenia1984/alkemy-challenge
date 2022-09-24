import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.js";
import Listado from "./components/listado/Listado.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
