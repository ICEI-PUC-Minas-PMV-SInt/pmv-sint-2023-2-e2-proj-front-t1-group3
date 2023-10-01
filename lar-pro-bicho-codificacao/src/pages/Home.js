import "./TemplateSPA.css"
import "./Home.css"
import Header from "../components/Header"
import Aside from "../components/Aside"
import Pipoca from "../assets/imgs/pipoca.jpg"
import Sophia from "../assets/imgs/sophia.jpg"
import SP from "../assets/imgs/icone_sp.svg"
import MG from "../assets/imgs/icone_mg.svg"

function Home() {

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

                <div className="conhecaAmigo">
                    <h2>{nomeUsuario == null ? "Conheça seu mais novo amigo!" : `Olá ${nomeUsuario}`}</h2>
                </div>

                <div className="containerAnimais">

                    <a href="#">
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
                        </div>
                    </a>

                    <a href="#">
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

                            <p>Gata dócil já castrada com cerca de 1 ano de idade procura por um dono. Resgatei da rua e não tenho condições de ficar com ela.</p>
                        </div>
                    </a>

                    <a href="#">
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
                        </div>
                    </a>

                    <a href="#">
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

                            <p>Gata dócil já castrada com cerca de 1 ano de idade procura por um dono. Resgatei da rua e não tenho condições de ficar com ela.</p>
                        </div>
                    </a>

                    <a href="#">
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
                        </div>
                    </a>

                    <a href="#">
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

                            <p>Gata dócil já castrada com cerca de 1 ano de idade procura por um dono. Resgatei da rua e não tenho condições de ficar com ela.</p>
                        </div>
                    </a>

                    <a href="#">
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
                        </div>
                    </a>

                    <a href="#">
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

                            <p>Gata dócil já castrada com cerca de 1 ano de idade procura por um dono. Resgatei da rua e não tenho condições de ficar com ela.</p>
                        </div>
                    </a>

                </div>

            </main>
        </div>
    )

}

export default Home