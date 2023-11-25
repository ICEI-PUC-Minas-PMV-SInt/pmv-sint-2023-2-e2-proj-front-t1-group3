import "./styleComponents/Header.css"
import Lupa from "../assets/imgs/icone_lupa.svg"
import BtnAdd from "../assets/imgs/icone_adicionar.svg"
import BtnMinhasDocoes from "../assets/imgs/icone_mao-coracao.svg"
import BtnCadastrar from "../assets/imgs/icone_lista-check.svg"
import BtnChat from "../assets/imgs/icone_chat.svg"

function Header() {
    return (
        <>
            <h1>Um novo conceito para <b> doar e adotar </b> cães e gatos</h1>

            <nav className="navBar">

                <span>
                    <img src={Lupa} alt="Ícone de lupa" />
                    <input type="text" />
                </span>

                <a href="/doe-um-bichinho">
                    <span>
                        <img src={BtnAdd} alt="Botão de adicionar" />
                        <h2>Doe um bichinho</h2>
                    </span>
                </a>

                <a href="/GerenciamentoConta">
                    <span>
                        <img src={BtnMinhasDocoes} alt="Botão de mão com coração" />
                        <h2>Minhas Doações</h2>
                    </span>
                </a>

                <a href="/cadastro-usuario">
                    <span>
                        <img src={BtnCadastrar} alt="Botão de prancheta com marcações de check" />
                        <h2>Cadastre-se</h2>
                    </span>
                </a>

                <a href="/chat">
                    <span>
                        <img src={BtnChat} alt="Botão de chat" />
                        <h2>Chat</h2>
                    </span>
                </a>

            </nav>
        </>
    )
}

export default Header