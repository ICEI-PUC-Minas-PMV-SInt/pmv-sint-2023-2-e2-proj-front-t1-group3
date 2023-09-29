import "./styleComponents/Logo.css"
import Logo from "../assets/imgs/logo.svg"

function LogoComponente() {
    return (
        <>
            <a href="/">
                <span id="logo"><img src={Logo} alt="Logo Lar pro Bicho" /></span>
            </a>
        </>
    )
}

export default LogoComponente