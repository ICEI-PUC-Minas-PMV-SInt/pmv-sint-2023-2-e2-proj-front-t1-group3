// Essa é a página de template, antes de usar duplique ela mantendo a original e renomeie para o nome da sua página. Não esqueça de mudar o nome da função e do export. Crie também um CSS único para sua página dentro da pasta "pages". As rotas estão sendo definidas no arquivo App.js. Basta criar um novo Route com o path da página e associar o componente ao element.

import "./TemplateSPA.css"
import Header from "../components/Header"
import Aside from "../components/Aside"

function TEMPLATESPA() {

    return (
        <div className="container">
            <header id="header">
                <Header />
            </header>

            <aside id="aside">
                <Aside />
            </aside>

            <main id="main">
                {/* Sua página vai aqui */}
            </main>
        </div>
    )

}

export default TEMPLATESPA