import "./TemplateSPA.css";
import "./Chat.css";
import "./Home.css";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Ong from "../assets/imgs/ong-amor-animal.png";
import Pipoca from "../assets/imgs/pipoca.jpg";
import Seta from "../assets/imgs/icone_enviar.svg";
import SemFoto from "../assets/imgs/sem-foto.png";
import { useState } from "react";

const estados = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "SP",
  "TO",
];

function SelecioneEstado() {
  return (
    <div className="selecioneEstado">
      <h2>Selecione seu Estado:</h2>
      {estados.map((estado) => (
        <a href="#">{estado}</a>
      ))}
    </div>
  );
}

function Mensagem({ mensagem }) {
  function formataHorario(horario) {
    const date = new Date(horario);
    const horas = date.getHours();
    const minutos = date.getMinutes();

    return `${horas}:${minutos}`;
  }

  return (
    <div className="div_mensagem">
      <div>
        <p>{mensagem.text}</p>
        <p className="horarioMensagem">{formataHorario(mensagem.time)}</p>
      </div>
      <img src={SemFoto} alt="pessoa" />
    </div>
  );
}

function Mensagens({ mensagens }) {
  return (
    <div className="espaco_conversa">
      {mensagens.map((mensagem) => (
        <Mensagem mensagem={mensagem} />
      ))}
    </div>
  );
}

function ContainerConversas() {
  return (
    <aside className="container_conversas">
      <h1>Conversas</h1>
      <div className="card_conversas">
        <img src={Ong} alt="Ong Amor Animal" />
        <div className="dados_conversa">
          <h3>ONG Amor Animal</h3>
          <h2>Pipoca</h2>
        </div>
      </div>
    </aside>
  );
}

function Chat() {
  const [mensagem, setMensagem] = useState("");

  const [mensagens, setMensagens] = useState(
    JSON.parse(localStorage.getItem("mensagens") || "[]")
  );

  function enviarMsg() {
    if (mensagem == "") {
      alert("Por favor escreva uma mensagem");
    } else {
      setMensagens((prevMensagens) => {
        const mensagensAtuais = [
          ...prevMensagens,
          { text: mensagem, time: new Date().toString() },
        ];
        localStorage.setItem("mensagens", JSON.stringify(mensagensAtuais));
        return mensagensAtuais;
      });
      setMensagem('')
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
        <SelecioneEstado />

        <div className="main_container">
          <ContainerConversas />

          <section className="main_conversa">
            <div className="primeiro_titulo">
              <h1>Chat</h1>
            </div>
            <div className="segundo_titulo">
              <img src={Pipoca} alt="" />
              <h1>Vocês estão conversando sobre o Pipoca</h1>
            </div>
            <Mensagens mensagens={mensagens} />
            <div className="div_input">
              <input
                type="text"
                placeholder="Digite sua mensagem"
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
              />
              <img src={Seta} alt="enviar" onClick={enviarMsg} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Chat;
