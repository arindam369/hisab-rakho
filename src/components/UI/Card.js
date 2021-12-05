import "./Card.css";

export default function Card(props){
    const myCardClasses = "card "+props.className;
    return(
        <div className={myCardClasses}>{props.children}</div>
    )
}