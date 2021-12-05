import "./ExpenseDate.css"

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function ExpenseDate(props){
    
    // const month = props.date.toLocaleString("en-US",{month:"long"});
    const month = months[props.date.split("T")[0].split("-")[1]-1];

    // const day = props.date.toLocaleString("en-US",{day:"2-digit"});
    const day = props.date.split("T")[0].split("-")[2];

    // const year = props.date.getFullYear();
    const year = props.date.split("T")[0].split("-")[0]

    return (
        <div className="date">
            <div className="year">{year}</div>
            <div className="day">{day}</div>
            <div className="month">{month}</div>
        </div>
        
    )
}