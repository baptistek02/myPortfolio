import "./Thumbnail.css"
import React, { useState, useEffect, useRef } from "react"
import { FadeInAnimation } from '../../animation/animation.js';
import infoLogo from "../../assets/info.png"
import Slider from "../Slider/Slider"


export default function Thumbnail(props) {

    const ref = useRef(null);
    const [showDesc, setShowDesc] = React.useState(false)

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current)
        animation.start(1000)
        return () => {
          animation.stop()
        }
    }, [])

    const changeCategory = () => {
        props.onCategoryChange(props.cat);
    }

    return (
        <section className="thumbnail-rectangle" ref={ref}>
            <section onMouseEnter={() => setShowDesc(true)} onMouseLeave={() => setShowDesc(false)} className="thumbnail-header">
                <h1>{props.title}</h1>
                {props.link && <a  href={props.link} className="thumbnail-info-link"  target="_blank" title={props.title}>
                    <img className="thumbnail-info" alt={props.title + "_info"} src={infoLogo} />
                </a>}          
            </section>
            {showDesc &&
                <section className="thumbnail-description"> 
                <p>{props.desc}</p>
            </section>}
            <Slider src={props.img.src} alt={props.img.alt} imgClassName="thumbnail-image" buttonClassName="thumbnail-button" />
            <footer>
                <button onClick={changeCategory}>{props.cat}</button>
            </footer>
        </section>
    )
}