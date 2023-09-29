import Logo from "./Logo"
import "./styleComponents/Aside.css"
import Lupa from "../assets/imgs/icone_lupa.svg"
import Dog from "../assets/imgs/icone_cachorro.svg"
import Cat from "../assets/imgs/icone_gato.svg"
import F from "../assets/imgs/icone_f.svg"
import P from "../assets/imgs/icone_p.svg"
import M from "../assets/imgs/icone_m.svg"
import G from "../assets/imgs/icone_g.svg"
import Preto from "../assets/imgs/icone_preto.svg"
import Branco from "../assets/imgs/icone_branco.svg"
import Caramelo from "../assets/imgs/icone_camarelo-claro.svg"
import CarameloEscuro from "../assets/imgs/icone_caramelo-escuro.svg"
import PretoBranco from "../assets/imgs/icone_preto-branco.svg"
import BrancoCaramelo from "../assets/imgs/icone_branco-caramelo.svg"

function Aside() {
    return (
        <>
            <Logo />

            <div className="busca">

                <span id="filtrarBusca">
                    <img src={Lupa} alt="Ícone de lupa" />
                    <h2>Filtre sua busca</h2>
                </span>

                <span className="filtros">
                    <h2>Tipo de Animal</h2>
                    <img src={Dog} alt="Ícone cachorro" />
                    <img src={Cat} alt="Ícone gato" />
                </span>

                <span className="filtros">
                    <h2>Sexo</h2>
                    <img src={M} alt="Ícone masculino" />
                    <img src={F} alt="Ícone feminino" />
                </span>

                <span className="filtros">
                    <h2>Porte</h2>
                    <img src={P} alt="Ícone pequeno" />
                    <img src={M} alt="Ícone médio" />
                    <img src={G} alt="Ícone grande" />
                </span>

                <span className="filtros">
                    <h2>Cor</h2>
                    <img src={Preto} alt="Ícone pequeno" />
                    <img src={Branco} alt="Ícone médio" />
                    <img src={Caramelo} alt="Ícone grande" />
                    <img src={CarameloEscuro} alt="Ícone pequeno" />
                    <img src={PretoBranco} alt="Ícone médio" />
                    <img src={BrancoCaramelo} alt="Ícone grande" />
                </span>

            </div>
        </>
    )
}

export default Aside