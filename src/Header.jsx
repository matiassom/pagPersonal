import './Header.css'

function Header(){
    return(
        <>
        <header>
        <h1>Sombeck.dev</h1>
        <nav>
            <ul>
                <li><a target='_blanck' rel="noopener" href="https://github.com/matiassom" ><img className="icono" title="githubIco" id="githubIco" src="/public/icons8-github-24.png"/>Github</a></li>
                <li><a target='_blanck' rel="noopener" href="https://www.linkedin.com/in/matias-s-6b6b41271/" ><img title="linkedinIco" id="linkedinIco" className="icono" src="/public/icons8-linkedin-50.png"/>Linkedin</a></li>
                <li><img title="IcoEnglish" id="usFlagIco" src="/public/estados-unidos-de-america.png"/>English</li>
                <li><img title="IcoMail" id="mailIco" src="/public/icons8-correo-de-manzana-50.png"/>Contacto</li>
            </ul>
        </nav>
        </header>
        </>
    )
}

export default Header