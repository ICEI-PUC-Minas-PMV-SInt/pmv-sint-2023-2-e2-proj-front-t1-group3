// Essa é a página de template, antes de usar duplique ela mantendo a original e renomeie para o nome da sua página. Não esqueça de mudar o nome da função e do export. Crie também um CSS único para sua página dentro da pasta "pages". As rotas estão sendo definidas no arquivo App.js. Basta criar um novo Route com o path da página e associar o componente ao element.

import "./TemplateSPA.css"
import "./GerenciamentoConta.css"
import Header from "../components/Header"
import Aside from "../components/Aside"
import Pipoca from "../assets/imgs/pipoca.jpg"
import Sophia from "../assets/imgs/sophia.jpg"
import SP from "../assets/imgs/icone_sp.svg"
import MG from "../assets/imgs/icone_mg.svg"
import ONG from "../assets/imgs/ong-amor-animal.png"
import Lapis from "../assets/imgs/icone_lapis.svg"
import WhatsApp from "../assets/imgs/icone_whatsapp.svg"
import Telefone from "../assets/imgs/icone_tel.svg"
import Email from "../assets/imgs/icone_email.svg"
import Ok from "../assets/imgs/icone_ok.svg"
import Olho from "../assets/imgs/icone_olho.svg"
import Lixo from "../assets/imgs/icone_lixo.svg"



function GerenciamentoConta() {
    let nomeUsuario = localStorage.getItem('nomeUsuario')

    return (
        <div className="container">
            <header id="header">
                <Header />
            </header>

            <aside id="aside">
                <Aside />
                
            </aside>

            <main id="main">
                <div className= "GerenciamentoConta">
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
                <nav className='hudLateral'>
                    <div className="gerencieSuaConta">
                    <h1>Gerencie sua conta</h1>
                    <div className="editConfig">
                    <h2>ONG Amor Animal</h2>
                    <img className="lapisEdit" src={Lapis} alt="Lapis Edit"></img>
                    
                    </div>
                    <div className="ongAtual">
                    <img className="fotoOng" src={ONG} alt="Símbolo da Ong"></img>
                    <div className="radios">
                        <h2>Tipo de perfil</h2>
        <input type="radio" value="Particular" name="opcaoOng" /> Particular
        <p></p>
        <input type="radio" value="O.N.G" name="opcaoOng" /> O.N.G
        <p></p>
        <input type="radio" value="Empresa Pública" name="opcaoOng" /> Empresa Pública
        <p></p>
        <input type="radio" value="Empresa Privada" name="opcaoOng" /> Empresa Privada
        </div>
      </div>
      <div className="whatsapp">
        <div className="caixaLogoWhatsapp">
      <img className="logoWhatsapp" src={WhatsApp} alt="Logo Whatsapp"></img>
      </div>
<div className="textoWhatsapp">
<h2>Atual</h2>
<p>(11) 99615-2237</p>

<img className="lapisEditWhatsapp" src={Lapis} alt="Lapis Edit"></img>
</div>
      </div>

      <div className="telefone">
        <div className="caixaLogoTelefone">
      <img className="logoTelefone" src={Telefone} alt="Telefone Imagem"></img>
      </div>
<div className="textoTelefone">
<h2>Atual</h2>
<p>(11) 99615-2237</p>
<img className="lapisEditTelefone" src={Lapis} alt="Lapis Edit"></img>
</div>
      </div>
      <div className="email">
      <img className="logoEmail" src={Email} alt="Email"></img>
      <input type="text" name="digitarEmail" id="digitar-email" placeholder="Digite seu novo e-mail"></input>
      <img className="logoOk" src={Ok} alt="botaoOk"></img>
      </div>
      <div class="selecione-estado">
                    
                    <label for="estado">Selecione seu Estado :</label>
                <select name="estado" id="estado">
                <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AM">AM</option>
                    <option value="AP">AP</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MG">MG</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="PR">PR</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="RS">RS</option>
                    <option value="SC">SC</option>
                    <option value="SE">SE</option>
                    <option value="SP">SP</option>
                    <option value="TO">TO</option>
                    </select>

</div>
<div className="cidadeSelecionada">
                    <p>Cidade:</p>
                    <h2>Marília</h2>
                    <img className="lapisEditCidade" src={Lapis} alt="Editar Cidade"></img>
                </div>
                    </div>
                    
                
                </nav>
                <div className="suasDoacoes">
                    <h2>{nomeUsuario == null ? "Suas Doações" : `Olá ${nomeUsuario}`}</h2>
                </div>
                <div className="containerAnimais">

                    
                        <div className="animal">
                            <span>
                                <img className="fotoAnimais" src={Pipoca} alt="Foto do cachorro Pipoca" />
                                <img className="estadoAnimais" src={SP} alt="Ícone do estado de São Paulo" />
                            </span>
                            <h3>Marília / SP</h3>
                            <h2>Pipoca</h2>
                            <ul>
                                <li>Cãozinho</li>
                                <li>Macho</li>
                                <li>Pequeno</li>
                                <li>Pelagem branca</li>
                            </ul>

                            <p>Super dócio, carinhoso e amigável, foi encontrado na Av. dos Estados. Aguardando um dono na ONG Amor Pelos Pets.</p>
                        
                            <div className="caixaAnimalInferior">
                            <a href="#">
                        <img className="olhoAnimal" src={Olho} alt="Visualizar Animal"></img>
                        </a>
                        <a href="#">
                        <img className="lapisAnimal" src={Lapis} alt="Editar Animal"></img>
                        </a>
                        <a href="#">
                        <img className="lixoAnimal" src={Lixo} alt="Descartar doação"></img>
                        </a>
                    
                        </div>
                        </div>
                   

                    
                        <div className="animal">
                            <span>
                                <img className="fotoAnimais" src={Sophia} alt="Foto da gata Sophia" />
                                <img className="estadoAnimais" src={MG} alt="Ícone do estado de Minas Gerais" />
                            </span>
                            <h3>Poços de Caldas / MG</h3>
                            <h2>Sophia</h2>
                            <ul>
                                <li>Gatinho</li>
                                <li>Fêmea</li>
                                <li>Pequeno</li>
                                <li>Pelagem caramelo</li>
                            </ul>

                            <p>Gata dócil já castrada com cerca de 1 ano de idade procura por um dono. Resgatei da rua e não tenho condições de ficar.</p>
                            <div className="caixaAnimalInferior">
                            <a href="#">
                        <img className="olhoAnimal" src={Olho} alt="Visualizar Animal"></img>
                        </a>
                        <a href="#">
                        <img className="lapisAnimal" src={Lapis} alt="Editar Animal"></img>
                        </a>
                        <a href="#">
                        <img className="lixoAnimal" src={Lixo} alt="Descartar doação"></img>
                        </a>
                    
                        </div>
                        </div>
                   

                    

                   


                    

                    

                    

                </div>
            
           
                </div>
            </main>
        </div>
    )

}

export default GerenciamentoConta