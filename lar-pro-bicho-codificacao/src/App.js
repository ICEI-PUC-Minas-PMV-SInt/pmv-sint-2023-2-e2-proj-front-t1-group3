import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import CadastroUsuario from "./pages/CadastroUsuario"
import "./EstiloGeralApp.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
