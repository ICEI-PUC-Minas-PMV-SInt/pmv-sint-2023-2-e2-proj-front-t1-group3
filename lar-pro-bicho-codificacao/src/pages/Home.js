import "./TemplateSPA.css"
import Header from "../components/Header"
import Aside from "../components/Aside"

function Home() {

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

export default Home