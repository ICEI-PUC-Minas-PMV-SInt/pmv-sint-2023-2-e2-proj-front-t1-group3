import "./TemplateSPA.css";
import "./Home.css";
import "./PerfilDoAnimal.css";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Pipoca from "../assets/imgs/pipoca.jpg";
import Cachorro from "../assets/imgs/icone_cachorro.svg";
import Pequeno from "../assets/imgs/icone_p.svg";
import Masculino from "../assets/imgs/icone_m.svg";
import Branco from "../assets/imgs/icone_branco.svg";
import Denuncia from "../assets/imgs/icone_denuncia.svg";
import Email from "../assets/imgs/icone_email.svg";
import Telefone from "../assets/imgs/icone_tel.svg";
import Wpp from "../assets/imgs/icone_whatsapp.svg";
import Ong from "../assets/imgs/ong-amor-animal.png";
import Chat from "../assets/imgs/icone_chat.svg";
import SemFoto from "../assets/imgs/sem-foto.png";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";

function Comentario({ comentario }) {

  function parseDate(horario) {
    const date = new Date(horario);
    const horas = date.getHours();
    const minutos = date.getMinutes();
    const dia = date.getDate();
    const mes = date.getMonth();
    const ano = date.getFullYear();
    
    return `${horas}:${minutos}, ${dia}/${mes + 1}/${ano}`
  }

  return (
    <div className="divComentarios">
    <div className="fotoPessoa">
      <img src={SemFoto} alt="pessoa" />
    </div>
    <div>
      <h6>{comentario.nomePessoa}</h6>
      <p className="horarioComentario">{parseDate(comentario.horario)}</p>
      <p>{comentario.comentarioPessoa}</p>
    </div>
    </div>
  );
}

function Comentarios({ comentarios }) {
  return (
    <div id="div_comentarios">
      {comentarios.map((comentario , index) => (
        <Comentario key={index} comentario={comentario} />
      ))}
    </div>
  );
}

function PerfilDoAnimal() {
  //estiliza os ícones do instagram e facebook
  let iconStyle = { fontSize: "24px" };

  //recupera os itens do localStorage

  const [comentarios, setComentarios] = useState(
    JSON.parse(localStorage.getItem("comentarios") || "[]")
  );
  //useState para capturar os elementos onChange
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  console.log(comentarios);

  function comentar() {
    if (nome == "" || comentario == "") {
      alert("Por favor preencha todos os campos para comentar");
    } else {
      setComentarios((comentariosAnteriores) => {
        const comentariosAtuais = [
          ...comentariosAnteriores,
          { nomePessoa: nome, comentarioPessoa: comentario, horario: (new Date()).toString() },
        ];
        localStorage.setItem("comentarios", JSON.stringify(comentariosAtuais));
        return comentariosAtuais;
      });
      setNome("");
      setComentario("");
    }
  }

  return (
    <div className="container">
      <header id="header">
        <Header />
      </header>

      <aside id="aside">
        <Aside />
      </aside>

      <main id="main">
        <div className="selecioneEstado">
          <h2>Selecione seu Estado:</h2>
          <a href="#">AC</a>
          <a href="#">AL</a>
          <a href="#">AM</a>
          <a href="#">AP</a>
          <a href="#">BA</a>
          <a href="#">CE</a>
          <a href="#">DF</a>
          <a href="#">ES</a>
          <a href="#">GO</a>
          <a href="#">MA</a>
          <a href="#">MG</a>
          <a href="#">MS</a>
          <a href="#">MT</a>
          <a href="#">PA</a>
          <a href="#">PB</a>
          <a href="#">PE</a>
          <a href="#">PI</a>
          <a href="#">PR</a>
          <a href="#">RJ</a>
          <a href="#">RN</a>
          <a href="#">RO</a>
          <a href="#">RR</a>
          <a href="#">RS</a>
          <a href="#">SC</a>
          <a href="#">SE</a>
          <a href="#">SP</a>
          <a href="#">TO</a>
        </div>
        <div className="div_secoes">
          <section className="secao_animal" id="secaoAnimal">
            <div className="perfil_animal">
              <div className="pipoca_grande">
                <img src={Pipoca} alt="Pipoca" />
              </div>
              <div className="coluna_fotos">
                <img src={Pipoca} alt="Pipoca" />
                <img src={Pipoca} alt="Pipoca" />
                <img src={Pipoca} alt="Pipoca" />
                <img src={Pipoca} alt="Pipoca" />
                <img src={Pipoca} alt="Pipoca" />
              </div>
              <div className="perfil_animal_caracteristicas">
                <div className="nome_endereco_animal">
                  <h1>Pipoca</h1>
                  <h3>Marília / SP</h3>
                </div>
                <div className="caracteristicas_animal">
                  <div className="especifico_animal">
                    <h2>Tipo de animal</h2>
                    <img src={Cachorro} alt="Cachorro" />
                  </div>
                  <div className="especifico_animal">
                    <h2>Porte</h2>
                    <img src={Pequeno} alt="Pequeno" />
                  </div>
                  <div className="especifico_animal">
                    <h2>Sexo</h2>
                    <img src={Masculino} alt="Masculino" />
                  </div>
                  <div className="especifico_animal">
                    <h2>Cor da pelagem</h2>
                    <img src={Branco} alt="Branca" />
                  </div>
                </div>
                <div className="descricao_animal">
                  <h2>Descrição</h2>
                  <p>
                    Super dócil, carinhoso e amigável, foi encontrado na Av. dos
                    Estados. Aguardando um dono na ONG Amor Animal.
                  </p>
                </div>
                <div className="div_social">
                  <FaFacebookSquare style={iconStyle} />
                  <FaInstagramSquare style={iconStyle} />
                  <h2>Compartilhe nas redes sociais</h2>
                </div>
              </div>
            </div>
            <div className="secao_comentarios">
              <h2>
                O que achou deste animalzinho? Deixe seu comentário abaixo!
              </h2>
              <input
                placeholder="Nome"
                id="espaco_nome"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              />
              <textarea
                id="espaco_comentario"
                onChange={(e) => setComentario(e.target.value)}
                value={comentario}
              />
              <button onClick={comentar}>Comentar</button>
            </div>
            <Comentarios comentarios={comentarios} />
          </section>

          <section className="secao_responsavel" id="secaoResponsavel">
            <div className="perfil_responsavel">
              <h1>
                Contato <br /> Responsável
              </h1>
              <h4>ONG Amor Animal</h4>
              <ul>
                <li>O.N.G</li>
              </ul>
              <img src={Ong} alt="ONG" />
            </div>
            <div className="info_responsavel">
              <div className="icone_info">
                <img src={Wpp} alt="Whatsapp" />
                <p>(11)99615-2237</p>
              </div>
              <div className="icone_info">
                <img src={Telefone} alt="Telefone" />
                <p>(11)2548-1933</p>
              </div>
              <div className="icone_info">
                <img src={Email} alt="Email" />
                <p>contato@amoranimal.com.br</p>
              </div>
              <div className="icone_info">
                <img src={Chat} alt="Chat" />
                <p>Chat</p>
              </div>
              <div className="icone_info">
                <img src={Denuncia} alt="Denúncia" />
                <p>Denunciar perfil</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PerfilDoAnimal;
