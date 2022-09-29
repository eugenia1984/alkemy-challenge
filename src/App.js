import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import List from "./components/list/List.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container my-5 mx-2">
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/listado" element={<List />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
