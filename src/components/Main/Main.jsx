import "./Main.css"
import Card from "../Card/Card.jsx"
import React, { forwardRef } from "react"

const Main = forwardRef((props, ref) => {
    return (
        <>
        <main ref={ref}>
            <Card
                img= {{
                    src:"src/assets/pp.jpg",
                    alt:"profile pic"
                }}
                title="Baptiste Klempka"
                shortdesc="Fullstack Developper"
                desc="Passionné par le développement logiciel,
                j’ai acquis une expérience significative en tant que freelancer,
                en développant des scripts en Lua et Python ainsi que des projets personnels,
                notamment dans les domaines du jeu vidéo et des systèmes d’information. "
            />
            
        </main>
        <hr className="separator"/>
        </>
    )
})

export default Main