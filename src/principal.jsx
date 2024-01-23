import './principal.css'
import Proyecto from './proyecto.jsx'

function Principal(){
    
    return(
        <>

<div className="divPrincipal">
<video  autoPlay loop muted id="video1" src="/public/videoScreen.mp4" type="video/mp4"/>

<span id="chanelNumber"></span>
<span id="chanelName"></span>

<Proyecto chanNumber={"01"} chanName={"SolitarioJs"} imgSrc={"/public/SolitarioJsByMatias.png"} tecno={"HTML | CSS | JavaScript"} description={'Juego clásico "Solitario", programado en JavaScript ipsum dolor sit amet consectetur adipisicing elit. At temporibus, ipsam nisi officia eaque maxime corrupti beatae aut earum, odit obcaecati vero veniam in aperiam harum? Aut reiciendis sapiente non. Necessitatibus, iste repellat dolorem provident amet voluptate repellendus, earum odio soluta, neque assumenda sint minus alias asperiores suscipit non iure molestiae numquam! Molestias reiciendis unde eos, voluptatum vel molestiae exercitationem accusamus quis illum repellat! Hic doloremque nulla at minus ab atque, ea exercitationem error suscipit aliquid porro reiciendis asperiores accusamus quidem id fuga, mollitia sapiente. Ut voluptates perspiciatis aspernatur rerum adipisci dolores autem neque et fugiat quia, molestiae laboriosam, iste sapiente quos libero accusantium molestias quis magnam exercitationem officiis nulla doloribus incidunt non. Velit cum nulla alias cumque fugit? Eius nobis omnis corporis ipsum vel facere quisquam aliquid. Saepe reprehenderit veniam amet praesentium quo, laboriosam eum harum sequi tempora minima. Consequuntur, quis distinctio perspiciatis reprehenderit tempora fuga atque! At eum saepe nisi nostrum aliquid exercitationem minus, sunt labore iure nemo unde recusandae, quaerat non, quis ipsa voluptatum? Necessitatibus autem consectetur ipsa, eos rerum sequi soluta fugiat cum, doloribus omnis, rem ab. Enim, voluptatibus accusantium optio atque officiis impedit dolore suscipit dolores cum eligendi dolor facere numquam id blanditiis assumenda quaerat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere reiciendis unde officia! Atque, placeat culpa. Animi, omnis molestias, nisi libero mollitia eum assumenda quasi cum sit ducimus quam et non!'}/>
<Proyecto chanNumber={"02"} chanName={"Dólar Argentina"} imgSrc={"/public/dolarArgentinaMini.png"} tecno={"HTML | CSS | Node.js"} description={'Juego clásico "Solitario", programado en JavaScript ipsum dolor sit amet consectetur adipisicing elit. At temporibus, ipsam nisi officia eaque maxime corrupti beatae aut earum, odit obcaecati vero veniam in aperiam harum? Aut reiciendis sapiente non. Necessitatibus, iste repellat dolorem provident amet voluptate repellendus, earum odio soluta, neque assumenda sint minus alias asperiores suscipit non iure molestiae numquam! Molestias reiciendis unde eos, voluptatum vel molestiae exercitationem accusamus quis illum repellat! Hic doloremque nulla at minus ab atque, ea exercitationem error suscipit aliquid porro reiciendis asperiores accusamus quidem id fuga, mollitia sapiente. Ut voluptates perspiciatis aspernatur rerum adipisci dolores autem neque et fugiat quia, molestiae laboriosam, iste sapiente quos libero accusantium molestias quis magnam exercitationem officiis nulla doloribus incidunt non. Velit cum nulla alias cumque fugit? Eius nobis omnis corporis ipsum vel facere quisquam aliquid. Saepe reprehenderit veniam amet praesentium quo, laboriosam eum harum sequi tempora minima. Consequuntur, quis distinctio perspiciatis reprehenderit tempora fuga atque! At eum saepe nisi nostrum aliquid exercitationem minus, sunt labore iure nemo unde recusandae, quaerat non, quis ipsa voluptatum? Necessitatibus autem consectetur ipsa, eos rerum sequi soluta fugiat cum, doloribus omnis, rem ab. Enim, voluptatibus accusantium optio atque officiis impedit dolore suscipit dolores cum eligendi dolor facere numquam id blanditiis assumenda quaerat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere reiciendis unde officia! Atque, placeat culpa. Animi, omnis molestias, nisi libero mollitia eum assumenda quasi cum sit ducimus quam et non!'}/>
<Proyecto chanNumber={"03"} chanName={"Sin Señal"} imgSrc={"/public/SolitarioJsByMatias.png"} tecno={"---- | ---- | ----"} description={''}/>
<Proyecto chanNumber={"04"} chanName={"Sin Señal"} imgSrc={"/public/SolitarioJsByMatias.png"} tecno={"---- | ---- | ----"} description={''}/>

</div>

<h2 id="divisor">Página de pruebas.</h2>
        </>
    )
}

export default Principal