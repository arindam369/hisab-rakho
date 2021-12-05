import "./FormCard.css";

export default function FormCard(props){
    const FormCardClasses = "formCard "+props.className;
    return(
        <div className={FormCardClasses}> {props.children} </div>
    )
}