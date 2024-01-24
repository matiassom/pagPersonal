/* eslint-disable react/prop-types */
import './proyecto.css'
import { useState } from 'react'


function Proyecto (props) {
    
        const [chan,setChan] = useState("");
        const [chanNam,setChanNam] = useState(""); 
      
return(
    <>
        <span id="chanelNumber">{chan}</span>
            <span id="chanelName">{chanNam}</span>      
    <div className="divProyecto" onMouseOver={()=>(setChan(props.chanNumber),setChanNam(props.chanName))} onMouseLeave={()=>(setChan(""),setChanNam(""))}>
        <img src={props.imgSrc} className="imgPage"/>
        <h3 id='chanName'>{props.chanName}</h3>
        <span className="tecnologias">{props.tecno}</span>
        <article className="descripcionWeb"><p>{props.description.length<=110?props.description:props.description.slice(0,110)+" ..."}</p></article>
    </div>
    
    </>
)
}

export default Proyecto




