import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import Header from "./Header"
import Footer from "./footer"
import './projectPage.css'


function ProjectPage(){

    const {id} = useParams();
    const [data,setData] = useState("");

    useEffect(()=>{
        fetch("/public/cont.json")
        .then(res=>res.json())
        .then(data=>setData(data[id]))
        .catch(error=>console.error("error fetching data",error));
    },[id]);




    return(
        <>
            <Header/>
            <div id="divProjectPage">
            <video autoPlay loop muted src={data.videoSrc}/>
            <h1>{data.name}</h1>
            <span id="tecSpan">{data.tec}</span>
            <div id="divDatos">
                <div id="leftDiv">
                    <span><strong>Link:</strong> <a target="_blank" rel="noreferrer" href={data.linkP}>{data.linkP}</a></span>
                    <span><strong>Github:</strong> <a target="_blank" rel="noreferrer" href={data.gith}>{data.gith}</a>   </span>
                    <span><strong>Deploy:</strong> {data?data.lang.esp.Despliegue:null}</span>
                </div>            
                <div id="rightDiv">
                    <p>{data?data.lang.esp.Descripción:null}</p>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProjectPage