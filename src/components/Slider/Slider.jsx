import React, { useEffect, useState } from "react"

export default function Slider(props) {

    const [imageId, setImageId] = React.useState(0)
    const [isPaused, setIsPaused] = useState(false);

    const changeRight = () => {
        setImageId((prevImageId) =>
            prevImageId === props.src.length - 1 ? 0 : prevImageId + 1
        )
    }

    const changeLeft = () => {
        setImageId((prevImageId) =>
            prevImageId === 0 ? props.src.length - 1 : prevImageId - 1
        )
    }

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(changeRight, props.interval || 3000)
            return () => clearInterval(interval)
        }
    }, [isPaused, props.src])

    return (
        <>
            {props.src.length > 1 && <button className={props.buttonClassName} onClick={changeLeft}>&lt;</button>}
            <img onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} src={props.src[imageId]} alt={props.alt} className={props.imgClassName}/>
            {props.src.length > 1 && <button className={props.buttonClassName} onClick={changeRight}>&gt;</button> }
        </>
        
    )
}