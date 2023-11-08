import "./TemplateSPA.css"
import "./CadastroUsuario.css"
import Header from "../components/Header"
import Aside from "../components/Aside"
import { useState } from "react"

function CadastroUsuario() {

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')

    const [nome, setNome] = useState()
    const [whatsapp, setWhatsapp] = useState()
    const [telefone, setTelefone] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [tipoPerfil, setTipoPerfil] = useState()
    const [estado, setEstado] = useState()
    const [cidade, setCidade] = useState()
    const [maiorIdade, setMaiorIdade] = useState(false)

    function cadastrar() {
        if (maiorIdade == 'on') {

            if (nome == undefined || whatsapp == undefined || telefone == undefined || email == undefined || senha == undefined || tipoPerfil == undefined || estado == undefined || cidade == undefined) {
                alert('Por favor preencha todos os campos para prosseguir.')
            }
            else {

                usuarios.push({
                    nomeCad: nome,
                    whatsappCad: whatsapp,
                    telefoneCad: telefone,
                    emailCad: email,
                    senhaCad: senha,
                    tipoPerfilCad: tipoPerfil,
                    estadoCad: estado,
                    cidadeCad: cidade
                })

                localStorage.setItem('nomeUsuario', nome)
                localStorage.setItem('usuarios', JSON.stringify(usuarios))

                alert(`Olá ${nome} cadastro efetuado com sucesso, estamos te redirecionando para a página de login.`)

                window.location.href = '/login'
            }
        }

        else {
            alert('É necessário ter mais de 18 anos para se cadastrar!')
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

                <div className="paginaCadastro">

                    <div className="containerCadastro">

                        <div className="faixaLaranja">
                            <h2>Cadastre-se para encontrar ou ajudar seu novo amigo</h2>
                        </div>

                        <div className="coluna1">
                            <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                            <input type="number" placeholder="WhatsApp" onChange={(e) => setWhatsapp(e.target.value)} />
                            <input type="number" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
                            <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <div className="coluna2">


                            <h2>Tipo de Perfil</h2>

                            <span>
                                <input type="radio" name="tipoPerfil" value="particular" id="particular" onChange={(e) => setTipoPerfil(e.target.value)} />
                                <label htmlFor="particular">Particular</label>
                            </span>

                            <span>
                                <input type="radio" name="tipoPerfil" value="ong" id="ong" onChange={(e) => setTipoPerfil(e.target.value)} />
                                <label htmlFor="ong">O.N.G.</label>
                            </span>

                            <span>
                                <input type="radio" name="tipoPerfil" value="empresa-publica" id="empresa-publica" onChange={(e) => setTipoPerfil(e.target.value)} />
                                <label htmlFor="empresa-publica">Empresa Pública</label>
                            </span>

                            <span>
                                <input type="radio" name="tipoPerfil" value="empresa-particular" id="empresa-particular" onChange={(e) => setTipoPerfil(e.target.value)} />
                                <label htmlFor="empresa-particular">Empresa Particular</label>
                            </span>

                            <span>
                                <label id="labelEstado" htmlFor="estado">Selecione seu Estado </label>
                                <select id="estado" onChange={(e) => setEstado(e.target.value)}>
                                    <option value="AC" key="AC">AC</option>
                                    <option value="AL" key="AL">AL</option>
                                    <option value="AM" key="AM">AM</option>
                                    <option value="AP" key="AP">AP</option>
                                    <option value="BA" key="BA">BA</option>
                                    <option value="CE" key="CE">CE</option>
                                    <option value="DF" key="DF">DF</option>
                                    <option value="ES" key="ES">ES</option>
                                    <option value="GO" key="GO">GO</option>
                                    <option value="MA" key="MA">MA</option>
                                    <option value="MG" key="MG">MG</option>
                                    <option value="MS" key="MS">MS</option>
                                    <option value="MT" key="MT">MT</option>
                                    <option value="PA" key="PA">PA</option>
                                    <option value="PB" key="PB">PB</option>
                                    <option value="PE" key="PE">PE</option>
                                    <option value="PI" key="PI">PI</option>
                                    <option value="PR" key="PR">PR</option>
                                    <option value="RJ" key="RJ">RJ</option>
                                    <option value="RN" key="RN">RN</option>
                                    <option value="RO" key="RO">RO</option>
                                    <option value="RR" key="RR">RR</option>
                                    <option value="RS" key="RS">RS</option>
                                    <option value="SC" key="SC">SC</option>
                                    <option value="SE" key="SE">SE</option>
                                    <option value="SP" key="SP">SP</option>
                                    <option value="TO" key="TO">TO</option>
                                </select>
                            </span>

                            <input id="cidade" type="text" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />

                        </div>

                    </div>

                    <span id="containerMaiorIdade">
                        <input type="checkbox" name="maiorIdade" id="maiorIdade" onChange={(e) => setMaiorIdade(e.target.value)} />
                        <label id="labelMaiorIdade" htmlFor="maiorIdade">Confirmo ter mais de 18 anos</label>
                    </span>

                    <div className="faixaLaranjaBtn" id="btnCadastrar" onClick={cadastrar}><h2>Cadastrar</h2></div>

                </div>
            </main>
        </div>
    )

}

export default CadastroUsuario