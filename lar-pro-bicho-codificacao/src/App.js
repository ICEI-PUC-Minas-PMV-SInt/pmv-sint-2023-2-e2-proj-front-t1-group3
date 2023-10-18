import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import CadastroUsuario from "./pages/CadastroUsuario"
import Login from "./pages/Login"
import "./EstiloGeralApp.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="/doe-um-bichinho" element={<Login />} />   
          <Route path="/login" element={<Login />} />             
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
