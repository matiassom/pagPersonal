import { useState } from 'react'
import './Header.css'


function Header(){

   const [verMail,setVerMail] = useState(null);
   const [mailClick,setMailClick] = useState(false);
   const showMail = () =>{
    verMail==null?setVerMail('/public/mailImg.png'):setVerMail(null);
    mailClick?setMailClick(false):setMailClick(true);
   }

   const mail = "contact@sombeck.dev"
   const copyToClip = () =>{
    navigator.clipboard.writeText(mail)
   }

   


    return(
        <>
        <header>
        <h1>Sombeck.dev</h1>
        <nav>
            <ul>
                <li><a target='_blanck' rel="noopener" href="https://github.com/matiassom" ><img className="icono" title="githubIco" id="githubIco" src="/public/icons8-github-24.png"/>Github</a></li>
                <li><a target='_blanck' rel="noopener" href="https://www.linkedin.com/in/matias-s-6b6b41271/" ><img title="linkedinIco" id="linkedinIco" className="icono" src="/public/icons8-linkedin-50.png"/>Linkedin</a></li>
                <li><img title="IcoEnglish" id="usFlagIco" src="/public/estados-unidos-de-america.png"/>English</li>
                {mailClick?
                <li onClick={showMail} id='liContacto'><img title="IcoMail" id="mailIco" src="/public/icons8-correo-de-manzana-50.png"/>Contacto</li>
                :
                <li onClick={showMail} ><img title="IcoMail" id="mailIco" src="/public/icons8-correo-de-manzana-50.png"/>Contacto</li>
                }
            </ul>
            {
            verMail&&(
                <>
                <div id='imgMail'>
                    <img id='dirMail' src={verMail}/>
                    <button onClick={copyToClip} id='copyMail'>Copy Mail</button>
                </div>
                </>
            )
        }
        </nav>
        </header>
        </>
    )
}

export default Header