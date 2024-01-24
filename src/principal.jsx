import { useEffect, useState } from 'react'
import './principal.css'
import Proyecto from './proyecto.jsx'

function Principal(){
    const [data,setData] = useState("");

useEffect(()=>{
    fetch("/public/cont.json")
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(error=>console.error("error fetching data",error));
    
},[]);
    
    
    return(
        <>

<div className="divPrincipal">
<video  autoPlay loop muted id="video1" src="/public/videoScreen.mp4" type="video/mp4"/>

<span id="chanelNumber"></span>
<span id="chanelName"></span>

<Proyecto chanNumber={data?data[0].nro:null} chanName={data?data[0].name:null} imgSrc={data?data[0].imgSrc:null} tecno={data?data[0].tec:null} description={data?data[0].lang.esp.Descripción:"."}/>
<Proyecto chanNumber={data?data[1].nro:null} chanName={data?data[1].name:null} imgSrc={data?data[1].imgSrc:null} tecno={data?data[1].tec:null} description={data?data[1].lang.esp.Descripción:"."}/>
<Proyecto chanNumber={data?data[2].nro:null} chanName={data?data[2].name:null} imgSrc={data?data[2].imgSrc:null} tecno={data?data[2].tec:null} description={''}/>
<Proyecto chanNumber={data?data[3].nro:null} chanName={data?data[3].name:null} imgSrc={data?data[3].imgSrc:null} tecno={data?data[3].tec:null} description={''}/>

</div>

<h2 id="divisor">Página de pruebas.</h2>
        </>
    )
}

export default Principal