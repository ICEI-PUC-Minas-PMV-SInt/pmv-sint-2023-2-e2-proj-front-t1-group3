import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import CadastroUsuario from "./pages/CadastroUsuario"
import Login from "./pages/Login"
import "./EstiloGeralApp.css"
import PerfilDoAnimal from "./pages/PerfilDoAnimal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="/doe-um-bichinho" element={<Login />} />   
          <Route path="/login" element={<Login />} /> 
          <Route path="/perfil-do-animal" element={<PerfilDoAnimal />} />            
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
