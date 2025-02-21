import "./Card.css"
import React from "react"
import Footer from "../Footer/Footer.jsx"

export default function Card(props) {

    const [isRevealed, setIsRevealed] = React.useState(false)

    function handleClick() {
        setIsRevealed(prev => !prev)
    }

    return (
        <div className="card-rectangle">
            <button onClick={handleClick} className="card-top">
                {!isRevealed ?
                    <>
                        <img src={props.img.src} alt={props.img.alt} className="circle-image"/>
                        <h1>{props.title}</h1>
                        <hr className="card-separator"/>
                        <h2>{props.shortdesc}</h2>
                    </>
                :
                <>
                    {props.desc && <p>{props.desc}</p>}
                    {props.video && <iframe width="350" height="350" src={props.video}></iframe>}
                </>
                }
            </button>
            <div className="card-bottom">
                <Footer/>
            </div>         
        </div >
    )
}