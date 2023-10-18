import "./TemplateSPA.css"
import "./Login.css"
import Header from "../components/Header"
import Aside from "../components/Aside"
import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function esqueceuSenha(){
        alert('Essa funcionalidade não esta disponivel')
    }

    function logar() {

        if (email == 'teste@gmail.com' && senha == '12345678') {
            alert('Logado com sucesso')
            window.location.href = '/'
        }
        else {
            alert('Email ou senha inválida')
        }
    }

    function navegaCadastro(){
        window.location.href = '/cadastro-usuario'
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

                <div className="paginaLogin">

                    <div className="containerLogin">

                        <div className="faixaLaranja">
                            <h2>Faça login para encontrar ou ajudar seu novo amigo</h2>
                        </div>

                        <div className="limiteEntreElementos"></div>

                        <div className="campoLoginUsuario">
                            <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <div className="limiteEntreElementos"></div>

                        <div className="esqueceuSenha">
                            <h3>Esqueceu sua senha? <u onClick={esqueceuSenha}>Clique aqui</u> para redefinir</h3>
                        </div>

                        <div className="limiteEntreElementos"></div>

                        <div className="botaoLaranja" id="btnEntrar" onClick={logar}>
                            <h2>Entrar</h2>
                        </div>

                        <div className="limiteEntreElementos"></div>

                        <div className="subtituloNovoUsuario">
                            <h3>É novo por aqui?</h3>
                        </div>

                        <div className="limiteEntreElementos"></div>

                        <div className="botaoLaranja2" id="btnNavCadastro" onClick={navegaCadastro}>
                            <h2>Cadastre-se</h2>
                        </div>

                    </div>  

                </div>
            </main>
        </div>
    )
}

export default Login
