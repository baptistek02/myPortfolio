import "./Footer.css"
import Icon from "../Icon/Icon"
import iconData from "../../IconData.jsx"

export default function Footer(props) {

    const icons = iconData.map((icon, index) => {
        return (
            <Icon  key={index} link={icon.link} src={icon.src} title={icon.title} alt={icon.alt} className="card-icon"/>
        )
    })

    return (
        <footer className={props.className}>
            {icons}
        </footer>
    )
}