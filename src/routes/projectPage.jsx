import { Outlet, useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import Header from "./Header.jsx"
import Footer from "./footer.jsx"
import './projectPage.css'


function ProjectPage(){

    const {id} = useParams();
    const [data,setData] = useState("");

    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/matiassom/6e746a8cdafa8683b29c18d106290439/raw/95c5626d33b29c1b35081f4ae4fc13de83167341/gistfile1.txt")
        .then(res=>res.json())
        .then(dat=>setData(dat[id]))
        .catch(error=>console.error("error fetching data",error));
    },[id]);

    return(
        <>
            <Header/>
            <div id="divProjectPage">
            <video autoPlay loop muted src={"/"+data.videoSrc}/>
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
            <Outlet/>
            <Footer/>
        </>
    )
}

export default ProjectPage