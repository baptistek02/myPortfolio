import "./Main.css"
import Card from "../Card/Card.jsx"
import React, { forwardRef } from "react"

const Main = forwardRef((props, ref) => {
    return (
        <>
        <main ref={ref}>
            <Card
                img= {{
                    src:"/assets/pp.webp",
                    alt:"profile pic"
                }}
                title="Baptiste Klempka"
                shortdesc="Fullstack Developper"
                desc="Hey! I'm a computer science student and a passionate freelancer who loves creating custom solutions, whether it's Lua scripting for Garry's Mod, web development,
                 or automating tasks with Python. I’m always excited to take on new challenges, so if you have a project in mind, feel free to reach out to me!"
            />
            
        </main>
        <hr className="separator"/>
        </>
    )
})

export default Main