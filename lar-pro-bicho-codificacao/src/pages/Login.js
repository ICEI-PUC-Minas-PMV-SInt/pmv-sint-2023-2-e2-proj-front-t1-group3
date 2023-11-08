import "./TemplateSPA.css"
import "./Login.css"
import Header from "../components/Header"
import Aside from "../components/Aside"
import { useState } from "react"

let usuarios = JSON.parse(localStorage.getItem('usuarios'))

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function esqueceuSenha() {
        alert('Essa funcionalidade não está disponivel')
    }

    function logar() {

        if (usuarios == null) {
            alert('É necessário se cadastrar antes de efetuar o login. Redirecionando para a página de cadastro.')
            window.location.href = '/cadastro-usuario'
        }
        else {
            let usuarioValidado = false

            usuarios.map((el, i) => {
                if (email == usuarios[i].emailCad && senha == usuarios[i].senhaCad) {
                    usuarioValidado = true
                }
            })

            if (usuarioValidado == false) {
                alert('Usuário ou senha incorretos, verifique por favor.')
            }
            else {
                alert('Login efetuado com sucesso, você será redirecionado para a página inicial.')
                window.location.href = '/'
            }
        }

    }

    function navegaCadastro() {
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
                            <h3>Esqueceu sua senha? <a href="#" onClick={esqueceuSenha}>Clique aqui</a> para redefinir</h3>
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
