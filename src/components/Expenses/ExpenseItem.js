import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate"


export default function ExpenseItem(props){
    var newExpenseArray = [];

    var expenseArray = JSON.parse(localStorage.getItem("localExpenses"));

    function deleteItem(expense_id){
        
        newExpenseArray =  expenseArray.filter(product => product.id !== expense_id)

        localStorage.setItem("localExpenses",JSON.stringify(newExpenseArray));
        props.changeDeleteExpenses();
        expenseArray = newExpenseArray;
    }

    return(
        <div className="container">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2> {props.title} </h2>
                <div className="expense-item__price"> {props.price}/- </div>
                <button className="delete-item" onClick={()=> {deleteItem(props.id)}} >X</button>
            </div>
        </div>
    )
}