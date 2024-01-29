import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './principal.css'
import Proyecto from './proyecto.jsx'

function Principal(){
    const [data,setData] = useState("");

useEffect(()=>{
    fetch("https://gist.githubusercontent.com/matiassom/6e746a8cdafa8683b29c18d106290439/raw/95c5626d33b29c1b35081f4ae4fc13de83167341/gistfile1.txt")
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(error=>console.error("error fetching data",error));
    
},[]);
    
    return(
        <>

<div className="divPrincipal">
<video  autoPlay loop muted id="video1" src="../videoScreen.mp4" type="video/mp4"/>

<span id="chanelNumber"></span>
<span id="chanelName"></span>

<Link to={"/project/0"}><Proyecto chanNumber={data?data[0].nro:null} chanName={data?data[0].name:null} imgSrc={data?data[0].imgSrc:null} tecno={data?data[0].tec:null} description={data?data[0].lang.esp.Descripción:"."}/></Link>
<Link to={"/project/1"}><Proyecto chanNumber={data?data[1].nro:null} chanName={data?data[1].name:null} imgSrc={data?data[1].imgSrc:null} tecno={data?data[1].tec:null} description={data?data[1].lang.esp.Descripción:"."}/></Link>
<Link to={"/project/2"}><Proyecto chanNumber={data?data[2].nro:null} chanName={data?data[2].name:null} imgSrc={data?data[2].imgSrc:null} tecno={data?data[2].tec:null} description={data?data[2].lang.esp.Descripción:"."}/></Link>
<Link to={"/project/3"}><Proyecto chanNumber={data?data[3].nro:null} chanName={data?data[3].name:null} imgSrc={data?data[3].imgSrc:null} tecno={data?data[3].tec:null} description={data?data[3].lang.esp.Descripción:"."}/></Link>

</div>

<h2 id="divisor">Página de pruebas.</h2>
        </>
    )
}

export default Principal