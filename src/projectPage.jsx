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
            <h1>{data.name} {parseInt(id)+1}</h1>
            <span>Link: </span><a target="_blank" rel="noreferrer" href={data.linkP}>{data.linkP}</a>
            <span>Github:   </span><a target="_blank" rel="noreferrer" href={data.gith}>{data.gith}</a>
            </div>
            <Footer/>
        </>
    )
}

export default ProjectPage