export default function Icon(props) {

    return (
        <>
           <a href={props.link} target="_blank" title={props.title}>
                 <img alt={props.alt} src={props.src} className="card-icon" />
            </a>
        </>
    )
}